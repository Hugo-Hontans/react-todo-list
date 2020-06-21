import React from "react";
import './login.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";

export class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      window.location = "/home";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    if (API.isAuth()) {
      return (<Redirect to='/home' />);
    }
    const { email, password } = this.state;
    return (
      <form>
        <p className="col-8 col-md-12 center text-center">To enjoy this wonderful todo list application, log in.</p>
        <FormGroup  className="col-8 col-md-12 center" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            autoComplete="username"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="col-8 col-md-12 center" controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            autoComplete="current-password"
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <div className="d-flex justify-content-center">
            <Button onClick={this.send} type="submit">
                Log in
            </Button>
        </div>
        <div className="d-flex justify-content-center signup">
            Or
        </div>
        <div className="d-flex justify-content-center signup">
            <Link to="/signup">
                <Button onClick={this.send} type="submit">
                    Sign up
                </Button>
            </Link>
        </div>
      </form>
    );
  }
}