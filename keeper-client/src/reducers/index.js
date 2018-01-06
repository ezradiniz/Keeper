import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import user from './user';
import note from './note';
import log from './log';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducers = combineReducers({
  user,
  note,
  log
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
