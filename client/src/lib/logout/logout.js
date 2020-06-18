import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

export class Logout extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
        <Button onClick={this.disconnect}>
          Logout
        </Button>
    );
  }
}