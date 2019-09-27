import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default class Navigation extends Component {
  render() {
    const { msg, score, highScore } = this.props;
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>Er, phrasing?</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Item>
              Current Score: <strong>{score}</strong>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item>
              High Score: <strong>{highScore}</strong>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Navbar>
          <Nav className="mx-auto">
            <Nav.Item>{msg}</Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
