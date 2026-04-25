import { useState, useCallback } from 'react';
import { MODULES } from './data/curriculum.js';
import { LEVELS, getLevel, getNextLevel, getLevelProgress } from './data/levels.js';
import { useProgress } from './hooks/useProgress.js';
import Terminal from './components/Terminal.jsx';
import LessonContent from './components/LessonContent.jsx';
import QuizView from './components/QuizView.jsx';

/* ── NOTIFICATION ─────────────────────────────────────────── */
function Notify({ note }) {
  if (!note) return null;
  const colors = {
    success: { bg: '#001a00', border: '#00ff41', text: '#00ff41' },
    error:   { bg: '#1a0000', border: '#ff3333', text: '#ff8888' },
    info:    { bg: '#001020', border: '#00bfff', text: '#00bfff' },
  };
  const c = colors[note.type] || colors.success;
  return (
    <div className="pop-in" style={{
      position: 'fixed', top: 72, left: '50%', transform: 'translateX(-50%)',
      zIndex: 9999, width: '90%', maxWidth: 400,
      background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 8, padding: '12px 16px', textAlign: 'center',
      color: c.text, fontSize: 12,
      boxShadow: `0 4px 24px #000c, 0 0 12px ${c.border}44`,
    }}>
      {note.msg}
    </div>
  );
}

/* ── XP BAR ─────────────────────────────────────────────────── */
function XpBar({ xp }) {
  const level    = getLevel(xp);
  const next     = getNextLevel(xp);
  const pct      = getLevelProgress(xp);
  return (
    <div>
      <div style={{
        background: '#0f0f0f', borderRadius: 4, height: 6,
        border: '1px solid #00ff4133', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: 'linear-gradient(90deg,#00ff41,#00ff88)',
          borderRadius: 4, transition: 'width .6s ease',
          boxShadow: '0 0 6px #00ff4188',
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <span style={{ color: '#888', fontSize: 9 }}>{xp} XP</span>
        <span style={{ color: '#555', fontSize: 9 }}>LV{level.n + 1} → {next.min} XP</span>
      </div>
    </div>
  );
}

/* ── MODULE CARD ────────────────────────────────────────────── */
function ModuleCard({ mod, progress, isLocked, isTestDone, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', background: isLocked ? '#0a0a0a' : isTestDone ? '#001800' : '#0a1a0a',
        border: `1px solid ${isLocked ? '#222' : isTestDone ? mod.color : mod.color + '44'}`,
        borderRadius: 12, padding: 16, marginBottom: 12, textAlign: 'left',
        cursor: isLocked ? 'not-allowed' : 'pointer',
        opacity: isLocked ? 0.45 : 1,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: isLocked ? 0 : 10 }}>
        <div style={{ fontSize: 26, filter: isLocked ? 'grayscale(1)' : 'none', flexShrink: 0 }}>
          {mod.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 700,
            color: isLocked ? '#444' : mod.color, marginBottom: 3,
          }}>
            {mod.title} {isTestDone && '✓'}
          </div>
          <div style={{ color: '#666', fontSize: 10 }}>{mod.desc}</div>
        </div>
        <div style={{ flexShrink: 0 }}>
          {isLocked
            ? <span style={{ fontSize: 18 }}>🔒</span>
            : <span style={{ color: mod.color, fontFamily: "'Orbitron', monospace", fontSize: 10 }}>{mod.xp}XP</span>
          }
        </div>
      </div>
      {!isLocked && (
        <div>
          <div style={{ background: '#111', borderRadius: 3, height: 4, overflow: 'hidden' }}>
            <div style={{
              width: `${progress}%`, height: '100%',
              background: mod.color, borderRadius: 3, transition: 'width .5s',
            }} />
          </div>
          <div style={{ color: '#555', fontSize: 9, marginTop: 3 }}>
            {Math.round(progress)}% complete • {mod.lessons.length} lessons
          </div>
        </div>
      )}
    </button>
  );
}

