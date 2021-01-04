import mongoose from 'mongoose';

const TEST_DB_NAME = 'munchintest';
const MONGO_TEST_URI = `mongodb://localhost/${TEST_DB_NAME}?&connectTimeoutMS=360000`;

const connectToDB = async function () {
  if (mongoose.connection.readyState === 1) {
    return;
  } else if (mongoose.connection.readyState === 2) {
    mongoose.connection.on('connected', function () {
      return;
    });
  } else {
    await mongoose.connect(MONGO_TEST_URI);
  }
};

const clearCollections = async function () {
  if (mongoose.connection.db.databaseName !== TEST_DB_NAME) {
    throw 'Refusing to clear a non-test database!';
  }

  const collections = await mongoose.connection.db.collections();
  await Promise.all(
    collections.filter((c) => !c.collectionName.match(/^system\./)).map((c) => c.deleteMany({}))
  );
};

const setUpDb = async function () {
  await connectToDB();
  await clearCollections();
};

export const initializeForTesting = async function () {
  await setUpDb();
  // TODO add more test setup here...
};
