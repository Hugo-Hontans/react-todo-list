const account = require('./account/lib.js');

module.exports = function (app) {
    app.post('/login',account.login);
    app.post('/signup',account.signup);
    app.post('/todolist',account.sendTodoList);
    app.get('/getTodoList',account.getTodoList);
    app.delete('/deleteTodoList',account.deleteTodoList);
}