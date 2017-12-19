import { USER_LOGGED_IN, USER_FETCHED } from '../constantes/types';
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

export const fetchCurrent = () => dispatch => {
  return api.user.fetchCurrent().then(user => {
    dispatch(userFetched(user));
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
