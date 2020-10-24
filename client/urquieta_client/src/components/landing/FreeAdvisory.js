import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FreeAdvisory = () => (
    <Grid>
    <Grid.Row>
      <Grid.Column width={6} className="advisory-text">
        <p className="advisory">Asesoría gratis</p>
        <p className="advisory-sub">¿Quieres saber más sobre la pérdida auditiva?</p>
        <p className="advisory-2">Click aquí</p>
      </Grid.Column>
      <Grid.Column width={8}>
        <a className="photo">
        <img src={Assets.generalImgs.advisory} className="img-advisory" />
        <div className="glow-wrap">
          <i className="glow"></i>
        </div>
        </a>
      </Grid.Column>
      
    </Grid.Row>
    </Grid>
)

export default FreeAdvisory