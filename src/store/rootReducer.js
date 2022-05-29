import { combineReducers } from 'redux';

import common from './common/common.reducer';
import verb from './verb/verb.reducer';

export default combineReducers({
  common,
  verb
});
