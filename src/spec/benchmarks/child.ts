// import { faker } from "@faker-js/faker";
import axios from "axios";
import minimist from "minimist";
// import fetch from "node-fetch";

const argv = minimist(process.argv.slice(2));
const url = argv.url || "http://localhost:14156";

// (async () => {
//   const response = await fetch(url + "/v1/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: "test",
//       email: faker.internet.email(),
//     }),
//   });
// })();

function LoadTest() {
  axios.interceptors.request.use(
    (config: any) => {
      config.metadata = { startTime: new Date() };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response: any) => {
      response.config.metadata.endTime = new Date();
      response.duration = response.config.metadata.endTime - response.config.metadata.startTime;
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  try {
    axios.get(url + "/health").then((response: any) => {
      console.log({ duration: response.duration });
      process.stdout.write(response.duration.toString());
    });
  } catch (error) {
    process.exitCode = 1;
  }
}
LoadTest();
