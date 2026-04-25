export default function LessonContent({ items }) {
  return (
    <div style={{ padding: '0 2px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="fade-in"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {item.t === 'h' && (
            <div style={{
              fontFamily: "'Orbitron', monospace",
              color: '#00ff41', fontSize: 13, fontWeight: 900,
              textShadow: '0 0 8px #00ff41',
              borderBottom: '1px solid #00ff4133',
              paddingBottom: 10, marginBottom: 14,
            }}>
              {item.v}
            </div>
          )}

          {item.t === 'p' && (
            <p style={{ color: '#b0f0b0', lineHeight: 1.7, marginBottom: 12, fontSize: 12 }}>
              {item.v}
            </p>
          )}

          {item.t === 'code' && (
            <pre style={{
              background: '#0a1a0a',
              border: '1px solid #00ff4133',
              borderLeft: '3px solid #00ff41',
              padding: 12, borderRadius: 4,
              color: '#00ff41', fontSize: 10.5,
              overflowX: 'auto', marginBottom: 12,
              lineHeight: 1.65, whiteSpace: 'pre-wrap',
              fontFamily: "'Share Tech Mono', monospace",
            }}>
              {item.v}
            </pre>
          )}

          {item.t === 'tip' && (
            <div style={{
              background: '#001500',
              border: '1px solid #00ff41', borderLeft: '3px solid #00ff41',
              padding: 10, borderRadius: 4,
              color: '#00ff88', fontSize: 11, marginBottom: 12,
            }}>
              💡 {item.v}
            </div>
          )}

          {item.t === 'warn' && (
            <div style={{
              background: '#1a0000',
              border: '1px solid #ff3333', borderLeft: '3px solid #ff3333',
              padding: 10, borderRadius: 4,
              color: '#ff8888', fontSize: 11, marginBottom: 12,
            }}>
              {item.v}
            </div>
          )}

          {item.t === 'list' && (
            <ul style={{ paddingLeft: 0, marginBottom: 12, listStyle: 'none' }}>
              {item.v.map((li, j) => (
                <li key={j} style={{
                  color: '#b0f0b0', fontSize: 11.5,
                  marginBottom: 6,
                  borderLeft: '2px solid #00ff4166',
                  paddingLeft: 10, lineHeight: 1.5,
                }}>
                  {li}
                </li>
              ))}
            </ul>
          )}

          {item.t === 'terms' && (
            <div style={{ marginBottom: 12 }}>
              {item.v.map(([term, def], j) => (
                <div key={j} style={{
                  background: '#0a0f0a',
                  border: '1px solid #00ff4133',
                  borderRadius: 4, padding: 10, marginBottom: 8,
                }}>
                  <div style={{
                    color: '#00ff41', fontSize: 12,
                    fontWeight: 'bold', marginBottom: 4,
                  }}>
                    {term}
                  </div>
                  <div style={{ color: '#b0f0b0', fontSize: 11 }}>{def}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
