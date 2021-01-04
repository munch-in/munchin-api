import bodyParser from 'body-parser';
import express from 'express';

import * as AuthRoutes from './controllers/api/v1/auth';
import * as ApiBase from './controllers/api/v1/base';

/**
 * Creates the API server Express.JS app.
 */
export default function createApp() {
  const app = express();
  app.use(bodyParser.json());
  app.use(...ApiBase.createRouter('/api/v1', AuthRoutes));
  return app;
}
