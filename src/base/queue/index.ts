import { Queue } from "bullmq";
import config from "config";
import { queueListener } from "./listeners";

const redisHost = config.get("redis.host");
const redisPort = config.get("redis.port");
const redisPassword = config.get("redis.password");
const redisUser = config.get("redis.user");
const redisAuth = config.get("redis.auth");

const redisData = {
  host: redisHost,
  port: redisPort,
};

export const redisConnection = {
  ...(redisAuth ? { ...redisData, username: redisUser, password: redisPassword } : redisData),
};

export const userQueue = new Queue("user", {
  connection: redisConnection,
  sharedConnection: true,
});

queueListener(userQueue);

export const notificationQueue = new Queue("notification", {
  connection: redisConnection,
});
queueListener(notificationQueue);
