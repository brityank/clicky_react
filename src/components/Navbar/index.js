import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default class Navigation extends Component {

  const {msg, score} = this.props;

  render() {
    return (
      <div>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">Clicky-Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>{this.props.msg}</Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item>{this.props.msg}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
