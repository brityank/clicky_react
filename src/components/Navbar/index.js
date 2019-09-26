import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default class Navigation extends Component {
  render() {
    const { msg, score, highScore } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">Clicky-Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>{msg}</Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item className="mx-1">Current Score: {this.props.score}</Nav.Item>
              <Nav.Item className="mx-1">High Score: {this.props.highScore}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
