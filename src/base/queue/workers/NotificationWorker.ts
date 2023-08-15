import { Job, Worker } from "bullmq";
import { notificationQueue, redisConnection } from "..";
import { workerListener } from "../listeners";
import { todo_created } from "../processes";

export const NotificationWorker = new Worker(
  notificationQueue.name,
  async (job: Job) => {
    const { data } = job;
    console.log("NotificationWorker", data);
    switch (job.name) {
      case "todo_created":
        await todo_created(data);
        break;
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

workerListener(NotificationWorker);
