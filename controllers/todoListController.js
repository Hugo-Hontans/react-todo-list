const todoList = require('./todo-list/lib.js');

module.exports = function (app) {
    app.post('/sendTodolist', todoList.sendTodoList);
    app.get('/getTodoList', todoList.getTodoList);
}