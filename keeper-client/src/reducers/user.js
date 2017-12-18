import { USER_LOGGED_IN } from '../constantes/types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.data;
    default:
      return state;
  }
}
