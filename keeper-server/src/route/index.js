import auth from './auth';
import users from './users';
import notes from './notes';

export default app => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/notes', notes);
};
