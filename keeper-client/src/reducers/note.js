import {
  NOTES_ARCHIVED_FETCHED,
  NOTES_FETCHED,
  NOTE_ARCHIVED,
  NOTE_CREATED,
  NOTE_CURRENT_DETACHED,
  NOTE_CURRENT_SETTED,
  NOTE_REMOVED,
  NOTE_RESTORED,
  NOTE_UPDATED
} from '../constantes/types';

export const allNotesSelector = state => [ ...state.note.notes ];

export const currentNoteSelector = state => { return { ...state.note.current } };

export const notesLoaderSelector = state => state.note.loaded;

export default function notes(state = { notes: [], archived: [], current: {}, loaded: false }, action = {}) {
  switch(action.type) {
    case NOTE_CURRENT_DETACHED:
      return { ...state, current: {} };
    case NOTE_CURRENT_SETTED:
      return { ...state, current: action.data };
    case NOTE_UPDATED:
      return { notes: [ ...state.notes.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )], loaded: true };
    case NOTE_CREATED:
      return { notes: [ action.data, ...state.notes ], loaded: true};
    case NOTES_ARCHIVED_FETCHED:
    case NOTES_FETCHED:
      return { notes: [ ...action.data ], loaded: true };
    case NOTE_ARCHIVED:
    case NOTE_RESTORED:
    case NOTE_REMOVED:
      return { notes: [ ...state.notes.filter(n => n._id !== action.data.note._id) ], loaded: true };
    default:
      return state;
  }
}
