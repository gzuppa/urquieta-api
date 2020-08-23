import React, { Component } from "react";
import Navbar from '../common/Navbar'
import CarouselComponent from '../landing/CarouselComponent'
import AccessMenu from '../landing/AccessMenu'
import FreeAdvisory from '../landing/FreeAdvisory'
import CardSection from '../landing/CardSection'

class Landing extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <CarouselComponent />
     <AccessMenu />
     <FreeAdvisory />
     <CardSection />
        </div>
    );
  }
}
export default Landing;