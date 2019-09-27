import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./style.css";

export default class Body extends Component {
  render() {
    const { children, shake } = this.props;
    return (
      <div>
        <Container fluid>
          <div className={shake ? "grid animated shake" : "grid"}>{children}</div>
        </Container>
      </div>
    );
  }
}
