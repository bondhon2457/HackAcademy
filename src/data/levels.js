export const LEVELS = [
  { n:1,  title:"Script Kiddie",      badge:"🐣", min:0,     color:"#888" },
  { n:2,  title:"Newbie Hacker",      badge:"💻", min:300,   color:"#aaa" },
  { n:3,  title:"Junior Pentester",   badge:"🔍", min:800,   color:"#00bfff" },
  { n:4,  title:"Security Analyst",   badge:"🛡️",  min:1500,  color:"#00bfff" },
  { n:5,  title:"Ethical Hacker",     badge:"⚔️",  min:2800,  color:"#00ff41" },
  { n:6,  title:"Senior Pentester",   badge:"🔓", min:4500,  color:"#00ff41" },
  { n:7,  title:"Security Expert",    badge:"💎", min:7000,  color:"#ff6b00" },
  { n:8,  title:"Red Team Operator",  badge:"🎯", min:10000, color:"#ff6b00" },
  { n:9,  title:"Elite Hacker",       badge:"💀", min:15000, color:"#ff0055" },
  { n:10, title:"Nation's Guardian",  badge:"🇧🇩", min:22000, color:"#ffd700" },
];

export function getLevel(xp) {
  return LEVELS.reduce((cur, l) => xp >= l.min ? l : cur, LEVELS[0]);
}

export function getNextLevel(xp) {
  return LEVELS.find(l => l.min > xp) || LEVELS[LEVELS.length - 1];
}

export function getLevelProgress(xp) {
  const cur  = getLevel(xp);
  const next = getNextLevel(xp);
  if (cur.n === next.n) return 100;
  return Math.min(100, Math.round((xp - cur.min) / (next.min - cur.min) * 100));
}
