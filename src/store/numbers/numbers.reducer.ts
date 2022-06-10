import { StateNumbers } from '../../entities/Numbers';

import * as ACTIONS from './numbers.actions-consts';

const initialState: StateNumbers = {
  allNumbers: [],
  currentIdx: 0,
  currentAnswer: '',
  gameNumbers: [],
  isAnswerHidden: true,
  isGameStarted: false,
  maxlength: 4,
  settings: {
    amount: 10,
    maxNum: 99,
    minNum: 0
  }
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.SHOW_NEXT_QUESTION:
      debugger
      return {
        ...state,
        currentIdx: ++state.currentIdx
      };

    case ACTIONS.START_GAME:
      return {
        ...state,
        isGameStarted: !state.isGameStarted,
        allNumbers: action.allNumbers,
        gameNumbers: action.gameNumbers
      };

    case ACTIONS.TOGGLE_ANSWER_VISIBILITY:
      debugger
      return {
        ...state,
        isAnswerHidden: !state.isAnswerHidden
      };

    case ACTIONS.UPDATE_INPUT_MIN_NUM:
      return {
        ...state,
        settings: {
          ...state.settings,
          minNum: action.minNumValue
        }
      };

    case ACTIONS.UPDATE_INPUT_MAX_NUM:
      return {
        ...state,
        settings: {
          ...state.settings,
          maxNum: action.maxNumValue
        }
      };

    case ACTIONS.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          amount: action.amount,
          maxNum: action.maxNum,
          minNum: action.minNum
        }
      };

    default:
      return state;
  }
};
