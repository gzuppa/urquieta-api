import React, { Component } from "react";
import Navbar from '../common/Navbar'
import CarouselComponent from '../landing/CarouselComponent'
import AccessMenu from '../landing/AccessMenu'
import FreeAdvisory from '../landing/FreeAdvisory'
import CardSection from '../landing/CardSection'
import OurClients from '../landing/OurClients'
import Services from '../landing/Services'

class Landing extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <CarouselComponent />
     <AccessMenu />
     <FreeAdvisory />
     <CardSection />
     <OurClients />
     <Services />
        </div>
    );
  }
}
export default Landing;