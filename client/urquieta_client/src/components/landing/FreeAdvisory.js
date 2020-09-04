import React from 'react'
import { Grid, Image, List } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FreeAdvisory = () => (
    <Grid>
    <Grid.Row>
      <Grid.Column width={6}>
        <p className="advisory">Asesoría gratis</p>
        <p className="advisory-sub">¿Quieres saber más sobre la pérdida auditiva?</p>
        <p className="advisory-2">Click aquí</p>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src={Assets.generalImgs.advisory} className="img-advisory" />
      </Grid.Column>
      <Grid.Column width={2}>
          <List animated verticalAlign='middle' className="sidebar-list">
            <List.Item>
              <Image className="sidebar-icon" src={Assets.generalImgs.whatsapp} alt="whatsapp" />
            </List.Item>
            <List.Item>
              <Image className="sidebar-icon" src={Assets.generalImgs.agenda} alt="agenda" />
            </List.Item>
            <List.Item>
              <Image className="sidebar-icon" src={Assets.generalImgs.llamada} alt="llamada"/>
            </List.Item>
            <List.Item>
              <Image className="sidebar-icon" src={Assets.generalImgs.chat} alt="chat"/>
            </List.Item>
      </List>
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default FreeAdvisory