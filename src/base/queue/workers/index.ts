import { NotificationWorker } from "./NotificationWorker";
import { UserWorker } from "./UserWorker";

export const startWorkers = async () => {
  console.log({ run: "running workers" });
  try {
    await NotificationWorker.run();
    await UserWorker.run();
  } catch (err) {
    console.error(err);
  }
};

export const stopWorkers = async () => {
  console.log({ run: "stopping workers" });

  try {
    await NotificationWorker.close();
    await UserWorker.close();
  } catch (err) {
    console.error(err);
  }
};

export default { stopWorkers, startWorkers };
