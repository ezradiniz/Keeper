import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { USER_LOGGED_OUT } from '../constantes/types';

import noteLog from './middleware';

import user from './user';
import note from './note';
import log from './log';

const middleware = [ thunk, noteLog ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducers = combineReducers({
  user,
  note,
  log
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGGED_OUT) {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
