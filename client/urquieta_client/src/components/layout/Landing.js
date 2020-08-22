import React, { Component } from "react";
import Navbar from '../common/Navbar'
import CarouselComponent from '../landing/CarouselComponent'

class Landing extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <CarouselComponent />
        </div>
    );
  }
}
export default Landing;