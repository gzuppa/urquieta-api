import React, { Component } from "react";
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Item, Grid } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './routes.css'

class Services extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <AccessMenu />
     <Item.Group>
     <Item className="serv-crumb">
      <Item.Image size='tiny' src={Assets.servicesImgs.ear} />
      <Item.Content verticalAlign='middle'>
        <p className="header-text header-services">Servicios</p>
      </Item.Content>
    </Item>
    </Item.Group>

    <Grid columns="equal">
    <Grid.Row>
     <Grid.Column>
        <img src={Assets.generalImgs.avatar2} className="services-img"/>
        <p className="services-title">Asesoría gratuita</p>
      </Grid.Column>
      <Grid.Column>
        <img src={Assets.generalImgs.avatar1} className="services-img"/>
        <p className="services-title">Adaptación y ajustes</p>
      </Grid.Column>
      <Grid.Column>
        <img src={Assets.generalImgs.avatar4} className="services-img"/>
        <p className="services-title">Accesorios, moldes y pilas</p>
      </Grid.Column>
      <Grid.Column>
        <img src={Assets.generalImgs.avatar4} className="services-img"/>
        <p className="services-title">Laboratorio</p>
        <p className="services-subtitle">Reparación, refacciones, revisión y mantenimiento</p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
        </div>
    );
  }
}
export default Services;