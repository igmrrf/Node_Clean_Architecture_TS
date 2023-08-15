import { faker } from "@faker-js/faker";
import Autocannon from "autocannon";
const startBenchMark = async () => {
  // const url = "http://localhost:" + process.env.PORT || "3000";
  const url = "http://localhost:14156";
  const args = process.argv.slice(2);
  const connections = Number(args[0]) || 1000;
  const maxConnectionRequests = Number(args[1]) || 100;
  const duration = Number(args[2]) || 5;
  console.log({ args });
  console.log({ connections, maxConnectionRequests, duration });

  // const routes = [
  //   {
  //     method: "POST",
  //     path: "/v1/user",
  //     body: JSON.stringify({
  //       username: faker.internet.userName(),
  //       email: faker.internet.email(),
  //     }),
  //   },
  //   {
  //     method: "GET",
  //     path: "/",
  //   },
  //   {
  //     method: "GET",
  //     path: "/health",
  //   },
  // ];

  // routes.map((route, index) => {
  // console.log(route);
  // const simple = duration * index;
  // setTimeout(() => {
  const instance = Autocannon(
    {
      title: "Node_Clean ",
      url,
      connections,
      duration,
      maxConnectionRequests,
      pipelining: 1,
      headers: {
        "Content-Type": "application/json",
      },

      // requests: [route as unknown as Request],
      requests: [
        {
          method: "POST",
          path: "/v1/user",
          body: JSON.stringify({
            username: faker.internet.userName() + (Date.now() / Math.random()) * 1000,
            email: faker.internet.email(),
          }),
        },
      ],
    },
    finishedBenchmark,
  );

  Autocannon.track(instance, { renderProgressBar: true });

  function finishedBenchmark(err: unknown, result: unknown) {
    console.log("finished benchmarking", result, err);
  }
  // }, simple * 1000 * 2);
  // });
};
startBenchMark();
