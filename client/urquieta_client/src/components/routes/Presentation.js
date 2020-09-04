import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Grid, List, Image } from 'semantic-ui-react'
import Assets from '../../assets/Assets'

class Presentation extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
            <img src={Assets.aboutImgs.background} alt="back" className="aboutus-background"/>
            <img src={Assets.aboutImgs.ear} alt="ear" className="aboutus-ear"/>
      </Grid.Column>
      <Grid.Column width={11}>
            <img src={Assets.layoutImgs.earbutton} alt="earbutton" className="aboutus-btn" />
            <span className="aboutus-btn-txt">¿Quienes somos?</span>
            <br/>
            <List animated verticalAlign='middle' className="sidebar-list">
            <List.Item>
              <Image className="ear-icon aboutus-icon" src={Assets.aboutImgs.earicon} alt="whatsapp" />
              <List.Content>
                <span className="aboutus-icon-txt">Profesionales en la <br/>rehabilitación auditiva</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="cert-icon aboutus-icon" src={Assets.aboutImgs.certificateicon} alt="cert" />
              <List.Content>
                <span className="aboutus-icon-txt">35 años de experiencia</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="group-icon aboutus-icon" src={Assets.aboutImgs.groupicon} alt="group"/>
              <List.Content>
                <span className="aboutus-icon-txt">Más de 15 mil personas <br/>beneficiadas</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="device-icon aboutus-icon" src={Assets.aboutImgs.deviceicon} alt="device"/>
              <List.Content>
                <span className="aboutus-icon-txt">Más de 250 modelos de <br/>aparatos auditivos</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="headphone-icon aboutus-icon" src={Assets.aboutImgs.headphonesicon} alt="headphone"/>
              <List.Content>
                <span className="aboutus-icon-txt">Orientación y solución a<br/>problemas auditivos</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="help-icon aboutus-icon" src={Assets.aboutImgs.helpicon} alt="help"/>
              <List.Content>
                <span className="aboutus-icon-txt">Atención personalizada</span>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image className="scope-icon aboutus-icon" src={Assets.aboutImgs.scopeicon} alt="scope"/>
              <List.Content>
                <span className="aboutus-icon-txt">Servicio de médicos audiólogos.<br/>Técnicos especialistas en adaptación</span>
              </List.Content>
            </List.Item>
      </List>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <img src={Assets.aboutImgs.earicon} alt="earicon" className="aboutus-icons ear-icon" />
            <span className="aboutus-txt ear-icon-txt">Profesionales en la <br/>rehabilitación auditiva</span>
      </Grid.Column>
      <Grid.Column>
          
      </Grid.Column>
      <Grid.Column>
          
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Presentation