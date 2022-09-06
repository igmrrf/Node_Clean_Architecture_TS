// tests/db-handler.js
import mongoose from "mongoose";
import { MongoMemoryReplSet } from "mongodb-memory-server";

/**
 * Connect to the in-memory database.
 */

// eslint-disable-next-line consistent-return
module.exports.connect = async () => {
  const replSet = await MongoMemoryReplSet.create({
    replSet: {
      count: 3,
    },
  });
  const uri = replSet.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, mongooseOpts);
  } catch (error) {
    return error;
  }
};

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  // await replSet.stop();
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
  const { collections } = mongoose.connection;
  const keys = Object.keys(collections);
  for (let i = 0; i < keys.length; i += 1) {
    const collection = collections[keys[i]];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany();
  }
};
