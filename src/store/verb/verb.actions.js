import { getAffix, getVerbs, getVowel } from '../../utils/helpers';
import * as ACTIONS from './verb.actions-consts';

export const updateVerb = (verb) => {
  return {
    type: ACTIONS.UPDATE_VERB,
    verb
  };
};

export const showVerbForms = (verb) => {
  const root = verb.slice(0, -3);

  const verbs = getVerbs(root, getVowel(root), getAffix());

  return {
    type: ACTIONS.SHOW_VERB_FORMS,
    verbs
  };
};
