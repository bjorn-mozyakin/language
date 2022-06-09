export type StateNumbers = {
  allNumbers: any;
  currentAnswer: string;
  currentIdx: number;
  gameNumbers: number[];
  isAnswerHidden: true;
  isGameStarted: false;
  maxlength?: number;
  settings: {
    amount: number;
    maxNum: number;
    minNum: number;
  };
};
