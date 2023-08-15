import type { Channel, Connection } from "amqplib/callback_api";
import amp from "amqplib/callback_api";

amp.connect("amqp://localhost", (err: Error, conn: Connection) => {
  if (err) throw new Error(err.message);
  conn.createChannel((err: Error, ch: Channel) => {
    if (err) throw new Error(err.message);

    const exchange = "topic_logs";

    // Create exchange
    // ch.assertExchange(exchange, "fanout", { durable: false });
    // ch.assertExchange(exchange, "direct", { durable: false });
    ch.assertExchange(exchange, "topic", { durable: false });

    // Create a queue
    // ch.assertQueue("hello", { durable: true });
    ch.assertQueue("", { exclusive: true });

    // Get arguments from command line
    const args = process.argv.slice(2);
    const msg = args.slice(1).join(" ") || "Hello World!";
    const key = args.length > 0 ? args[0] : "anonymous.info";

    // Publish to exchange
    // ch.publish(exchange, '', Buffer.from(msg));
    ch.publish(exchange, key, Buffer.from(msg), {
      replyTo: "hello",
      correlationId: "1234567890",
      contentType: "application/json",
      contentEncoding: "utf-8",
      headers: {
        "x-delay": 1000,
      },
      expiration: 1000,
      messageId: "1234567890",
      timestamp: Date.now(),
      type: "type",
      userId: "user",
      appId: "app",
      deliveryMode: 2,
      priority: 1,
      persistent: true,
    });
    console.log("[x] Sent %s: %s", key, msg);

    // Publish to queue
    // ch.sendToQueue("hello", Buffer.from(msg), { persistent: true });
    // console.log("[x] Sent %s", msg);

    setTimeout(() => {
      conn.close();
      process.exit(0);
    }, 500);
  });
});
