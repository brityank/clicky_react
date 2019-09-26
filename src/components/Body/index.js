import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./style.css";

export default class Body extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Container fluid>{children}</Container>
      </div>
    );
  }
}
