import ChildProcesses from "child_process";
import { join } from "path";

const URL = "http://localhost:14156";

async function Load() {
  const times: number[] = [];
  const children = [];

  for (let i = 0; i < 2; i++) {
    const child = ChildProcesses.spawn("ts-node", [join(__dirname, "child.ts"), `--url=${URL}`]);
    children.push(child);
    console.log({ here: "here" });
  }

  const processInstances = children.map((child) => {
    return new Promise(function c(res) {
      child.stdout.on("data", (data) => {
        console.log(`child stdout: ${data}`);
        times.push(parseInt(data.toString));
      });
      child.on("exit", (code) => {
        if (code === 0) {
          res(true);
        } else {
          res(false);
        }
      });
    });
  });

  const responses = await Promise.all(processInstances);
  console.log({ responses });

  if (responses.filter(Boolean).length == responses.length) {
    const sum = times.reduce((a, b) => a + b, 0);
    const avg = sum / times.length || 0;
    console.log({ avg });
  } else {
    console.log("Failed to complete load test");
  }
}
Load();
