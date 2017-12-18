import { USER_LOGGED_IN } from '../constantes/types';
import api from '../api';

const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

export const login = credentials => dispatch => {
  return api.user.login(credentials).then(user => {
    dispatch(userLoggedIn(user));
    return user;
  });
};
