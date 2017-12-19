import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import env from './env';

import users from './route/users';
import auth from './route/auth';

const app = express();

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(env.MONGODB_URL, { useMongoClient: true });

app.use('/api/auth', auth);
app.use('/api/users', users);

app.listen(8080, () => {
  console.log(`Running on ${env.HOST}`);
});
