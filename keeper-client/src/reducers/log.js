import { LOGS_FETCHED, LOG_CREATED } from '../constantes/types'

export const allLogsSelector = state => [ ...state.log.data ];

export const logsLoaderSelector = state => state.log.loaded;

export default function logs(state = { data: [], loaded: false }, action = {}) {
  switch(action.type) {
    case LOGS_FETCHED:
      return { data: [ ...action.data ], loaded: true, request: true };
    case LOG_CREATED:
      return { data: [ ...state.data, action.data ] };
    default:
      return state;
  }
}
