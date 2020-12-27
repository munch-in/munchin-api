import express = require('express');

import AuthRoutes = require('./controllers/auth');
import ApiBase = require('./controllers/base');

/**
 * Creates the API server Express.JS app.
 */
exports.createApp = function() {
  let app = express();
  app.use(...ApiBase.createRouter('', AuthRoutes));
  return app;
};
