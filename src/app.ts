import bodyParser from 'body-parser';
import express from 'express';
import {Container} from 'typedi';

import * as AuthRoutes from './controllers/api/v1/auth';
import * as ApiBase from './controllers/api/v1/base';
import UserModel from './models/user';

const logger = {
  log() {
    console.log('reg');
  },
};

/**
 * Creates the API server Express.JS app.
 */
export default function createApp() {
  const app = express();
  app.use(bodyParser.json());
  app.use(...ApiBase.createRouter('/api/v1', AuthRoutes));
  Container.set('userModel', UserModel);
  Container.set('logger', logger);
  return app;
}
