// tests/db-handler.js
import { MongoMemoryReplSet } from "mongodb-memory-server";
import mongoose from "mongoose";

/**
 * Connect to the in-memory database.
 */

// eslint-disable-next-line consistent-return
const connect = async () => {
  const replSet = await MongoMemoryReplSet.create({
    replSet: {
      count: 3,
    },
  });
  const uri = replSet.getUri();

  try {
    await mongoose.connect(uri);
  } catch (error: any) {
    return error;
  }
};

/**
 * Drop database, close the connection and stop mongod.
 */
const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  // await replSet.stop();
};

/**
 * Remove all the data for all db collections.
 */
const clearDatabase = async () => {
  const { collections } = mongoose.connection;
  const keys = Object.keys(collections);
  for (let i = 0; i < keys.length; i += 1) {
    const collection = collections[keys[i]];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany({});
  }
};

export default { clearDatabase, closeDatabase, connect };
