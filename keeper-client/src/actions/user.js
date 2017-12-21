import { USER_LOGGED_IN, USER_FETCHED, USER_LOGGED_OUT } from '../constantes/types';
import api from '../api';
import setAuthToken from '../api/setAuthToken';

export const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

export const userFetched = data => ({
  type: USER_FETCHED,
  data
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const fetchCurrent = () => dispatch => {
  return api.user.fetchCurrent().then(user => {
    dispatch(userFetched({ ...user, loaded: true }));
    return user;
  });
};

export const signup = data => dispatch => {
  return api.user.signup(data).then(user => {
    localStorage.keeperJWT = user.token;
    setAuthToken(user.token);
    dispatch(userLoggedIn(user));
    return user;
  });
};

export const login = credentials => dispatch => {
  return api.user.login(credentials).then(user => {
    localStorage.keeperJWT = user.token;
    setAuthToken(user.token);
    dispatch(userLoggedIn(user));
    return user;
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem('keeperJWT');
  setAuthToken();
  dispatch(userLoggedOut());
};
