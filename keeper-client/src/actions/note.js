import api from '../api';
import {
  NOTE_CREATED,
  NOTE_REMOVED,
  NOTES_ARCHIVED_FETCHED,
  NOTE_ARCHIVED,
  NOTES_FETCHED,
  NOTE_PUBLIC_FETCHED
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

const noteArchived = data => ({
  type: NOTE_ARCHIVED,
  data
});

const notePublicFetched = data => ({
  type: NOTE_PUBLIC_FETCHED,
  data
});

const notesArchivedFetched = data => ({
  type: NOTES_ARCHIVED_FETCHED,
  data
})

export const create = note => dispatch =>
  api.note.create(note).then(data => {
    dispatch(noteCreated(data));
  });

export const remove = note => dispatch =>
  api.note.remove(note).then(data => {
    dispatch(noteRemoved(data));
  });

export const archive = note => dispatch =>
  api.note.archive(note).then((data) => {
    dispatch(noteArchived(data));
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
