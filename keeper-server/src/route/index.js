import auth from './auth';
import users from './users';
import notes from './notes';
import logs from './logs';

export default app => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/notes', notes);
  app.use('/api/logs', logs);
};
