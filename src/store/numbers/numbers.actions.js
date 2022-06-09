import { _0_9, _10_90, _100_1000 } from '../../rules/numbers/numbers';
import { randomInteger } from '../../utils/numbers';
import * as ACTIONS from './numbers.actions-consts';

export const updateSettings = ({ amount, maxNum, minNum }) => {
  return {
    type: ACTIONS.UPDATE_SETTINGS,
    amount,
    maxNum,
    minNum
  };
};

export const startGame = ({ amount, maxNum, minNum }) => {
  updateSettings({ amount, maxNum, minNum });

  return {
    type: ACTIONS.START_GAME,
    allNumbers: getAllNumbers({ maxNum, minNum }),
    gameNumbers: getGameNumbers({ amount, maxNum, minNum })
  };
};

export const getAllNumbers = ({ maxNum, minNum }) => {
  const allNumbers = {};

  for (let i = minNum; i <= maxNum; i++) {
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

export const getGameNumbers = ({ amount, maxNum, minNum }) => {
  const gameNumbers = [];

  for (let i = 0; i < amount; i++) {
    gameNumbers.push(randomInteger(minNum, maxNum));
  }

  return gameNumbers;
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
