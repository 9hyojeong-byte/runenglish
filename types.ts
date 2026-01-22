
export interface QuizItem {
  id: number;
  sentence: string; // The sentence with a blank ____
  optionA: string;
  optionB: string;
  correctAnswer: 'A' | 'B';
  category: string;
  hint: string;
}

export enum GameStatus {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
  GAMEOVER = 'GAMEOVER'
}

export interface GameState {
  status: GameStatus;
  score: number;
  lives: number;
  currentQuestionIndex: number;
  speed: number;
  feedback: string | null;
}
