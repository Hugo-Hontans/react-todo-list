const TodoList = require("../../schema/schemaTodoList.js");

async function sendTodoList(req, res) {
  const todoList = req.body;
  const email = req.headers.email;
  if (!todoList || !email) {
    // If todoList is null or undefined
    return res.status(400).json({
      text: "Invalid request",
    });
  }
  try {
    // Save todoList in DB
    const promises = [];

    const todoListData = await TodoList.find({ email });
    
    // Remove todoList in DB which was deleted by the user
    const todoListToRemove = todoListData.filter(todoDB => !todoList.some(todo => todo.id === todoDB.id));
    todoListToRemove.forEach(async todo => {
      promises.push(TodoList.deleteOne({ _id: todo._id }));
    });

    todoList.forEach(async (todo) => {
      if (todo._id) {
        const findTodo = await TodoList.findOne({
            _id: todo._id
        });
        // Update todo
        if (findTodo) {
            findTodo.todos = todo.todos;
            findTodo.name = todo.name;
            promises.push(findTodo.save());
        }
      // Create new todo
      } else {
          const findTodo = await TodoList.findOne({
            id: todo.id
          });
          if (!findTodo) {
            const todoData = new TodoList(todo);
            todoData.email = email;
            promises.push(todoData.save());
          }
      };
    });
    await Promise.all(promises);
    return res.status(200).json({
      text: "Success",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getTodoList(req, res) {
  const email = req.headers.email;
  try {
    const todoListData = await TodoList.find({ email });
    return res.status(200).json({
      text: "Success",
      todoList: todoListData,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.sendTodoList = sendTodoList;
exports.getTodoList = getTodoList;
