import { NOTE_UNARCHIVED, NOTES_ARCHIVED_FETCHED, NOTE_CREATED, NOTE_REMOVED, NOTE_ARCHIVED, NOTES_FETCHED, NOTE_UPDATED } from '../constantes/types';

export const allNotesSelector = state => [ ...state.note.notes ];

export default function notes(state = { notes: [] }, action = {}) {
  switch(action.type) {
    case NOTE_UPDATED:
      return { notes: [ ...state.notes.filter(n => n._id !== action.data.note._id), action.data.note ] };
    case NOTE_CREATED:
      return { notes: [ action.data, ...state.notes ] };
    case NOTES_ARCHIVED_FETCHED:
    case NOTES_FETCHED:
      return { notes: [ ...action.data ] };
    case NOTE_ARCHIVED:
    case NOTE_UNARCHIVED:
    case NOTE_REMOVED:
      return { notes: [ ...state.notes.filter(n => n._id !== action.data.note._id) ] };
    default:
      return state;
  }
}