/* ── LESSON SCREEN ──────────────────────────────────────────── */
function LessonScreen({ lesson, mod, onBack, onComplete }) {
  const [stage, setStage] = useState('content'); // content | quiz

  return (
    <div style={{ background: '#060a06', minHeight: '100vh', fontFamily: "'Share Tech Mono', monospace" }}>
      {/* Header */}
      <div style={{
        background: '#0a1a0a', padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${mod.color}33`,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: `1px solid ${mod.color}66`,
            color: mod.color, padding: '4px 10px', borderRadius: 4, fontSize: 11,
          }}
        >
          ← BACK
        </button>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Orbitron', monospace", fontSize: 11, fontWeight: 700,
            color: mod.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {lesson.title}
          </div>
          <div style={{ color: '#555', fontSize: 9 }}>+{lesson.xp} XP on completion</div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          {['content', 'quiz'].map(s => (
            <button
              key={s}
              onClick={() => setStage(s)}
              style={{
                background: stage === s ? mod.color : 'transparent',
                color: stage === s ? '#000' : mod.color,
                border: `1px solid ${mod.color}`,
                padding: '4px 10px', borderRadius: 4, fontSize: 10,
                fontFamily: "'Orbitron', monospace",
              }}
            >
              {s === 'content' ? 'LESSON' : 'QUIZ'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: 16, maxWidth: 640, margin: '0 auto', paddingBottom: 40 }}>
        {stage === 'content' ? (
          <>
            <LessonContent items={lesson.content} />
            <button
              onClick={() => setStage('quiz')}
              style={{
                width: '100%', background: mod.color, color: '#000',
                border: 'none', padding: '14px 0', borderRadius: 8,
                fontFamily: "'Orbitron', monospace",
                fontSize: 14, fontWeight: 900, marginTop: 16,
              }}
            >
              TAKE QUIZ →
            </button>
          </>
        ) : (
          <QuizView
            questions={lesson.quiz}
            xpReward={lesson.xp}
            onComplete={onComplete}
          />
        )}
      </div>
    </div>
  );
}

/* ── MODULE SCREEN ──────────────────────────────────────────── */
function ModuleScreen({ mod, progress, onBack, onOpenLesson, onOpenTest, isLessonDone, isTestDone, canTakeTest }) {
  const doneLessons = mod.lessons.filter(l => isLessonDone(l.id)).length;

  return (
    <div style={{ background: '#060a06', minHeight: '100vh', fontFamily: "'Share Tech Mono', monospace" }}>
      <div style={{
        background: '#0a1a0a', padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${mod.color}33`,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: `1px solid ${mod.color}66`,
            color: mod.color, padding: '4px 10px', borderRadius: 4, fontSize: 11,
          }}
        >
          ← BACK
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 700, color: mod.color }}>
            {mod.emoji} {mod.title}
          </div>
          <div style={{ color: '#666', fontSize: 9 }}>{mod.desc}</div>
        </div>
        <div style={{
          background: mod.color + '22', border: `1px solid ${mod.color}`,
          borderRadius: 6, padding: '4px 10px', color: mod.color,
          fontSize: 10, fontFamily: "'Orbitron', monospace", flexShrink: 0,
        }}>
          {mod.xp}XP
        </div>
      </div>

      <div style={{ padding: 16, maxWidth: 640, margin: '0 auto', paddingBottom: 40 }}>
        {/* Progress summary */}
        <div style={{
          background: '#0a1a0a', border: `1px solid ${mod.color}33`,
          borderRadius: 10, padding: 14, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: '#888', fontSize: 10 }}>MODULE PROGRESS</span>
            <span style={{ color: mod.color, fontSize: 10 }}>{doneLessons}/{mod.lessons.length} lessons</span>
          </div>
          <div style={{ background: '#111', borderRadius: 4, height: 6, overflow: 'hidden' }}>
            <div style={{
              width: `${progress}%`, height: '100%',
              background: mod.color, borderRadius: 4, transition: 'width .5s',
            }} />
          </div>
        </div>

        {/* Lessons */}
        <div style={{ fontFamily: "'Orbitron', monospace", color: '#888', fontSize: 9, marginBottom: 10 }}>
          // LESSONS
        </div>
        {mod.lessons.map((lesson, i) => {
          const done = isLessonDone(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => onOpenLesson(lesson)}
              className="fade-in"
              style={{
                animationDelay: `${i * 0.07}s`,
                width: '100%',
                background: done ? '#001800' : '#0a1a0a',
                border: `1px solid ${done ? mod.color : mod.color + '33'}`,
                borderRadius: 10, padding: 14, marginBottom: 10, textAlign: 'left',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: done ? mod.color : mod.color + '22',
                border: `2px solid ${mod.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: done ? 16 : 14, flexShrink: 0,
                color: done ? '#000' : mod.color,
                fontFamily: "'Orbitron', monospace", fontWeight: 900,
              }}>
                {done ? '✓' : (i + 1)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  color: done ? mod.color : '#ddd', fontSize: 12,
                  fontFamily: "'Orbitron', monospace", fontWeight: 700, marginBottom: 3,
                }}>
                  {lesson.title}
                </div>
                <div style={{ color: '#666', fontSize: 10 }}>
                  {lesson.quiz.length} quiz questions • +{lesson.xp} XP
                  {done && ' • COMPLETED ✓'}
                </div>
              </div>
              <span style={{ color: mod.color, fontSize: 18, flexShrink: 0 }}>→</span>
            </button>
          );
        })}

        {/* Module Test */}
        <div style={{ marginTop: 12, borderTop: `1px solid ${mod.color}22`, paddingTop: 16 }}>
          <div style={{ color: '#555', fontSize: 10, textAlign: 'center', marginBottom: 12 }}>
            — COMPLETE ALL LESSONS TO UNLOCK THE MODULE TEST —
          </div>
          <button
            onClick={() => { if (canTakeTest) onOpenTest(); }}
            style={{
              width: '100%',
              background: canTakeTest ? (isTestDone ? '#001800' : '#1a0010') : '#0a0a0a',
              border: `2px solid ${canTakeTest ? (isTestDone ? mod.color : '#ff0055') : '#333'}`,
              borderRadius: 10, padding: 18, cursor: canTakeTest ? 'pointer' : 'not-allowed',
              opacity: canTakeTest ? 1 : 0.4,
            }}
          >
            <div style={{
              fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 900,
              color: canTakeTest ? (isTestDone ? mod.color : '#ff0055') : '#444',
              marginBottom: 4,
            }}>
              {isTestDone ? '✓ MODULE TEST PASSED' : '⚡ FINAL MODULE TEST'}
            </div>
            <div style={{ color: '#666', fontSize: 10 }}>
              {mod.test.length} questions • 60%+ to pass • Unlocks next module
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── TEST SCREEN ────────────────────────────────────────────── */
function TestScreen({ mod, onBack, onComplete }) {
  return (
    <div style={{ background: '#060a06', minHeight: '100vh', fontFamily: "'Share Tech Mono', monospace" }}>
      <div style={{
        background: '#1a0010', padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: '1px solid #ff005533',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: '1px solid #ff005566',
            color: '#ff0055', padding: '4px 10px', borderRadius: 4, fontSize: 11,
          }}
        >
          ← ABORT
        </button>
        <div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 12, fontWeight: 900, color: '#ff0055' }}>
            MODULE TEST: {mod.title.toUpperCase()}
          </div>
          <div style={{ color: '#666', fontSize: 9 }}>Pass 60%+ to unlock next module</div>
        </div>
      </div>
      <div style={{ padding: 16, maxWidth: 640, margin: '0 auto', paddingBottom: 40 }}>
        <div style={{
          background: '#1a0010', border: '1px solid #ff005544',
          borderRadius: 8, padding: 12, marginBottom: 20, textAlign: 'center',
        }}>
          <div style={{ color: '#ff0055', fontSize: 10 }}>
            ⚡ FINAL TEST — {mod.test.length} questions — Must score 60%+ to unlock next module
          </div>
        </div>
        <QuizView
          questions={mod.test}
          xpReward={Math.round(mod.xp * 0.4)}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
 * MAIN APP
 * ══════════════════════════════════════════════════════════ */
export default function App() {
  const prog = useProgress(MODULES);

  const [tab, setTab]             = useState('home');
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [takingTest, setTakingTest]     = useState(null);
  const [notification, setNotification] = useState(null);

  const notify = useCallback((msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const level = getLevel(prog.xp);
  const pct   = getLevelProgress(prog.xp);

  // Module progress helper
  const modProgress = (mod) => {
    const done = mod.lessons.filter(l => prog.isLessonDone(l.id)).length;
    return Math.round(done / mod.lessons.length * 100);
  };

  // Handle lesson quiz complete
  const handleLessonComplete = useCallback((earned, pct2, passed) => {
    if (passed) {
      prog.completeLesson(activeLesson.id, earned, pct2);
      notify(`+${earned} XP — Lesson Complete! 🔓`, 'success');
      const mod = MODULES.find(m => m.lessons.some(l => l.id === activeLesson.id));
      const allDone = mod.lessons.every(l => prog.isLessonDone(l.id) || l.id === activeLesson.id);
      if (allDone) {
        setTimeout(() => notify('🎯 All lessons done! Take the module test!', 'info'), 1500);
      }
      setActiveLesson(null);
    } else {
      notify('Score below 60% — review the lesson and retry!', 'error');
      setActiveLesson(null);
    }
  }, [activeLesson, prog, notify]);

  // Handle test complete
  const handleTestComplete = useCallback((earned, pct2, passed) => {
    if (passed) {
      prog.completeTest(takingTest.id, earned, pct2, MODULES);
      notify(`+${earned} XP — Module Test PASSED! 🏆`, 'success');
      const idx = MODULES.findIndex(m => m.id === takingTest.id);
      if (idx < MODULES.length - 1) {
        setTimeout(() => notify(`🔓 ${MODULES[idx + 1].title} UNLOCKED!`, 'info'), 1200);
      }
      setTakingTest(null);
      setActiveModule(null);
    } else {
      notify('Test failed. Review lessons & retry!', 'error');
      setTakingTest(null);
    }
  }, [takingTest, prog, notify]);

  /* ── LESSON SCREEN ── */
  if (activeLesson) {
    const mod = MODULES.find(m => m.lessons.some(l => l.id === activeLesson.id));
    return (
      <>
        <Notify note={notification} />
        <LessonScreen
          lesson={activeLesson}
          mod={mod}
          onBack={() => setActiveLesson(null)}
          onComplete={handleLessonComplete}
        />
      </>
    );
  }

  /* ── TEST SCREEN ── */
  if (takingTest) {
    return (
      <>
        <Notify note={notification} />
        <TestScreen
          mod={takingTest}
          onBack={() => setTakingTest(null)}
          onComplete={handleTestComplete}
        />
      </>
    );
  }

  /* ── MODULE LESSONS SCREEN ── */
  if (activeModule) {
    return (
      <>
        <Notify note={notification} />
        <ModuleScreen
          mod={activeModule}
          progress={modProgress(activeModule)}
          isLessonDone={prog.isLessonDone}
          isTestDone={prog.isTestDone(activeModule.id)}
          canTakeTest={prog.canTakeTest(activeModule)}
          onBack={() => setActiveModule(null)}
          onOpenLesson={setActiveLesson}
          onOpenTest={() => setTakingTest(activeModule)}
        />
      </>
    );
  }

  /* ── TAB STYLES ── */
  const tabStyle = (t) => ({
    flex: 1, background: 'none', border: 'none',
    color: tab === t ? '#00ff41' : '#444',
    borderTop: tab === t ? '2px solid #00ff41' : '2px solid transparent',
    padding: '10px 0', fontSize: 9,
    fontFamily: "'Orbitron', monospace",
    fontWeight: tab === t ? 700 : 400,
    cursor: 'pointer',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
  });

  /* ── MAIN RENDER ── */
  return (
    <div style={{
      background: '#060a06', minHeight: '100vh', maxWidth: 480,
      margin: '0 auto', fontFamily: "'Share Tech Mono', monospace",
      color: '#00ff41', position: 'relative',
    }}>
      <Notify note={notification} />

      {/* ── STICKY HEADER ── */}
      <div style={{
        background: '#0a1a0a', padding: '12px 16px',
        borderBottom: '1px solid #00ff4122',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div
              className="glow"
              style={{
                fontFamily: "'Orbitron', monospace", fontSize: 15,
                fontWeight: 900, color: '#00ff41',
              }}
            >
              HACK ACADEMY
            </div>
            <div style={{ color: '#555', fontSize: 9 }}>🇧🇩 Defend Bangladesh</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              color: level.color, fontFamily: "'Orbitron', monospace",
              fontSize: 11, fontWeight: 700,
            }}>
              {level.badge} LV.{level.n}
            </div>
            <div style={{ color: '#666', fontSize: 9 }}>{level.title}</div>
          </div>
        </div>
        <XpBar xp={prog.xp} />
      </div>

      {/* ── BODY ── */}
      <div style={{
        padding: 16, paddingBottom: 80,
        overflowY: 'auto', minHeight: 'calc(100vh - 130px)',
      }}>

        {/* ════ HOME TAB ════ */}
        {tab === 'home' && (
          <div className="fade-in">
            {/* Hero card */}
            <div style={{
              background: 'linear-gradient(135deg,#001a00,#0a0a0a)',
              border: '1px solid #00ff4133', borderRadius: 12,
              padding: 20, marginBottom: 20, textAlign: 'center',
            }}>
              <div style={{ fontSize: 38, marginBottom: 8 }}>💻</div>
              <div style={{
                fontFamily: "'Orbitron', monospace", fontSize: 16, fontWeight: 900,
                color: '#00ff41', textShadow: '0 0 12px #00ff41', marginBottom: 8,
              }}>
                WELCOME, HACKER
              </div>
              <div style={{ color: '#b0f0b0', fontSize: 11, lineHeight: 1.7 }}>
                Learn ethical hacking from zero to elite.<br />
                15 modules • 45+ lessons • Live terminal<br />
                Protect Bangladesh's digital future. 🇧🇩
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
              {[
                ['⚡', prog.xp, 'Total XP'],
                ['📚', prog.completedLessons.length, 'Lessons'],
                ['🏆', prog.completedTests.length, 'Modules'],
              ].map(([icon, val, label]) => (
                <div key={label} style={{
                  background: '#0a1a0a', border: '1px solid #00ff4133',
                  borderRadius: 10, padding: 12, textAlign: 'center',
                }}>
                  <div style={{ fontSize: 20 }}>{icon}</div>
                  <div style={{
                    color: '#00ff41', fontFamily: "'Orbitron', monospace",
                    fontSize: 18, fontWeight: 900,
                  }}>{val}</div>
                  <div style={{ color: '#444', fontSize: 9 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Active modules */}
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#888',
              fontSize: 9, marginBottom: 10,
            }}>
              // CONTINUE LEARNING
            </div>
            {MODULES.filter(m => !prog.isModuleLocked(m.id)).slice(0, 3).map((mod, i) => (
              <button
                key={mod.id}
                onClick={() => { setTab('modules'); setActiveModule(mod); }}
                className="fade-in"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  width: '100%', background: '#0a1a0a',
                  border: `1px solid ${mod.color}44`,
                  borderRadius: 10, padding: 14, marginBottom: 10, textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 24 }}>{mod.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: mod.color, fontFamily: "'Orbitron', monospace",
                      fontSize: 11, fontWeight: 700, marginBottom: 4,
                    }}>
                      {mod.title}
                    </div>
                    <div style={{ background: '#111', borderRadius: 3, height: 4, overflow: 'hidden' }}>
                      <div style={{
                        width: `${modProgress(mod)}%`, height: '100%',
                        background: mod.color, borderRadius: 3, transition: 'width .5s',
                      }} />
                    </div>
                  </div>
                  <span style={{ color: mod.color, fontSize: 16 }}>→</span>
                </div>
              </button>
            ))}

            {/* Terminal CTA */}
            <button
              onClick={() => setTab('terminal')}
              style={{
                width: '100%', background: '#0a0f0a',
                border: '2px solid #00ff4133', borderRadius: 10,
                padding: 14, marginTop: 4, cursor: 'pointer',
              }}
            >
              <div style={{
                color: '#00ff41', fontFamily: "'Orbitron', monospace",
                fontSize: 12, fontWeight: 700, marginBottom: 4,
              }}>
                🖥️ LIVE TERMINAL
              </div>
              <div style={{ color: '#444', fontSize: 10 }}>
                Practice real Kali Linux commands — right now →
              </div>
            </button>

            {/* Reset button */}
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <button
                onClick={() => {
                  if (window.confirm('Reset ALL progress? This cannot be undone!')) {
                    prog.resetProgress();
                    notify('Progress reset!', 'info');
                  }
                }}
                style={{
                  background: 'none', border: '1px solid #ff333322',
                  color: '#ff333366', padding: '6px 16px',
                  borderRadius: 6, fontSize: 10,
                }}
              >
                🗑️ Reset Progress
              </button>
            </div>
          </div>
        )}

        {/* ════ MODULES TAB ════ */}
        {tab === 'modules' && (
          <div className="fade-in">
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#00ff41',
              fontSize: 12, fontWeight: 900, marginBottom: 4,
            }}>
              // LEARNING MODULES
            </div>
            <div style={{ color: '#555', fontSize: 10, marginBottom: 16 }}>
              {MODULES.length} modules • Complete tests to unlock next
            </div>
            {MODULES.map((mod, i) => (
              <div key={mod.id} className="fade-in" style={{ animationDelay: `${i * 0.04}s` }}>
                <ModuleCard
                  mod={mod}
                  progress={modProgress(mod)}
                  isLocked={prog.isModuleLocked(mod.id)}
                  isTestDone={prog.isTestDone(mod.id)}
                  onClick={() => { if (!prog.isModuleLocked(mod.id)) setActiveModule(mod); }}
                />
              </div>
            ))}
          </div>
        )}

        {/* ════ TERMINAL TAB ════ */}
        {tab === 'terminal' && (
          <div className="fade-in">
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#00ff41',
              fontSize: 12, fontWeight: 900, marginBottom: 4,
            }}>
              // LIVE TERMINAL — Kali Linux
            </div>
            <div style={{ color: '#555', fontSize: 10, marginBottom: 14 }}>
              Full virtual environment. Type 'help' to start. ↑↓ = history, Tab = autocomplete.
            </div>
            <Terminal />
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#888',
              fontSize: 9, marginTop: 16, marginBottom: 8,
            }}>
              // QUICK COMMANDS — tap to copy
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[
                'nmap scanme.nmap.org', 'sudo -l',
                'find / -perm -4000 2>/dev/null',
                'cat /etc/passwd', 'gobuster', 'sqlmap',
                'msfconsole', 'ls -la', 'hydra', 'hashcat',
                'cat /etc/crontab', 'nikto', 'whatweb',
              ].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => navigator.clipboard?.writeText(cmd).catch(() => {})}
                  style={{
                    background: '#0a1a0a', border: '1px solid #00ff4133',
                    borderRadius: 4, padding: '4px 8px',
                    color: '#00ff88', fontSize: 9,
                    fontFamily: "'Share Tech Mono', monospace",
                  }}
                  title="Click to copy"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ════ PROGRESS TAB ════ */}
        {tab === 'progress' && (
          <div className="fade-in">
            {/* Level card */}
            <div style={{
              background: 'linear-gradient(135deg,#001a00,#0a0a0a)',
              border: `1px solid ${level.color}`,
              borderRadius: 12, padding: 24, marginBottom: 20, textAlign: 'center',
            }}>
              <div style={{ fontSize: 40, marginBottom: 6 }}>{level.badge}</div>
              <div style={{
                fontFamily: "'Orbitron', monospace", fontSize: 28,
                fontWeight: 900, color: level.color,
                textShadow: `0 0 15px ${level.color}`,
              }}>
                LV.{level.n}
              </div>
              <div style={{ color: '#b0f0b0', fontSize: 13, marginBottom: 14 }}>
                {level.title}
              </div>
              <div style={{
                background: '#111', borderRadius: 6, height: 10,
                border: '1px solid #00ff4133', overflow: 'hidden', marginBottom: 8,
              }}>
                <div style={{
                  width: `${pct}%`, height: '100%',
                  background: `linear-gradient(90deg,${level.color},#00ff88)`,
                  boxShadow: `0 0 8px ${level.color}`,
                  borderRadius: 6, transition: 'width .5s',
                }} />
              </div>
              <div style={{ color: '#888', fontSize: 10 }}>
                {prog.xp} XP total
              </div>
            </div>

            {/* All levels */}
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#888',
              fontSize: 9, marginBottom: 10,
            }}>
              // RANK LADDER
            </div>
            {LEVELS.map(lv => (
              <div
                key={lv.n}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', borderRadius: 8, marginBottom: 6,
                  background: lv.n === level.n ? '#001a00' : '#0a0a0a',
                  border: `1px solid ${lv.n === level.n ? lv.color : '#1a1a1a'}`,
                  opacity: prog.xp >= lv.min ? 1 : 0.35,
                }}
              >
                <span style={{ fontSize: 18 }}>{lv.badge}</span>
                <div style={{
                  fontFamily: "'Orbitron', monospace", fontSize: 10,
                  color: lv.n === level.n ? lv.color : '#555',
                  fontWeight: 700, width: 28,
                }}>
                  LV{lv.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: lv.n === level.n ? lv.color : '#888', fontSize: 11 }}>
                    {lv.title}
                  </div>
                  <div style={{ color: '#333', fontSize: 9 }}>{lv.min}+ XP</div>
                </div>
                {prog.xp >= lv.min && <span style={{ color: lv.color, fontSize: 14 }}>✓</span>}
              </div>
            ))}

            {/* Module breakdown */}
            <div style={{
              fontFamily: "'Orbitron', monospace", color: '#888',
              fontSize: 9, marginTop: 20, marginBottom: 10,
            }}>
              // MODULE PROGRESS
            </div>
            {MODULES.map(mod => {
              const done = mod.lessons.filter(l => prog.isLessonDone(l.id)).length;
              const p = Math.round(done / mod.lessons.length * 100);
              return (
                <div
                  key={mod.id}
                  style={{
                    background: '#0a0a0a', border: '1px solid #1a1a1a',
                    borderRadius: 8, padding: 12, marginBottom: 8,
                    opacity: prog.isModuleLocked(mod.id) ? 0.35 : 1,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ color: mod.color, fontSize: 11 }}>
                      {mod.emoji} {mod.title}
                    </span>
                    <span style={{ color: '#666', fontSize: 10 }}>{done}/{mod.lessons.length}</span>
                  </div>
                  <div style={{ background: '#111', borderRadius: 3, height: 5, overflow: 'hidden' }}>
                    <div style={{
                      width: `${p}%`, height: '100%',
                      background: mod.color, borderRadius: 3, transition: 'width .5s',
                    }} />
                  </div>
                  {prog.isTestDone(mod.id) && (
                    <div style={{ color: mod.color, fontSize: 9, marginTop: 4 }}>
                      ✓ Module test passed
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── BOTTOM NAV ── */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 480,
        background: '#0a1a0a', borderTop: '1px solid #00ff4122',
        display: 'flex',
      }}>
        {[
          ['home',     '⬛', 'HOME'],
          ['modules',  '📚', 'MODULES'],
          ['terminal', '🖥️',  'TERMINAL'],
          ['progress', '⚡', 'PROGRESS'],
        ].map(([t, icon, label]) => (
          <button key={t} onClick={() => setTab(t)} style={tabStyle(t)}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
