import { USER_LOGGED_IN } from '../constantes/types';
import api from '../api';

export const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

export const signup = data => dispatch => {
  return api.user.signup(data).then(user => {
    localStorage.keeperJWT = user.token;
    dispatch(userLoggedIn(user));
    return user;
  });
};

export const login = credentials => dispatch => {
  return api.user.login(credentials).then(user => {
    localStorage.keeperJWT = user.token;
    dispatch(userLoggedIn(user));
    return user;
  });
};
