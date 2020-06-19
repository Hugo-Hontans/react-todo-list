const User = require("../../schema/schemaUser.js");
const TodoList = require("../../schema/schemaUser.js");
const passwordHash = require("password-hash");

async function signup(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  // Création d'un objet user, dans lequel on hash le mot de passe
  const user = {
    email,
    password: passwordHash.generate(password)
  };
  // On check en base si l'utilisateur existe déjà
  try {
    const findUser = await User.findOne({
      email
    });
    if (findUser) {
      return res.status(400).json({
        text: "L'utilisateur existe déjà"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde de l'utilisateur en base
    const userData = new User(user);
    const userObject = await userData.save();
    return res.status(200).json({
      text: "Succès",
      token: userObject.getToken()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function login(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si l'utilisateur existe en base
    const findUser = await User.findOne({ email });
    if (!findUser)
      return res.status(401).json({
        text: "L'utilisateur n'existe pas"
      });
    if (!findUser.authenticate(password))
      return res.status(401).json({
        text: "Mot de passe incorrect"
      });
    return res.status(200).json({
      token: findUser.getToken(),
      text: "Authentification réussi"
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}

async function sendTodoList(req, res) {
  const todoList = req.body;
  if (!todoList) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // Sauvegarde de la todoList en base
    const promises = [];
    todoList.forEach(todo => {
      // TODO: delete this
      if (todo._id) return;
      const todoData = new TodoList(todo);
      promises.push(todoData.save());
    });
    await Promise.all(promises);
    return res.status(200).json({
      text: "Succès"
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
      todoList: todoListData
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteTodoList(req, res) {
  try {
    const del = await TodoList.deleteMany({_id: '5eed10075c25627526395df2'});
    return res.json(del);
    return res.status(200).json({
      text: "Succès"
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//On exporte nos deux fonctions

exports.login = login;
exports.signup = signup;
exports.sendTodoList = sendTodoList;
exports.getTodoList = getTodoList;
exports.deleteTodoList = deleteTodoList;