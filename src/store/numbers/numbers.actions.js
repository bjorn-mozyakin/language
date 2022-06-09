import { _0_9, _10_90, _100_1000 } from '../../rules/numbers/numbers';
import * as ACTIONS from './numbers.actions-consts';

export const startGame = () => {
  return {
    type: ACTIONS.START_GAME,
    allNumbers: getAllNumbers()
  };
};

export const getAllNumbers = () => {
  const allNumbers = {};

  for (let i = 1; i <= 2000; i++) {
    let words = [];
    const digits = i.toString().split('').reverse();

    if (digits.length <= 3) {
      if (+digits[0]) {
        words.push(_0_9[digits[0]]);
      }
      if (+digits[1]) {
        words.push(_10_90[digits[1] + '0']);
      }
      if (+digits[2]) {
        words.push(_100_1000[100]);
        words.push(_0_9[digits[2]]);
      }
      if (+digits[3]) {
        words.push(_100_1000[1000]);
        words.push(_0_9[digits[3]]);
      }
    } else {
      console.error('Не поддерживаемый формат числа');
    }

    allNumbers[i] = words.reverse().join(' ');
  }

  return allNumbers;
};

export const toggleAnswerVisibility = () => {
  return {
    type: ACTIONS.TOGGLE_ANSWER_VISIBILITY
  };
};

export const increaseCurrentQuestionIndex = () => {
  return {
    type: ACTIONS.INCREASE_CURRENT_QUESTION_INDEX
  };
};
