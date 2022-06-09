import { StateNumbers } from '../../entities/Numbers';

import * as ACTIONS from './numbers.actions-consts';

const initialState: StateNumbers = {
  settings: {
    minNum: 0,
    maxNum: 10,
    amount: 10
  },
  allNumbers: null,
  amount: 10,
  gameNumbers: [],
  isGameStarted: false,
  isAnswerHidden: true,
  questions: [2, 43, 142, 50, 7],
  currentIdx: 0,
  currentAnswer: '',
  minNumValue: 0,
  maxNumValue: 99
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.START_GAME:
      return {
        ...state,
        isGameStarted: !state.isGameStarted,
        allNumbers: action.allNumbers,
        gameNumbers: action.gameNumbers
      };

    case ACTIONS.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          amount: action.amount,
          maxNum: action.maxNum,
          minNum: action.minNum
        }
      };

    case ACTIONS.TOGGLE_ANSWER_VISIBILITY:
      return {
        ...state,
        isAnswerHidden: !state.isAnswerHidden
      };

    case ACTIONS.INCREASE_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentIdx: ++state.currentIdx
      };

    case ACTIONS.UPDATE_QUESTION:
      return {
        ...state,
        currentAnswer: action.currentAnswer
      };

    case ACTIONS.UPDATE_INPUT_MIN_NUM:
      return {
        ...state,
        minNumValue: action.minNumValue
      };

    case ACTIONS.UPDATE_INPUT_MAX_NUM:
      return {
        ...state,
        minNumValue: action.maxNumValue
      };

    default:
      return state;
  }
};