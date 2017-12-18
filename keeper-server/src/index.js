import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import env from './env';

const app = express();

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(env.MONGODB_URL, { useMongoClient: true });

app.listen(8080, () => {
  console.log(`Running on ${env.HOST}`);
});
