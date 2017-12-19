import { USER_LOGGED_IN, USER_FETCHED } from '../constantes/types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
    case USER_FETCHED:
      return action.data;
    default:
      return state;
  }
}
