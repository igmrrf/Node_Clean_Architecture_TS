import amp from "amqplib/callback_api";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: rpc_client.js num");
  process.exit(1);
}

amp.connect("amqp://localhost", (err, conn) => {
  if (err) throw new Error(err.message);

  const rpcQueue = "rpc_queue";

  conn.createChannel((err, ch) => {
    if (err) throw new Error(err.message);

    ch.assertQueue("", { exclusive: true }, (err, q) => {
      if (err) throw new Error(err.message);

      const corr = Date.now().toString();
      const num = parseInt(args[0]);

      console.log(`[x] Requesting fib(${num})`);

      ch.consume(
        q.queue,
        (msg: any) => {
          if (msg.properties.correlationId === corr) {
            console.log(`[.] Got ${msg.content.toString()}`);
            setTimeout(() => {
              conn.close();
              process.exit(0);
            }, 500);
          }
        },
        { noAck: true },
      );

      ch.sendToQueue(rpcQueue, Buffer.from(num.toString()), {
        correlationId: corr,
        replyTo: q.queue,
      });
    });
  });
});
