import decode from 'jwt-decode';
import { userLoggedIn } from './user';

export const loginBeforeRender = (store) => {
  if (localStorage.keeperJWT) {
    const payload = decode(localStorage.keeperJWT);
    const user = {
      token: localStorage.keeperJWT,
      email: payload.email,
      nickname: payload.nickname
    };
    store.dispatch(userLoggedIn(user));
  }
};
