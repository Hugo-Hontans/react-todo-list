const TodoList = require("../../schema/schemaTodoList.js");

async function sendTodoList(req, res) {
  const todoList = req.body;
  if (!todoList) {
    // If todoList is null or undefined
    return res.status(400).json({
      text: "Invalid request",
    });
  }
  try {
    // Save todoList in DB
    const promises = [];

    const todoListData = await TodoList.find();
    
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
            promises.push(findTodo.save());
        }
      // Create new todo
      } else {
            const todoData = new TodoList(todo);
            promises.push(todoData.save());
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
  try {
    const todoListData = await TodoList.find();
    return res.status(200).json({
      text: "Success",
      todoList: todoListData,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteTodoList(req, res) {
  try {
    await TodoList.deleteMany({ _id: "5eee28ac0bedb72ba4e5ed1f" });
    return res.status(200).json({
      text: "Success",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.sendTodoList = sendTodoList;
exports.getTodoList = getTodoList;
exports.deleteTodoList = deleteTodoList;
