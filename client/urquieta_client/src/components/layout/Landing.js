import React, { Component } from "react";
import Navbar from '../common/Navbar'
import CarouselComponent from '../landing/CarouselComponent'
import AccessMenu from '../landing/AccessMenu'

class Landing extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <CarouselComponent />
     <AccessMenu />
        </div>
    );
  }
}
export default Landing;