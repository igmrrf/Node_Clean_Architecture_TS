import MongoDBManager from "base/database/MongoDBManager";
import TodoSeed from "base/database/seeders/todos.json";
import logger from "base/logger";
import config from "config";
import TodoModel from "containers/todos/TodoModel";

const db = new MongoDBManager({ config, logger });

async function createSampleTodos() {
  await TodoModel.create(TodoSeed);
  logger.info("Finished creating sample todos");
}

(async function run() {
  logger.info("Running seed script");
  try {
    await db.connect();
    await Promise.all([createSampleTodos()]);

    await db.close();
    logger.info("Finished running seed script");
  } catch (error: any) {
    logger.error("An error occurred while seeding the database", {
      error: error.message || error.toString(),
      stack: error.stack,
    });
  }
})();
