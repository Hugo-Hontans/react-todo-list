import React from "react";
import './signup.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

export class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    cpassword: ""
  };
  send = async () => {
    const { email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      window.location = "/";
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
    const { email, password, cpassword } = this.state;
    return (
      <form>
        <p className="col-8 col-md-12 center text-center">To enjoy this wonderful todo list application, sign up.</p>
        <FormGroup className="col-8 col-md-12 center" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoComplete="username"
            autoFocus
            type="text"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="col-8 col-md-12 center" controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            autoComplete="new-password"
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup className="col-8 col-md-12 center" controlId="cpassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            autoComplete="new-password"
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <div className="d-flex justify-content-center">
            <Button onClick={this.send}>
                Sign up
            </Button>
        </div>
      </form>
    );
  }
}