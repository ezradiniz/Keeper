import { NOTE_CREATED, NOTES_FETCHED, NOTE_PUBLIC_FETCHED } from '../constantes/types';

export default function notes(state = { loaded: false }, action = {}) {
  switch(action.type) {
    case NOTE_CREATED:
    case NOTES_FETCHED:
      return { ...state, ...action.data };
    case NOTE_PUBLIC_FETCHED:
      return action.data;
    default:
      return state;
  }
}
