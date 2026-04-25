import { useState, useRef, useEffect, useCallback } from 'react';
import { runCmd } from '../data/terminal.js';

const PROMPT_COLOR = '#00ff41';
const CMD_COMPLETIONS = [
  'help','ls','cd','cat','pwd','nmap','sudo','find','grep','ping','curl','wget',
  'hydra','sqlmap','gobuster','nikto','hashcat','john','msfconsole','nc','ssh',
  'chmod','history','clear','echo','ip','ifconfig','netstat','ps','uname','dig',
  'whois','whatweb','python3','export','crontab','which','vim','nano','rm','cp','mv',
];

export default function Terminal() {
  const [lines, setLines]   = useState([
    { type: 'banner', text: `╔════════════════════════════════════════════════╗
║     HackTerminal v3.0 — Kali Linux Sim         ║
║     HackAcademy | Defend Bangladesh 🇧🇩         ║
╚════════════════════════════════════════════════╝
Type 'help' for commands | ↑↓ for history | Tab to autocomplete` },
  ]);
  const [input, setInput]   = useState('');
  const [cwd, setCwd]       = useState('/home/hacker');
  const [hist, setHist]     = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef   = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const submit = useCallback(() => {
    if (!input.trim()) return;
    const newHist = [...hist, input];
    setHist(newHist);
    setHistIdx(-1);

    const { out, cwd: newCwd } = runCmd(input, cwd, newHist);
    if (out === '__CLEAR__') {
      setLines([]);
    } else {
      setLines(prev => [
        ...prev,
        { type: 'cmd', text: `${cwd}$ ${input}` },
        ...(out ? [{ type: 'output', text: out }] : []),
      ]);
    }
    setCwd(newCwd);
    setInput('');
  }, [input, cwd, hist]);

  const onKey = useCallback((e) => {
    if (e.key === 'Enter') { submit(); return; }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const ni = Math.min(histIdx + 1, hist.length - 1);
      setHistIdx(ni);
      setInput(hist[hist.length - 1 - ni] ?? '');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const ni = Math.max(histIdx - 1, -1);
      setHistIdx(ni);
      setInput(ni === -1 ? '' : (hist[hist.length - 1 - ni] ?? ''));
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = CMD_COMPLETIONS.find(c => c.startsWith(input) && c !== input);
      if (match) setInput(match);
      return;
    }
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
      return;
    }
  }, [submit, hist, histIdx, input]);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        background: '#050d05',
        border: '1px solid #00ff4133',
        borderRadius: 8,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'text',
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {/* Title bar */}
      <div style={{
        background: '#0a1a0a',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderBottom: '1px solid #00ff4122',
        flexShrink: 0,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
        <span style={{
          color: '#00ff41', fontSize: 10, marginLeft: 8,
          fontFamily: "'Orbitron', monospace", letterSpacing: 1,
        }}>
          HACK TERMINAL — kali@HackAcademy
        </span>
      </div>

      {/* Output area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', fontSize: 11 }}>
        {lines.map((line, i) => (
          <pre key={i} style={{
            color: line.type === 'cmd' ? PROMPT_COLOR : line.type === 'banner' ? '#00ff88' : '#b0f0b0',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            marginBottom: 4,
            lineHeight: 1.55,
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 11,
          }}>
            {line.text}
          </pre>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '7px 12px',
        borderTop: '1px solid #00ff4122',
        background: '#0a1a0a',
        flexShrink: 0,
      }}>
        <span style={{
          color: PROMPT_COLOR, fontSize: 11, marginRight: 6, flexShrink: 0,
          fontFamily: "'Share Tech Mono', monospace",
        }}>
          {cwd}$
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: PROMPT_COLOR, fontSize: 11, caretColor: PROMPT_COLOR,
            fontFamily: "'Share Tech Mono', monospace",
          }}
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
          autoFocus
        />
      </div>
    </div>
  );
}
