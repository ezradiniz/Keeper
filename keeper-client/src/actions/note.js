import api from '../api';
import {
  NOTE_CURRENT_DETACHED,
  NOTE_CURRENT_SETTED,
  NOTES_ARCHIVED_FETCHED,
  NOTES_FETCHED,
  NOTE_ARCHIVED,
  NOTE_CREATED,
  NOTE_PUBLIC_FETCHED,
  NOTE_REMOVED,
  NOTE_RESTORED,
  NOTE_UPDATED
} from '../constantes/types';

const notesFetched = data => ({
  type: NOTES_FETCHED,
  data
});

const noteCreated = data => ({
  type: NOTE_CREATED,
  data
});

const noteRemoved = data => ({
  type: NOTE_REMOVED,
  data
});

const noteUpdated = data => ({
  type: NOTE_UPDATED,
  data
});

const noteArchived = data => ({
  type: NOTE_ARCHIVED,
  data
});

const noteRestored = data => ({
  type: NOTE_RESTORED,
  data
});

const notePublicFetched = data => ({
  type: NOTE_PUBLIC_FETCHED,
  data
});

const notesArchivedFetched = data => ({
  type: NOTES_ARCHIVED_FETCHED,
  data
});

const noteCurrentSetted = data => ({
  type: NOTE_CURRENT_SETTED,
  data
});

const noteCurrentDetached = data => ({
  type: NOTE_CURRENT_DETACHED,
  data
});

export const create = note => dispatch =>
  api.note.create(note).then(data => {
    dispatch(noteCreated(data));
  });

export const remove = note => dispatch =>
  api.note.remove(note).then(data => {
    dispatch(noteRemoved(data));
  });

export const update = note => dispatch =>
  api.note.update(note).then(data => {
    dispatch(noteUpdated(data));
  });

export const archive = note => dispatch =>
  api.note.update(note).then((data) => {
    dispatch(noteArchived(data));
  });

export const restore = note => dispatch =>
  api.note.update(note).then((data) => {
    dispatch(noteRestored(data));
  });

export const fetchAllArchive = () => dispatch =>
  api.note.fetchAllArchive().then((data) => {
    dispatch(notesArchivedFetched(data));
  });

export const fetchAll = () => dispatch =>
  api.note.fetchAll().then(data => {
    dispatch(notesFetched(data));
  });

export const fetchPublic = note => dispatch =>
  api.note.fetchPublic(note).then(data => {
    dispatch(notePublicFetched(data));
  });

export const setCurrent = note => dispatch =>
  dispatch(noteCurrentSetted(note));

export const detachCurrent = () => dispatch =>
  dispatch(noteCurrentDetached());
