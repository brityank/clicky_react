import React from "react";
import "./App.css";
import Body from "./components/Body";
import Clicky from "./components/Clicky";
import Nav from "./components/Navbar";
import imageList from "./data/imageList";
// import _ from "underscore";

export default class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    shake: false,
    msg: "Choose an image",
    images: imageList,
    guesses: []
  };

  handleClick(e) {
    console.log(e);
  }

  render() {
    const { score, highScore, shake, msg, images } = this.state;
    return (
      <div>
        <Nav score={score} highScore={highScore} msg={msg} />
        <Body shake={shake}>
          {images.map((image, i) => {
            return (
              <Clicky className="gridItem" src={image.src} alt={image.alt} clickEvent={this.handleClick} key={i} />
            );
          })}
        </Body>
      </div>
    );
  }
}
