import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Grid, List, Image, Header } from 'semantic-ui-react'
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
    <Grid.Row columns="equal" className="aboutus-foot-imgs">
      <Grid.Column className="aboutus-column">
          <Image src={Assets.aboutImgs.store} alt="store" className="aboutus-imgs"/>
      </Grid.Column>
      <Grid.Column className="aboutus-column">
          <Image src={Assets.aboutImgs.room} alt="room" className="aboutus-imgs"/>
      </Grid.Column>
      <Grid.Column className="aboutus-column">
          <Image src={Assets.aboutImgs.doctor} alt="doctor" className="aboutus-imgs"/>  
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={8} className="aboutus-text">
      <p className="services-paragraph">
    Somos una empresa especializada en soluciones a pacientes con
    baja audición, que buscan un auxiliar auditivo cómodo, adecuado
    para beneficiar su escucha. Orientamos y acompañamos al paciente
    durante la adaptación al aparato auditivo, brindamos técnicas
    de soluciones audioprotésicas y vanguardia en sistemas de audición.
    Además ofrecemos estudios para detectar baja auditiva.
    Contamos con el respaldo de marcas de prestigio internacional
    como Audio Service, AM, Phonak y Bruckhoff.
      </p>
        <Header as='h2' className="services-up">Servicio y calibración a equipo audiologico</Header>
      <p className="services-paragraph">
      Nuestro quehacer incluye la venta de equipo médico del área de
      otorrinolaringología y audiología, así como mantenimiento preventivo y correctivo del mismo.
      </p>  
      </Grid.Column>
      <Grid.Column width={4}>
      <List animated verticalAlign='middle' className="sidebar-list aboutus-sidebar">
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
      <Grid.Column width={4}>
      
      </Grid.Column>
    </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Presentation