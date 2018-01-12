import api from '../api';
import {
  NOTE_CURRENT_DETACHED,
  NOTE_CURRENT_SETTED,
  NOTES_ARCHIVED_FETCHED,
  NOTES_QUERY_FETCHED,
  NOTES_QUERY_DETACHED,
  NOTES_FETCHED,
  NOTE_ARCHIVED,
  NOTE_CREATED,
  NOTE_PUBLIC_FETCHED,
  NOTE_ARCHIVED_REMOVED,
  NOTE_DASHBOARD_REMOVED,
  NOTE_RESTORED,
  NOTE_ARCHIVED_UPDATED,
  NOTE_DASHBOARD_UPDATED
} from '../constantes/types';

const notesFetched = data => ({
  type: NOTES_FETCHED,
  data
});

const notesQueryFetched = data => ({
  type: NOTES_QUERY_FETCHED,
  data
});

const noteCreated = data => ({
  type: NOTE_CREATED,
  data
});

const noteDashboardRemoved = data => ({
  type: NOTE_DASHBOARD_REMOVED,
  data
});

const noteArchivedRemoved = data => ({
  type: NOTE_ARCHIVED_REMOVED,
  data
});

const noteDashboardUpdated = data => ({
  type: NOTE_DASHBOARD_UPDATED,
  data
});

const noteArchivedUpdated = data => ({
  type: NOTE_ARCHIVED_UPDATED,
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

const notesQueryDetached = data => ({
  type: NOTES_QUERY_DETACHED,
  data
});

export const create = note => dispatch =>
  api.note.create(note).then(data => {
    dispatch(noteCreated(data));
  });

export const remove = note => dispatch =>
  api.note.remove(note).then(data => {
    if (data.note.isArchived) {
      dispatch(noteArchivedRemoved(data));
    } else {
      dispatch(noteDashboardRemoved(data));
    }
  });

export const update = note => dispatch =>
  api.note.update(note).then(data => {
    if (data.note.isArchived) {
      dispatch(noteArchivedUpdated(data));
    } else {
      dispatch(noteDashboardUpdated(data));
    }
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

export const fetchQuery = query => dispatch =>
  api.note.fetchQuery(query).then(data => {
    dispatch(notesQueryFetched(data));
  });

export const fetchPublic = note => dispatch =>
  api.note.fetchPublic(note).then(data => {
    dispatch(notePublicFetched(data));
  });

export const setCurrent = note => dispatch =>
  dispatch(noteCurrentSetted(note));

export const detachCurrent = () => dispatch =>
  dispatch(noteCurrentDetached());

export const detachQuery = () => dispatch =>
  dispatch(notesQueryDetached());
