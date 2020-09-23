import React, { Component } from "react";
import Navbar from '../common/Navbar'
import { Item, Grid, Container, Header, Image, List } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './routes.css'

class Services extends Component {
  render() {
    return (
        <div>
     <Navbar />

    <Grid>
    <Grid.Row>
     <Grid.Column width={6}>
     <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
     <img src={Assets.servicesImgs.services1} alt="ear" className="services-doctor"/>
      </Grid.Column>
      <Grid.Column  width={5}>
        <img src={Assets.servicesImgs.asesoria} className="services-circle-principal" alt="services2"/>
        <p className="services-titlecircle-principal services-1st-head">Asesoría gratuita</p>
        <img src={Assets.servicesImgs.asesoria} className="services-circle-principal" alt="services2"/>
        <p className="services-titlecircle-principal services-2nd-head">Accesorios, moldes y pilas</p>
      </Grid.Column>
      <Grid.Column  width={5}>
        <img src={Assets.servicesImgs.adaptacion} className="services-circle-principal" alt="services3"/>
        <p className="services-titlecircle-principal services-3rd-head">Adaptación y ajustes</p>
        <img src={Assets.servicesImgs.lab} className="services-circle-principal" alt="services2"/>
        <p className="services-titlecircle-principal services-4th-head">Laboratorio</p>
        <p className="services-subtitlecircle-principal">Reparación, refacciones, revisión y mantenimiento</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={11  }>
        
      </Grid.Column>
      <Grid.Column width={5}>
        <img src={Assets.servicesImgs.services2} alt="ear" className="services-doctor"/>
        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
        <img src={Assets.servicesImgs.circle1} alt="services1" className="services-1st-circle" />
        <img src={Assets.servicesImgs.circle2} alt="services2" className="services-2nd-circle" />
        <img src={Assets.servicesImgs.circle3} alt="services3" className="services-3rd-circle" />
      </Grid.Column>
    </Grid.Row>
    </Grid>

    
)
</div>
    );
  }
}
export default Services;