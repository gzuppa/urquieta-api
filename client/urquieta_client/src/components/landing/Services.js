import React from 'react'
import { Grid } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FreeAdvisory = () => (
    <Grid columns="equal">
    <Grid.Row>
        <Grid.Column>
        <p className="advisory">Servicios</p>
        </Grid.Column>
    </Grid.Row>
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
)

export default FreeAdvisory