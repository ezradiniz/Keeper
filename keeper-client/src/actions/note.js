import { NOTE_CREATED, NOTES_FETCHED, NOTE_PUBLIC_FETCHED } from '../constantes/types';
import api from '../api';

const notesFetched = data => ({
  type: NOTES_FETCHED,
  data
});

const noteCreated = data => ({
  type: NOTE_CREATED,
  data
});

const notePublicFetched = data => ({
  type: NOTE_PUBLIC_FETCHED,
  data
});

export const create = note => dispatch => {
  return api.note.create(note).then(data => {
    dispatch(noteCreated(data));
    return data;
  });
};

export const fetchAll = () => dispatch => {
  return api.note.fetchAll().then(data => {
    dispatch(notesFetched(data));
    return data;
  });
};

export const fetchPublic = note => dispatch => {
  return api.note.fetchPublic(note).then(data => {
    dispatch(notePublicFetched(data));
    return data;
  });
};
