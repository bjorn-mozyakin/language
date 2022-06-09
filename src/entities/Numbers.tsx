export type StateNumbers = {
  allNumbers: any;
  gameNumbers: number[];
  isGameStarted: false;
  isAnswerHidden: true;
  questions: number[];
  currentIdx: number;
  currentAnswer: string;
  settings: {
    minNum: number;
    maxNum: number;
    amount: number;
  };
};
