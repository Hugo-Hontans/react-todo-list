import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const headersWithEmail = {
  "Content-Type": "application/json",
  "Email": localStorage.getItem("email")
};
const burl = process.env.REACT_APP_URL || "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },

  logout: function() {
    localStorage.clear();
  },

  sendTodoList(todoList) {
    return axios.post(`${burl}/todoList/sendTodolist`, todoList, { headers: headersWithEmail });
  },

  getTodoList() {
    return axios.get(`${burl}/todoList/getTodolist`, { headers: headersWithEmail });
  }
};