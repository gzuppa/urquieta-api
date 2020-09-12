import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Assets from '../../assets/Assets'
import './landing.css'

const Services = () => (
    <Grid columns="equal">
    <Grid.Row>
        <Grid.Column>
        <p className="advisory adv-serv-414">Servicios</p>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
     <Grid.Column>
        <Link to="/services"><img src={Assets.generalImgs.avatar2} className="services-img" alt="avatar1"/></Link>
        <p className="services-title">Asesoría gratuita</p>
      </Grid.Column>
      <Grid.Column>
        <Link to="/services"><img src={Assets.generalImgs.avatar1} className="services-img" alt="avatar2"/></Link>
        <p className="services-title">Adaptación y ajustes</p>
      </Grid.Column>
      <Grid.Column>
        <Link to="/services"><img src={Assets.generalImgs.avatar4} className="services-img" alt="avatar3"/></Link>
        <p className="services-title">Accesorios, moldes y pilas</p>
      </Grid.Column>
      <Grid.Column>
        <Link to="/services"><img src={Assets.generalImgs.avatar4} className="services-img" alt="avatar4"/></Link>
        <p className="services-title">Laboratorio</p>
        <p className="services-subtitle">Reparación, refacciones, revisión y mantenimiento</p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Services