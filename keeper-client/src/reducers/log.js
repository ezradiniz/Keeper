import { LOGS_FETCHED, LOG_CREATED } from '../constantes/types'

export const allLogsSelector = state => [ ...state.log.data ];

export default function logs(state = { data: [] }, action = {}) {
  switch(action.type) {
    case LOGS_FETCHED:
      return { data: [ ...action.data ], request: true };
    case LOG_CREATED:
      return { ...state, data: [ action.data, ...state.data ] };
    default:
      return state;
  }
}
