# 🔓 HackAcademy — Ethical Hacking Learning App

> **Learn ethical hacking from basics to elite. Protect Bangladesh 🇧🇩**

A full gamified mobile-first ethical hacking learning platform built with React + Vite.

---

## ✨ Features

- 🎮 **Gamified** — XP, levels (Script Kiddie → Nation's Guardian), progress tracking
- 💾 **Persistent Progress** — localStorage saves every completed lesson & test automatically
- 📚 **15 Modules, 45+ Lessons, 300+ Questions**
- 🖥️ **Live Linux Terminal** — Full Kali Linux simulation with 30+ working commands
- 📱 **Mobile-first** — Designed for phones, works great on desktop
- 🔒 **Module locking** — Complete tests to unlock next module
- 📊 **Progress tracking** — Per-module progress bars, scores, XP history

---

## 📚 Curriculum (15 Modules)

| # | Module | Topics |
|---|--------|--------|
| 1 | 🔓 Hacker Foundations | Ethics, mindset, BD laws |
| 2 | 🌐 Networking | OSI, TCP/IP, ports, subnetting |
| 3 | 🐧 Linux for Hackers | Kali, permissions, bash scripting |
| 4 | 🔍 Reconnaissance | OSINT, Google Dorking, Nmap |
| 5 | 📡 Vulnerability Analysis | Enumeration, Nessus, CVE research |
| 6 | 🕷️ Web App Hacking | OWASP Top 10, SQLi, XSS, Burp Suite |
| 7 | 💥 Exploitation | Metasploit, manual exploits, buffer overflow |
| 8 | 🏠 Post Exploitation | PrivEsc, persistence, lateral movement |
| 9 | 🔑 Password Attacks | Hashcat, John, Hydra, credential spraying |
| 10 | 📡 Wireless Hacking | WPA2 cracking, MitM, Wireshark |
| 11 | 🎭 Social Engineering | Phishing, SET, pretexting |
| 12 | 🔐 Cryptography | Encryption, hashing, crypto attacks |
| 13 | 🏛️ Active Directory | Kerberoasting, BloodHound, domain takeover |
| 14 | 💰 Bug Bounty | Methodology, HackerOne, report writing |
| 15 | ☁️ Cloud/Mobile/API | AWS attacks, Android hacking, API security |

---

## 🚀 Quick Start

### Option 1: Run locally (Recommended)

```bash
git clone https://github.com/YOUR_USERNAME/hack-academy.git
cd hack-academy
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Option 2: Build for production

```bash
npm run build
# Static files in dist/ — upload to any hosting!
```

### Option 3: Deploy free to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages → Source: GitHub Actions
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool (fast!)
- **localStorage** — Persistent progress (no backend needed)
- **Pure CSS** — No UI library dependencies
- **Google Fonts** — Orbitron + Share Tech Mono

---

## 📱 How It Works

1. **Modules tab** → Open a module → Read lesson → Take quiz (60%+ to pass)
2. Complete all lessons → Take the **Module Final Test**
3. Pass 60%+ → **Next module unlocks automatically**
4. **Progress is saved** in localStorage — closes and reopens = progress stays!
5. Practice commands anytime in the **Terminal tab**

---

## ⚠️ Legal Notice

This app is for **EDUCATIONAL PURPOSES ONLY**.

- Always obtain **written authorization** before testing any system
- Bangladesh **Digital Security Act 2018** — unauthorized hacking = up to 14 years imprisonment
- Practice only on: TryHackMe, HackTheBox, VulnHub, your own lab
- Use your skills to **protect Bangladesh** 🇧🇩 — not to harm it

---

## 🤝 Contributing

PRs welcome! Ideas:
- Add more modules (IoT, malware analysis, forensics)
- Add more terminal commands
- Add achievement badges
- Add multiplayer leaderboard

---

## 📄 License

MIT License — Free to use, modify, and distribute.

---

**Made with ❤️ for Bangladesh's future ethical hackers 🇧🇩**
