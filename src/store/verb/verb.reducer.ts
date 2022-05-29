import { StateVerb } from '../../entities/State';

import * as ACTIONS from './verb.actions-consts';

const initialState: StateVerb = {
  isLoading: false,
  verb: '',
  verbs: {
    affirmative: {
      statement: []
    },
    interrogative: {
      statement: []
    }
  }
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.UPDATE_VERB:
      return {
        ...state,
        verb: action.verb
      };

    case ACTIONS.SHOW_VERB_FORMS:
      return {
        ...state,
        verbs: action.verbs
      };

    default:
      return state;
  }
};
