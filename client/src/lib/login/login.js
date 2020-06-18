import React from "react";
import './login.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";
import { Link } from "react-router-dom";

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
    const { email, password } = this.state;
    return (
      <div>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <div className="d-flex justify-content-center">
            <Button onClick={this.send} type="submit">
                Login
            </Button>
        </div>
        <div className="d-flex justify-content-center signup">
            Or
        </div>
        <div className="d-flex justify-content-center signup">
            <Link to="/signup">
                <Button onClick={this.send} type="submit">
                    Signup
                </Button>
            </Link>
        </div>
      </div>
    );
  }
}