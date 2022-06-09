import { combineReducers } from 'redux';

import common from './common/common.reducer';
import numbers from './numbers/numbers.reducer';
import verb from './verb/verb.reducer';

export default combineReducers({
  common,
  verb,
  numbers
});
