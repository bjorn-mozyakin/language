import { _0_9, _10_19, _10_99, _70_99, _100_1000 } from '../../rules/numbers/numbers';
import { randomInteger } from '../../utils/numbers';
import * as ACTIONS from './numbers.actions-consts';

export const getAllNumbers = ({ maxNum, minNum, language }) => {
  const allNumbers = {};

  for (let i = minNum; i <= maxNum; i++) {
    let words = [];
    const digits = i.toString().split('').reverse();

    if (digits.length <= 3) {
      if (+digits[0] || digits.length === 1) {
        words.push(_0_9[digits[0]][language]);
      }
      if (+digits[1]) {
        words.push(_10_99[digits[1] + '0'][language]);
      }
      if (+digits[2]) {
        words.push(_100_1000[100][language]);
        words.push(_0_9[digits[2]][language]);
      }
      if (+digits[3]) {
        words.push(_100_1000[1000][language]);
        words.push(_0_9[digits[3]][language]);
      }
    } else {
      console.error('Не поддерживаемый формат числа');
    }

    allNumbers[i] = words.reverse().join(' ');
  }

  return handleExceptions(allNumbers, language);
};

const handleExceptions = (allNumbers, language) => {
  if (['en', 'fr', 'ru'].includes(language)) {
    for (let j = 11; j < 20; j++) {
      if (allNumbers[j]) {
        allNumbers[j] = _10_19[j][language];
      }
    }
  }

  if (['fr'].includes(language)) {
    allNumbers[80] = _70_99[80][language];
    for (let j = 70; j < 79; j++) {
      if (allNumbers[j]) {
        allNumbers[j] = _70_99[j][language];
      }
    }
    for (let j = 90; j < 99; j++) {
      if (allNumbers[j]) {
        allNumbers[j] = _70_99[j][language];
      }
    }
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

export const startGame = ({ amount, maxNum, minNum, language }) => {
  updateSettings({ amount, maxNum, minNum });

  return {
    type: ACTIONS.START_GAME,
    allNumbers: getAllNumbers({ maxNum, minNum, language }),
    gameNumbers: getGameNumbers({ amount, maxNum, minNum })
  };
};

export const increaseCurrentNumberIndex = () => {
  return {
    type: ACTIONS.INCREASE_CURRENT_NUMBER_INDEX
  };
};

export const toggleAnswerVisibility = () => {
  return {
    type: ACTIONS.TOGGLE_ANSWER_VISIBILITY
  };
};

export const updateSettings = ({ amount, maxNum, minNum }) => {
  return {
    type: ACTIONS.UPDATE_SETTINGS,
    amount,
    maxNum,
    minNum
  };
};

export const updateInputMaxNum = (maxNumValue) => {
  return {
    type: ACTIONS.UPDATE_INPUT_MAX_NUM,
    maxNumValue
  };
};

export const updateInputMinNum = (minNumValue) => {
  return {
    type: ACTIONS.UPDATE_INPUT_MIN_NUM,
    minNumValue
  };
};
