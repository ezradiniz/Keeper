import { fetchCurrent } from './user';
import setAuthToken from '../api/setAuthToken';

export const fetchCurrentUser = store => {
  if (localStorage.keeperJWT) {
    setAuthToken(localStorage.keeperJWT);
    store.dispatch(fetchCurrent());
  }
};
