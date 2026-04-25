import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'hackacademy_progress_v2';

const DEFAULT_STATE = {
  xp: 0,
  completedLessons: [],   // array of lesson IDs
  completedTests: [],     // array of module IDs
  unlockedModules: ['m1'],
  quizScores: {},         // { lessonId: pct }
  testScores: {},         // { moduleId: pct }
  lastSeen: null,
  totalLessonsAttempted: 0,
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

export function useProgress(modules) {
  const [state, setState] = useState(() => load());

  // Auto-save on every change
  useEffect(() => {
    save(state);
  }, [state]);

  // Update last-seen timestamp
  useEffect(() => {
    setState(prev => ({ ...prev, lastSeen: new Date().toISOString() }));
  }, []);

  const addXp = useCallback((amount) => {
    setState(prev => ({ ...prev, xp: prev.xp + amount }));
  }, []);

  const completeLesson = useCallback((lessonId, xpEarned, scorePct) => {
    setState(prev => {
      const already = prev.completedLessons.includes(lessonId);
      return {
        ...prev,
        completedLessons: already ? prev.completedLessons : [...prev.completedLessons, lessonId],
        xp: already ? prev.xp : prev.xp + xpEarned,
        quizScores: { ...prev.quizScores, [lessonId]: Math.max(prev.quizScores[lessonId] || 0, scorePct) },
        totalLessonsAttempted: prev.totalLessonsAttempted + 1,
      };
    });
  }, []);

  const completeTest = useCallback((moduleId, xpEarned, scorePct, modules) => {
    setState(prev => {
      const already = prev.completedTests.includes(moduleId);
      const moduleIdx = modules.findIndex(m => m.id === moduleId);
      const nextId = moduleIdx < modules.length - 1 ? modules[moduleIdx + 1].id : null;
      const newUnlocked = nextId && !prev.unlockedModules.includes(nextId)
        ? [...prev.unlockedModules, nextId]
        : prev.unlockedModules;
      return {
        ...prev,
        completedTests: already ? prev.completedTests : [...prev.completedTests, moduleId],
        xp: already ? prev.xp : prev.xp + xpEarned,
        testScores: { ...prev.testScores, [moduleId]: Math.max(prev.testScores[moduleId] || 0, scorePct) },
        unlockedModules: newUnlocked,
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  const isLessonDone   = useCallback((id) => state.completedLessons.includes(id), [state.completedLessons]);
  const isTestDone     = useCallback((id) => state.completedTests.includes(id), [state.completedTests]);
  const isModuleLocked = useCallback((id) => !state.unlockedModules.includes(id), [state.unlockedModules]);
  const canTakeTest    = useCallback((mod) => mod.lessons.every(l => state.completedLessons.includes(l.id)), [state.completedLessons]);
  const getScore       = useCallback((id) => state.quizScores[id] || null, [state.quizScores]);
  const getTestScore   = useCallback((id) => state.testScores[id] || null, [state.testScores]);

  return {
    xp: state.xp,
    completedLessons: state.completedLessons,
    completedTests: state.completedTests,
    unlockedModules: state.unlockedModules,
    totalLessonsAttempted: state.totalLessonsAttempted,
    addXp, completeLesson, completeTest, resetProgress,
    isLessonDone, isTestDone, isModuleLocked, canTakeTest,
    getScore, getTestScore,
  };
}
