import type { Channel, Connection, Message } from "amqplib/callback_api";
import amp from "amqplib/callback_api";

const args = process.argv.slice(2);

if (args.length === 0) {
  // console.log("Usage: receive_logs_direct.js [info] [warning] [error]");
  // console.log("Usage: worker.js: topic [kern.*] [*.critical] [kern.critical]");
  console.log("Usage: worker.js: <facility>.<severity>");
  process.exit(1);
}

amp.connect("amqp://localhost", (err: Error, conn: Connection) => {
  if (err) throw new Error(err.message);

  conn.createChannel((err: Error, ch: Channel) => {
    if (err) throw new Error(err.message);

    // Name of exchange
    // const exchange = "logs";
    // const exchange = "direct_logs";
    const exchange = "topic_logs";

    // Create Queue
    // ch.assertQueue("hello", { durable: true });

    // Tells rabbitmq not to deliver a message to a worker until it has processed and acknowledged the previous one.
    // This prevents a single worker from taking in long running tasks while others sit idle with simple tasks.
    // ch.prefetch(1);

    // Create exchange
    // ch.assertExchange(exchange, "fanout", { durable: false });
    // ch.assertExchange(exchange, "direct", { durable: false });
    ch.assertExchange(exchange, "topic", { durable: false });

    // Assert queue
    ch.assertQueue("", { exclusive: true }, (err: Error, q: any) => {
      if (err) throw new Error(err.message);
      console.log({ q });

      console.log(`[x] Waiting for messages in ${q.queue}. To exit press CTRL+C`);

      // Set args to severity or use regex to check if args matches pattern
      args.forEach((key: string) => {
        // Bind queue to exchange
        ch.bindQueue(q.queue, exchange, key);
      });
      // Bind queue to exchange
      // ch.bindQueue(q.queue, exchange, "");

      // Consume queue
      ch.consume(
        q.queue,
        (msg: Message | null) => {
          if (msg === null) return;
          const secs = msg.content.toString().split(".").length - 1;

          console.log(`[x] Received ${msg.fields.routingKey}: ${msg.content.toString()}`);

          setTimeout(() => {
            console.log(`[x] Done`);
          }, secs * 1000);
        },
        { noAck: true },
      );
    });
  });
});
