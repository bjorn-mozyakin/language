import { AnyAction } from 'redux';

import { Language } from '../../entities/Language';
import { State } from '../../entities/State';

import * as ACTIONS from './common.actions-consts';

const initialState: State = {
  language: Language.EN
};

const reducerCommon = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerCommon;
