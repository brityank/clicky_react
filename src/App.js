import React from "react";
import "./App.css";
import Body from "./components/Body";
import Clicky from "./components/Clicky";
import Nav from "./components/Navbar";
import imageList from "./data/imageList";
import { shuffle } from "underscore";
import msgList from "./data/msgList";

export default class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
    usrMessage: "Don't click on the same gif twice!",
    images: imageList,
    clicked: [],
    winning: true,
    shake: false
  };

  handleClick(e) {
    // console.log(this.state);
    const newState = { ...this.state };
    const choice = e.target.alt;
    newState.clicked.push(choice);
    if (new Set(newState.clicked).size < newState.clicked.length) {
      newState.usrMessage = "Oh well. Try again!";
      newState.winning = false;
      newState.shake = true;
    } else {
      newState.currentScore++;
      newState.highScore = newState.highScore < newState.currentScore ? newState.currentScore : newState.highScore;
      newState.usrMessage = msgList[Math.floor(Math.random() * msgList.length)];
      newState.winning = true;
      newState.shake = false;
    }
    newState.images = shuffle(newState.images);
    // console.log(newState);
    this.setState({ ...newState });
  }

  componentDidUpdate() {
    if (this.state.winning === false) {
      const restartState = {
        highScore: this.state.highScore,
        usrMessage: "Play again! Don't click on the same gif twice.",
        currentScore: 0,
        images: imageList,
        clicked: [],
        winning: true,
        shake: true
      };
      this.setState({ ...restartState });
    }
  }

  render() {
    const { currentScore, highScore, shake, usrMessage, images, winning } = this.state;
    return (
      <div>
        <Nav score={currentScore} highScore={highScore} msg={usrMessage} />
        <Body shake={shake}>
          {images.map((image, i) => {
            return (
              <Clicky
                src={image.src}
                alt={image.alt}
                key={i}
                clickEvent={this.handleClick.bind(this)}
                flip={winning}
              />
            );
          })}
        </Body>
      </div>
    );
  }
}
