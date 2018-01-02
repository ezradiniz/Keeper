import { LOGS_FETCHED } from '../constantes/types'

export const allLogsSelector = state => Object.keys(state.log).map(key => state.log[key]);

export default function logs(state = {}, action = {}) {
  switch(action.type) {
    case LOGS_FETCHED:
      return { ...action.data };
    default:
      return state;
  }
}
