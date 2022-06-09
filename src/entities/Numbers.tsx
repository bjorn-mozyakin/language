export type StateNumbers = {
  allNumbers: any;
  amount: number,
  gameNumbers: number[];
  isGameStarted: false;
  isAnswerHidden: true;
  questions: number[];
  currentIdx: number;
  currentAnswer: string;
  minNumValue: number,
  maxNumValue: number,
  settings: {
    minNum: number;
    maxNum: number;
    amount: number;
  };
};
