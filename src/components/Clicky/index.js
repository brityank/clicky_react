import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./style.css";

export default class Clicky extends Component {
  render() {
    const { src, alt, clickEvent, id } = this.props;
    return <Image src={src} alt={alt} onClick={clickEvent} key={id} rounded />;
  }
}
