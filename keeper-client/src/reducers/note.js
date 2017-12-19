import { NOTE_CREATED, NOTES_FETCHED } from '../constantes/types';

export default function notes(state = {}, action = {}) {
  switch(action.type) {
    case NOTE_CREATED:
    case NOTES_FETCHED:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
