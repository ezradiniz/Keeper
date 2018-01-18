import {
  NOTE_CREATED,
  NOTE_ARCHIVED_REMOVED,
  NOTE_DASHBOARD_REMOVED,
  NOTE_ARCHIVED_UPDATED,
  NOTE_DASHBOARD_UPDATED,
  NOTE_RESTORED,
  NOTE_ARCHIVED,
  LOG_CREATED
} from '../../constantes/types';

export default (store) => next => action => {
  switch(action.type) {
    case NOTE_CREATED:
      store.dispatch({
        type: LOG_CREATED,
        data: {
          type: 'CREATE',
          message: `Note ${action.data.note._id} created`,
          user: action.data.user
        }
      });
      break;
    case NOTE_ARCHIVED_REMOVED:
    case NOTE_DASHBOARD_REMOVED:
      store.dispatch({
        type: LOG_CREATED,
        data: {
          type: 'DELETE',
          message: `Note ${action.data.note._id} deleted`,
          user: action.data.user
        }
      });
      break;
    case NOTE_ARCHIVED_UPDATED:
    case NOTE_DASHBOARD_UPDATED:
    case NOTE_RESTORED:
    case NOTE_ARCHIVED:
      store.dispatch({
        type: LOG_CREATED,
        data: {
          type: 'UPDATE',
          message: `Note ${action.data.note._id} updated`,
          user: action.data.user
        }
      });
      break;
    default:
      break;
  }
  next(action);
};
