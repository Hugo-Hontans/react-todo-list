const TodoList = require("../../schema/schemaTodoList.js");

async function sendTodoList(req, res) {
  const todoList = req.body;
  if (!todoList) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide",
    });
  }
  try {
    // Sauvegarde de la todoList en base
    const promises = [];
    todoList.forEach((todo) => {
      // TODO: delete this
      if (todo._id) return;
      const todoData = new TodoList(todo);
      promises.push(todoData.save());
    });
    await Promise.all(promises);
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getTodoList(req, res) {
  try {
    const todoListData = await TodoList.find();
    return res.status(200).json({
      text: "Succès",
      todoList: todoListData,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteTodoList(req, res) {
  try {
    const del = await TodoList.deleteMany({ _id: "5eed10075c25627526395df2" });
    return res.json(del);
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.sendTodoList = sendTodoList;
exports.getTodoList = getTodoList;
exports.deleteTodoList = deleteTodoList;
