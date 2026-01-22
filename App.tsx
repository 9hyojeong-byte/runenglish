
import React, { useState, useEffect, useCallback } from 'react';
import { GameStatus, QuizItem } from './types.ts';
import { QUIZ_DATA, INITIAL_LIVES, INITIAL_SPEED, MAX_QUESTIONS } from './constants.ts';
import RunnerBackground from './components/RunnerBackground.tsx';
import GameUI from './components/GameUI.tsx';

const App: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>(GameStatus.START);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [feedback, setFeedback] = useState<string | null>(null);

  const startGame = () => {
    setScore(0);
    setLives(INITIAL_LIVES);
    setCurrentIndex(0);
    setSpeed(INITIAL_SPEED);
    setFeedback(null);
    setStatus(GameStatus.PLAYING);
  };

  const handleAnswer = useCallback((choice: 'A' | 'B') => {
    if (status !== GameStatus.PLAYING) return;

    const currentQuiz = QUIZ_DATA[currentIndex];
    const isCorrect = choice === currentQuiz.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 1);
      // Speed up animation (lower duration is faster)
      setSpeed(prev => Math.max(0.2, prev * 0.8));
      setFeedback(null);
      
      // Move to next question or end
      if (currentIndex + 1 >= MAX_QUESTIONS) {
        setStatus(GameStatus.FINISHED);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else {
      // Wrong answer
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) setStatus(GameStatus.GAMEOVER);
        return next;
      });
      // Slow down animation
      setSpeed(prev => Math.min(INITIAL_SPEED, prev * 1.5));
      setFeedback(currentQuiz.hint);
    }
  }, [currentIndex, status]);

  if (status === GameStatus.START) {
    return (
      <div className="h-screen w-full bg-indigo-600 flex flex-col items-center justify-center p-6 text-white text-center">
        <div className="mb-8 animate-bounce text-8xl scale-x-[-1]">🏃</div>
        <h1 className="text-5xl font-jua mb-4 tracking-tighter">Sentence Runner</h1>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          캐릭터와 함께 달리며 <br/>
          올바른 영문법을 선택하세요!
        </p>
        <button 
          onClick={startGame}
          className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-2xl py-4 px-12 rounded-full shadow-2xl transition-transform active:scale-95"
        >
          게임 시작
        </button>
      </div>
    );
  }

  if (status === GameStatus.FINISHED || status === GameStatus.GAMEOVER) {
    return (
      <div className="h-screen w-full bg-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
        <div className="text-6xl mb-6">
          {status === GameStatus.FINISHED ? '🏆' : '💀'}
        </div>
        <h2 className="text-4xl font-jua mb-2">
          {status === GameStatus.FINISHED ? '완주 성공!' : '게임 오버'}
        </h2>
        <div className="bg-white/10 p-8 rounded-3xl mb-8 w-full max-w-xs">
          <p className="text-gray-400 uppercase text-xs font-bold mb-1">Final Score</p>
          <p className="text-6xl font-jua text-yellow-400">{score}0</p>
          <p className="mt-4 text-sm text-gray-300">
            {score === MAX_QUESTIONS ? '와우! 문법 천재시군요!' : `${MAX_QUESTIONS}문제 중 ${score}문제를 맞혔습니다.`}
          </p>
        </div>
        <button 
          onClick={startGame}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xl py-4 px-10 rounded-2xl shadow-xl transition-all active:scale-95"
        >
          다시 도전하기
        </button>
      </div>
    );
  }

  const currentQuiz = QUIZ_DATA[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-sky-200 flex flex-col">
      {/* Background Layer */}
      <RunnerBackground speed={speed} />

      {/* Character Layer */}
      <div className="absolute inset-x-0 bottom-[15%] flex justify-center items-end pointer-events-none">
        <div className="animate-character text-7xl transform -translate-y-2 scale-x-[-1]">
          🏃‍♂️
        </div>
      </div>

      {/* Game Content Layer */}
      <GameUI 
        score={score} 
        lives={lives} 
        question={currentQuiz} 
        feedback={feedback}
      />

      {/* Mobile Control Buttons (A / B) */}
      <div className="mt-auto grid grid-cols-2 gap-4 p-4 pb-8 z-20">
        <button 
          onTouchStart={() => handleAnswer('A')}
          onClick={() => handleAnswer('A')}
          className="bg-white/90 hover:bg-white active:bg-indigo-100 border-b-8 border-indigo-400 active:border-b-0 rounded-3xl p-6 flex flex-col items-center shadow-2xl transition-all"
        >
          <span className="text-indigo-600 font-bold text-2xl mb-1">A</span>
          <span className="text-2xl font-jua text-slate-800">{currentQuiz.optionA}</span>
        </button>
        <button 
          onTouchStart={() => handleAnswer('B')}
          onClick={() => handleAnswer('B')}
          className="bg-white/90 hover:bg-white active:bg-indigo-100 border-b-8 border-indigo-400 active:border-b-0 rounded-3xl p-6 flex flex-col items-center shadow-2xl transition-all"
        >
          <span className="text-indigo-600 font-bold text-2xl mb-1">B</span>
          <span className="text-2xl font-jua text-slate-800">{currentQuiz.optionB}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-indigo-200">
        <div 
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${(currentIndex / MAX_QUESTIONS) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default App;
