import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuid} from 'uuid'
import { config } from "react-spring";

export default class OurClients extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuid(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          </div>
        </div>
    );
  }
}