const App = require('./app');

const app = App.createApp();

const port = process.env.MUNCHIN_API_PORT || 8000;

const listen = function() {
  app.listen(port);
  console.log('Launched HTTP on port: ' + port);
};

const main = function() {
  // TODO set up db:
  listen();
};

// Export for testing
exports.app = app;

if (require.main === module) {
  main();
}
