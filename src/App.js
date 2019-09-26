import React from "react";
import "./App.css";
import Body from "./components/Body";
import Clicky from "./components/Clicky";
import Nav from "./components/Navbar";
import imageList from "./data/imageList";
// import _ from "underscore";

export default class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
    shake: false,
    usrMessage: "Don't click on the same gif twice!",
    images: imageList,
    clicked: []
  };

  handleClick(e) {
    const newState = { ...this.state };
    newState.clicked.push(e.target.alt);
    newState.images = _.shuffle(newState.images);
    this.setState({ newState });
  }

  render() {
    const { currentScore, highScore, shake, usrMessage, images } = this.state;
    return (
      <div>
        <Nav score={currentScore} highScore={highScore} msg={usrMessage} />
        <Body>
          <div className={shake ? "grid animated shake" : "grid"}>
            {images.map((image, i) => {
              return <Clicky src={image.src} alt={image.alt} key={i} handleClick={this.handleClick.bind(this)} />;
            })}
          </div>
        </Body>
      </div>
    );
  }
}
