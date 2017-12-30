import express from 'express';
import bodyParser from 'body-parser';

import env from './env';

import db from './db';
import routes from './route';

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(env.PORT, () => {
  console.log(`Running on ${env.HOST}`);
});
