import api from '../api';
import { LOGS_FETCHED } from '../constantes/types';

const logsFetched = data => ({
  type: LOGS_FETCHED,
  data
});

export const fetchAll = () => dispatch =>
  api.log.fetchAll().then(data => {
    dispatch(logsFetched(data));
  });
