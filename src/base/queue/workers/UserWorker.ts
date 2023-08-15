import { Job, Worker } from "bullmq";
import { redisConnection, userQueue } from "..";
import { workerListener } from "../listeners";

export const UserWorker = new Worker(
  userQueue.name,
  async (job: Job) => {
    const { data } = job;
    console.log("UserWorker", data);
    switch (job.name) {
      case "sendUserOrderReminder":
        // await sendUserOrderReminder(data);
        break;
      case "sendTodoCompletionNotification":
        // await sendTodoCompletionNotification(data);
        break;
      default:
        break;
    }
    return data;
  },
  {
    concurrency: 10,
    autorun: false,
    connection: redisConnection,
  },
);

workerListener(UserWorker);
