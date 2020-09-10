import React, { Component } from "react";
import Navbar from '../common/Navbar'
import CarouselComponent from '../landing/CarouselComponent'
import AccessMenu from '../landing/AccessMenu'
import FreeAdvisory from '../landing/FreeAdvisory'
import CardSection from '../landing/CardSection'
import OurClients from '../landing/OurClients'
import Services from '../landing/Services'
import Contact from '../landing/Contact'
import FormAndMap from '../landing/FormAndMap'
import Footer from '../landing/Footer'
import MailTest from './MailTest'

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
     <Contact />
     <FormAndMap />
     <Footer />
     <MailTest />

        </div>
    );
  }
}
export default Landing;