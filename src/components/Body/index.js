import React, { Component } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import "./style.css";

export default class Body extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Container fluid>
          <Jumbotron>
            <h1>Clicky Game!</h1>
            <p>This is a simple react memory game, using bootstrap components.</p>
            <p>
              <Button variant="primary">Start Game</Button>
            </p>
          </Jumbotron>
          <div className="grid">{children}</div>
        </Container>
      </div>
    );
  }
}
