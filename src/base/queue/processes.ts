export const sendUserOrderReminder = async (order: unknown) => {
  // const user = await getUser(order.userId);
  const user = { name: "John", email: "" };
  const message = `Hi ${user.name}, your order is ready! ${order}`;
  // await sendEmail(user.email, message);
  return message;
};

export const sendTodoCompletionNotification = async (todo: unknown) => {
  // const user = await getUser(todo.userId);
  const user = { name: "John", email: "" };
  const message = `Hi ${user.name}, your todo is completed! ${todo}`;
  // await sendEmail(user.email, message);
  return message;
};

export const todo_created = async (todo: unknown) => {
  console.log("todo_created", todo);
};
