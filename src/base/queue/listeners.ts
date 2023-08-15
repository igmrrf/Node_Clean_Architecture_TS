import { Queue, QueueEvents, Worker } from "bullmq";
import { redisConnection } from ".";
// LISTENERS
// queue listener

export const queueListener = (queue: Queue) => {
  const queueEventListener = new QueueEvents(queue.name, {
    connection: redisConnection,
  });

  queueEventListener.on("waiting", (jobId) => {
    console.log("Job waiting", jobId);
  });

  queueEventListener.on("active", (jobId) => {
    console.log("Job active", jobId);
  });

  queueEventListener.on("stalled", (jobId) => {
    console.log("Job stalled", jobId);
  });

  queueEventListener.on("completed", (jobId) => {
    console.log("Job completed", jobId);
  });

  queueEventListener.on("failed", (jobId, err) => {
    console.log("Job failed", jobId, err);
  });

  queueEventListener.on("progress", (jobId, progress) => {
    console.log(`Job progress ${jobId} ${progress}`);
  });

  queueEventListener.on("paused", () => {
    console.log("Queue paused");
  });

  queueEventListener.on("resumed", (jobId) => {
    console.log("Job resumed", jobId);
  });

  queueEventListener.on("cleaned", (jobs, type) => {
    console.log("Jobs cleaned", jobs, type);
  });

  queueEventListener.on("drained", () => {
    console.log("Queue drained");
  });
};

export const workerListener = (worker: Worker) => {
  worker.on("completed", (job) => {
    console.log("Job completed with result", job.returnvalue);
  });

  worker.on("failed", (job, err) => {
    console.log("Job failed with reason", err);
  });

  worker.on("progress", (job, progress) => {
    console.log(`Job ${job.id} reported progress: ${progress}%`);
  });
};
