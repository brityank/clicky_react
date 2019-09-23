import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Clicky from "../Clicky";
import "./style.css";

export default class Game extends Component {
  handleClick(e) {
    console.log(e);
  }

  render() {
    const { imageList } = this.props;
    return (
      <div>
        <Row>
          {imageList.map((image, i) => {
            return <Col xs={6} md={3} key={i}></Col>;
          })}
        </Row>
      </div>
    );
  }
}
