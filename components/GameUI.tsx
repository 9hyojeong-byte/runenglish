
import React from 'react';
import { QuizItem } from '../types';

interface Props {
  score: number;
  lives: number;
  question: QuizItem;
  feedback: string | null;
}

const GameUI: React.FC<Props> = ({ score, lives, question, feedback }) => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col p-4">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">❤️</span>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-4 h-4 rounded-full ${i < lives ? 'bg-red-500' : 'bg-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase font-bold">Category</p>
          <p className="text-sm font-bold text-indigo-600">{question.category}</p>
        </div>
        <div className="bg-indigo-600 text-white px-4 py-1 rounded-full font-bold">
          {score}0 Pts
        </div>
      </div>

      {/* Question Display */}
      <div className="mt-8 bg-white/95 rounded-3xl p-6 shadow-xl border-4 border-indigo-200">
        <h2 className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-widest text-center">Fill in the blank</h2>
        <div className="text-2xl md:text-3xl font-jua text-gray-800 text-center leading-relaxed">
          {question.sentence.split('____').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="inline-block mx-2 w-20 border-b-4 border-indigo-600 text-indigo-600 font-bold min-h-[1.5em] text-center">
                  ?
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Feedback Tip */}
      {feedback && (
        <div className="mt-4 bg-orange-100 border-2 border-orange-300 rounded-2xl p-4 animate-bounce shadow-md">
          <p className="text-orange-800 text-sm font-bold">💡 Tip</p>
          <p className="text-orange-900 text-base">{feedback}</p>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-grow" />
    </div>
  );
};

export default GameUI;
