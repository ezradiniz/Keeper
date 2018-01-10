import { LOGS_FETCHED } from '../constantes/types'

export const allLogsSelector = state => Object.keys(state.log).map(key => state.log[key]);

export const logsLoaderSelector = state => state.log.loaded;

export default function logs(state = { loaded: false }, action = {}) {
  switch(action.type) {
    case LOGS_FETCHED:
      return { ...action.data, loaded: true };
    default:
      return state;
  }
}
