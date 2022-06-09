import { StateNumbers } from '../../entities/Numbers';

import * as ACTIONS from './numbers.actions-consts';

const initialState: StateNumbers = {
  allNumbers: null,
  isGameStarted: false,
  isAnswerHidden: true,
  questions: [2, 43, 142, 50, 7],
  currentIdx: 0,
  currentAnswer: ''
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.START_GAME:
      return {
        ...state,
        isGameStarted: !state.isGameStarted,
        allNumbers: action.allNumbers
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

    default:
      return state;
  }
};
