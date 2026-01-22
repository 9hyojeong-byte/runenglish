
import { QuizItem } from './types';

export const INITIAL_LIVES = 3;
export const INITIAL_SPEED = 5; // Higher is slower animation duration
export const MAX_QUESTIONS = 10;

export const QUIZ_DATA: QuizItem[] = [
  {
    id: 1,
    category: '시제 (Tense)',
    sentence: 'I ____ to school every day.',
    optionA: 'go',
    optionB: 'goes',
    correctAnswer: 'A',
    hint: '주어가 "I"일 때 현재형 동사는 원형을 사용합니다.'
  },
  {
    id: 2,
    category: '조동사 (Modal)',
    sentence: 'She ____ speak English very well.',
    optionA: 'can',
    optionB: 'cans',
    correctAnswer: 'A',
    hint: '조동사 뒤에는 항상 동사원형이 오며, s를 붙이지 않습니다.'
  },
  {
    id: 3,
    category: '수동태 (Passive)',
    sentence: 'The book ____ written by J.K. Rowling.',
    optionA: 'is',
    optionB: 'was',
    correctAnswer: 'B',
    hint: '과거에 일어난 일이므로 수동태 (be+p.p) 시제를 과거형으로 씁니다.'
  },
  {
    id: 4,
    category: 'to부정사 (to-infinitive)',
    sentence: 'I want ____ some water.',
    optionA: 'to drink',
    optionB: 'drinking',
    correctAnswer: 'A',
    hint: '동사 "want"는 목적어로 to부정사만 취합니다.'
  },
  {
    id: 5,
    category: '동명사 (Gerund)',
    sentence: 'He enjoys ____ soccer with his friends.',
    optionA: 'to play',
    optionB: 'playing',
    correctAnswer: 'B',
    hint: '동사 "enjoy"는 목적어로 동명사(-ing)를 취합니다.'
  },
  {
    id: 6,
    category: '관계대명사 (Relative)',
    sentence: 'The boy ____ is standing there is my brother.',
    optionA: 'who',
    optionB: 'which',
    correctAnswer: 'A',
    hint: '선행사가 사람일 때는 관계대명사 "who"를 사용합니다.'
  },
  {
    id: 7,
    category: '진행형 (Progressive)',
    sentence: 'They ____ watching a movie now.',
    optionA: 'is',
    optionB: 'are',
    correctAnswer: 'B',
    hint: '복수 주어 "They"에는 비동사 "are"를 사용합니다.'
  },
  {
    id: 8,
    category: '조동사 (Modal)',
    sentence: 'You ____ listen to the teacher.',
    optionA: 'must',
    optionB: 'will',
    correctAnswer: 'A',
    hint: '의무(~해야 한다)를 나타낼 때는 "must"가 더 적절합니다.'
  },
  {
    id: 9,
    category: '현재완료 (Present Perfect)',
    sentence: 'I have ____ this movie before.',
    optionA: 'see',
    optionB: 'seen',
    correctAnswer: 'B',
    hint: '현재완료(have+p.p) 시제이므로 과거분사 "seen"이 정답입니다.'
  },
  {
    id: 10,
    category: '관계대명사 (Relative)',
    sentence: 'This is the house ____ I live.',
    optionA: 'where',
    optionB: 'which',
    correctAnswer: 'A',
    hint: '장소를 나타낼 때는 관계부사 "where"가 적절합니다.'
  }
];
