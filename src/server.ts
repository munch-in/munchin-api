import mongoose from 'mongoose';
import App from './app';

const app = App();

const port = process.env.PORT || 8000;
const dbUri = process.env.MONGO_URI;
const dbUsername = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;

const listen = function() {
  app.listen(port);
  console.log('Launched HTTP on port: ' + port);
};

const main = function() {
  mongoose.connect(dbUri, {
    user: dbUsername,
    pass: dbPassword,
  });
  listen();
};

// Export for testing
exports.app = app;

if (require.main === module) {
  main();
}
