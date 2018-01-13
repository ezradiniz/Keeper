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

export const fetchCurrent = () => dispatch =>
  api.user.fetchCurrent().then(user => {
    dispatch(userFetched(user));
  });

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.keeperJWT = user.token;
    setAuthToken(user.token);
    dispatch(userLoggedIn(user));
  });

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.keeperJWT = user.token;
    setAuthToken(user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem('keeperJWT');
  setAuthToken();
  dispatch(userLoggedOut());
};
