import logger from "base/logger";
import config from "config";
import MongoDBManager from "base/database/MongoDBManager";

const db = new MongoDBManager({ config, logger });

async function createSampleTodos() {
  logger.info("Finished creating sample todos");
}

(async function run() {
  logger.info("Running seed script");
  try {
    await db.connect();
    await Promise.all([createSampleTodos()]);

    await db.close();
    logger.info("Finished running seed script");
  } catch (error) {
    logger.error("An error occurred while seeding the database", {
      error: error.message || error.toString(),
      stack: error.stack,
    });
  }
})();
