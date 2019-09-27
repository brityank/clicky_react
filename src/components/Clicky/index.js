import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./style.css";

export default class Clicky extends Component {
  componentDidMount() {
    if (this.props.flip) {
      document.querySelectorAll(".rounded").forEach(el => el.classList.add("animated", "flipInX"));
    }
  }

  render() {
    const { src, alt, clickEvent, id } = this.props;
    return (
      <div className="img-container">
        <Image src={src} alt={alt} onClick={clickEvent} key={id} className="rounded responsive" />
      </div>
    );
  }
}
