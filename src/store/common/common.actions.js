import * as ACTIONS from "./common.actions-consts";

export const switchLanguage = (language) => ({
  type: ACTIONS.SWITCH_LANGUAGE,
  language
});
