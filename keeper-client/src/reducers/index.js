import { combineReducers } from 'redux';

import user from './user';
import note from './note';

export default combineReducers({
  user,
  note
});
