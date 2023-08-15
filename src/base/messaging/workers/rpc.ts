import amp from "amqplib/callback_api";

const fibonacci = (n: number): number => {
  if (n === 1 || n === 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

amp.connect("amqp://localhost", (err: Error, conn: any) => {
  if (err) throw new Error(err.message);

  conn.createChannel((err: Error, ch: any) => {
    if (err) throw new Error(err.message);

    const q = "rpc_queue";

    ch.assertQueue(q, { durable: false });
    ch.prefetch(1);
    console.log("[x] Awaiting RPC requests");

    ch.consume(q, (msg: any) => {
      const n = parseInt(msg.content.toString());

      console.log(`[.] fib(${n})`);

      const r = fibonacci(n);

      ch.sendToQueue(msg.properties.replyTo, Buffer.from(r.toString()), {
        correlationId: msg.properties.correlationId,
      });

      ch.ack(msg);
    });
  });
});
