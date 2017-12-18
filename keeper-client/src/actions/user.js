import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constantes/types';
import api from '../api';

const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

const userLoggedOut = data => ({
  type: USER_LOGGED_OUT,
  data
});

export const signup = data => dispatch => {
  return api.user.signup(data).then(user => {
    dispatch(userLoggedIn(user));
    return user;
  });
};

export const login = credentials => dispatch => {
  return api.user.login(credentials).then(user => {
    dispatch(userLoggedIn(user));
    return user;
  });
};
