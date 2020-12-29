import express from 'express';
import {Container} from 'typedi';

import * as AuthRoutes from './controllers/auth';
import * as ApiBase from './controllers/base';

const logger = {
  log() {
    console.log('reg');
  }
};

/**
 * Creates the API server Express.JS app.
 */
export default function createApp() {
  let app = express();
  app.use(...ApiBase.createRouter('', AuthRoutes));
  Container.set('userModel', require('./models/user').default);
  Container.set('logger', logger);
  return app;
}
