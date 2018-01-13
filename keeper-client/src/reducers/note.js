import {
  NOTES_ARCHIVED_FETCHED,
  NOTES_QUERY_FETCHED,
  NOTES_QUERY_DETACHED,
  NOTES_FETCHED,
  NOTE_ARCHIVED,
  NOTE_CREATED,
  NOTE_CURRENT_DETACHED,
  NOTE_CURRENT_SETTED,
  NOTE_DASHBOARD_REMOVED,
  NOTE_ARCHIVED_REMOVED,
  NOTE_RESTORED,
  NOTE_ARCHIVED_UPDATED,
  NOTE_DASHBOARD_UPDATED
} from '../constantes/types';

export const allNotesSelector = state => [ ...state.note.notes ];

export const allNotesArchivedSelector = state => [ ...state.note.archived ];

export const currentNoteSelector = state => Object.assign({}, { ...state.note.current });

export const notesLoaderSelector = state => state.note.loaded;

export const notesSearchSelector = state => state.note.searching;

export const notesQuerySelector = state => [ ...state.note.query ];

export default function notes(state = { query: [], notes: [], archived: [], current: {}, loaded: false, searching: false  }, action = {}) {
  switch(action.type) {
    case NOTE_CURRENT_DETACHED:
      return { ...state, current: {} };
    case NOTE_CURRENT_SETTED:
      return { ...state, current: { ...action.data } };
    case NOTE_CREATED:
      return { ...state, notes: [ action.data, ...state.notes ], loaded: true };
    case NOTES_ARCHIVED_FETCHED:
      return { ...state, archived: [ ...action.data ], loaded: true };
    case NOTES_FETCHED:
      return { ...state, notes: [ ...action.data ], loaded: true };
    case NOTE_ARCHIVED_UPDATED:
      return {
        ...state,
        archived: [ ...state.archived.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        query: [ ...state.query.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        loaded: true,
        searching: state.searching
      };
    case NOTE_DASHBOARD_UPDATED:
      return {
        ...state,
        notes: [ ...state.notes.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        query: [ ...state.query.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        loaded: true,
        searching: state.searching
      };
    case NOTE_ARCHIVED:
      return {
        ...state,
        notes: [ ...state.notes.filter(n => n._id !== action.data.note._id) ],
        archived: [ ...state.archived, action.data.note ],
        query: [ ...state.query.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        loaded: true,
        searching: state.searching
      };
    case NOTE_RESTORED:
      return {
        ...state,
        archived: [ ...state.archived.filter(n => n._id !== action.data.note._id) ],
        notes: [ ...state.notes, action.data.note ],
        query: [ ...state.query.map(n => (n._id === action.data.note._id) ? { ...action.data.note } : n )],
        loaded: true,
        searching: state.searching
      };
    case NOTE_DASHBOARD_REMOVED:
      return {
        ...state,
        notes: [ ...state.notes.filter(n => n._id !== action.data.note._id) ],
        query: [ ...state.query.filter(n => n._id !== action.data.note._id) ],
        loaded: true,
        searching: state.searching
      };
    case NOTE_ARCHIVED_REMOVED:
      return {
        ...state,
        archived: [ ...state.archived.filter(n => n._id !== action.data.note._id) ],
        query: [ ...state.query.filter(n => n._id !== action.data.note._id) ],
        loaded: true,
        searching: state.searching
      };
    case NOTES_QUERY_FETCHED:
      return {
        ...state,
        query: [ ...action.data ],
        loaded: true,
        searching: true
      };
    case NOTES_QUERY_DETACHED:
      return {
        ...state,
        query: [],
        loaded: true,
        searching: false
      };
    default:
      return state;
  }
}
