import { AnyAction } from 'redux';

import { Language } from '../../entities/Language';
import { State } from '../../entities/State';

import * as ACTIONS from './common.actions-consts';

const initialState: State = {
  language: Language.FR
};

const reducerCommon = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};

export default reducerCommon;
