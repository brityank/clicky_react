import React from "react";
import "./App.css";
import Body from "./components/Body";
import Clicky from "./components/Clicky";
import Nav from "./components/Navbar";
import imageList from "./data/imageList";

import _ from "underscore";

export default class App extends React.Component {
  componentDidMount() {
    this.setState({
      currentScore: 0,
      highScore: 0,
      shake: false,
      usrMessage: "",
      images: imageList
    });
  }
  render() {
    const {currentScore, highScore, correctGuess, shake, usrMessage, images}
    return (
      <div>
        <Nav currentScore={currentScore} highScore{/>
        <Body>
          {images.map((image, i) => {
            return <Clicky ;
          })}
        </Body>
      </div>
    );
  }
}
