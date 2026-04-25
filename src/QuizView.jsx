import { useState } from 'react';

export default function QuizView({ questions, xpReward, onComplete }) {
  const [idx, setIdx]         = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone]       = useState(false);

  const q = questions[idx];

  const pick = (i) => {
    if (selected !== null) return;
    setSelected(i);
  };

  const next = () => {
    const correct = selected === q.c;
    const na = [...answers, correct];
    if (idx + 1 >= questions.length) {
      setAnswers(na);
      setDone(true);
    } else {
      setAnswers(na);
      setIdx(idx + 1);
      setSelected(null);
    }
  };

  if (done) {
    const score  = answers.filter(Boolean).length;
    const pct    = Math.round(score / questions.length * 100);
    const passed = pct >= 60;
    const earned = passed
      ? Math.round(xpReward * (pct / 100))
      : Math.round(xpReward * 0.1);

    return (
      <div className="fade-in" style={{ textAlign: 'center', padding: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>
          {pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '💀'}
        </div>
        <div style={{
          fontFamily: "'Orbitron', monospace",
          color: '#00ff41', fontSize: 16, fontWeight: 900,
          textShadow: '0 0 10px #00ff41', marginBottom: 8,
        }}>
          {pct >= 80 ? 'ELITE PERFORMANCE' : pct >= 60 ? 'MISSION SUCCESS' : 'MISSION FAILED'}
        </div>
        <div style={{ color: '#b0f0b0', fontSize: 12, marginBottom: 20 }}>
          {score}/{questions.length} correct — {pct}%
        </div>

        <div style={{
          background: '#001a00', border: '1px solid #00ff41',
          borderRadius: 8, padding: 18, marginBottom: 20,
        }}>
          <div style={{
            color: '#00ff41', fontFamily: "'Orbitron', monospace",
            fontSize: 26, fontWeight: 900,
          }}>
            +{earned} XP
          </div>
          <div style={{ color: '#b0f0b0', fontSize: 11, marginTop: 4 }}>
            Experience earned
          </div>
        </div>

        {/* Per-question review */}
        <div style={{ textAlign: 'left', marginBottom: 20 }}>
          {questions.map((q2, i) => (
            <div key={i} style={{
              background: answers[i] ? '#001a00' : '#1a0000',
              border: `1px solid ${answers[i] ? '#00ff4144' : '#ff333344'}`,
              borderRadius: 6, padding: '8px 12px', marginBottom: 6,
              fontSize: 11,
            }}>
              <span style={{ color: answers[i] ? '#00ff41' : '#ff4444' }}>
                {answers[i] ? '✓' : '✗'}
              </span>
              <span style={{ color: '#b0f0b0', marginLeft: 8 }}>{q2.q}</span>
              {!answers[i] && (
                <div style={{ color: '#00ff41', marginTop: 4, paddingLeft: 16, fontSize: 10 }}>
                  Correct: [{String.fromCharCode(65 + q2.c)}] {q2.a[q2.c]}
                </div>
              )}
            </div>
          ))}
        </div>

        {!passed && (
          <div style={{
            color: '#ff8888', fontSize: 11, marginBottom: 16,
            padding: 10, background: '#1a0000',
            border: '1px solid #ff3333', borderRadius: 6,
          }}>
            Score below 60%. Review the lesson and retake!
          </div>
        )}

        <button
          onClick={() => onComplete(earned, pct, passed)}
          style={{
            width: '100%',
            background: passed ? '#00ff41' : '#ff3333',
            color: '#000', border: 'none',
            padding: '13px 0', borderRadius: 6,
            fontFamily: "'Orbitron', monospace",
            fontSize: 13, fontWeight: 900,
          }}
        >
          {passed ? 'CONTINUE →' : 'RETRY'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ padding: '0 4px' }}>
      {/* Progress bar */}
      <div style={{
        background: '#111', borderRadius: 3, height: 4,
        overflow: 'hidden', marginBottom: 14,
      }}>
        <div style={{
          width: `${(idx / questions.length) * 100}%`,
          height: '100%', background: '#00ff41',
          borderRadius: 3, transition: 'width .3s',
        }} />
      </div>

      <div style={{ color: '#888', fontSize: 10, marginBottom: 10 }}>
        QUESTION {idx + 1} / {questions.length}
      </div>

      {/* Question */}
      <div style={{
        background: '#0a1a0a', border: '1px solid #00ff4133',
        borderRadius: 8, padding: 16, marginBottom: 14,
      }}>
        <div style={{ color: '#00ff88', fontSize: 13, lineHeight: 1.5 }}>
          &gt; {q.q}
        </div>
      </div>

      {/* Options */}
      {q.a.map((opt, i) => {
        const isRight = selected !== null && i === q.c;
        const isWrong = selected === i && i !== q.c;
        return (
          <button
            key={i}
            onClick={() => pick(i)}
            style={{
              display: 'block', width: '100%',
              textAlign: 'left',
              padding: '12px 14px', marginBottom: 8,
              borderRadius: 6,
              border: `1px solid ${
                isRight ? '#00ff41' :
                isWrong ? '#ff3333' :
                selected !== null ? '#222' : '#00ff4144'
              }`,
              background: isRight ? '#003300' : isWrong ? '#1a0000' : selected !== null ? '#0a0a0a' : '#0a1a0a',
              color: isRight ? '#00ff41' : isWrong ? '#ff4444' : '#b0f0b0',
              fontSize: 12, cursor: selected !== null ? 'default' : 'pointer',
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            [{String.fromCharCode(65 + i)}] {opt}
            {isRight && ' ✓'}{isWrong && ' ✗'}
          </button>
        );
      })}

      {selected !== null && (
        <button
          onClick={next}
          style={{
            width: '100%', background: '#00ff41', color: '#000',
            border: 'none', padding: '12px 0', borderRadius: 6,
            fontFamily: "'Orbitron', monospace",
            fontSize: 13, fontWeight: 900, marginTop: 8,
          }}
        >
          {idx + 1 >= questions.length ? 'FINISH' : 'NEXT →'}
        </button>
      )}
    </div>
  );
}
