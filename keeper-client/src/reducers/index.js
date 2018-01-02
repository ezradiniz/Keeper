import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import user from './user';
import note from './note';

const reducers = combineReducers({
  user,
  note
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
