import express from 'express';
import bodyParser from 'body-parser';

import db from './db';
import routes from './route';

import env from './env';

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(8080, () => {
  console.log(`Running on ${env.HOST}`);
});