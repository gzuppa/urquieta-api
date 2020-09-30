import React, { Component } from "react";
import Navbar from '../common/Navbar'
import { Grid, Container, Header, List } from 'semantic-ui-react'
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
      <Grid.Column width={11}>
      </Grid.Column>
      <Grid.Column width={5}>
        <img src={Assets.servicesImgs.services2} alt="ear" className="services-doctor"/>
        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
        <div>
          <img src={Assets.servicesImgs.circle1} alt="services1" className="services-1st-circle" />
          <div className="services-1st-txt"><span className="services-span">Servicio en sucursal</span></div>
        </div>
        <div>
          <img src={Assets.servicesImgs.circle2} alt="services2" className="services-2nd-circle" />
          <div className="services-2nd-txt"><span className="services-span">Atención a distancia</span></div>
        </div>
        <div>
        <img src={Assets.servicesImgs.circle3} alt="services3" className="services-3rd-circle" />
        <div className="services-3rd-txt"><span className="services-span">Atención a domicilio</span></div>
        </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className="services-3rd-row">
      <Grid.Column width={6}>
        <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
        <img src={Assets.servicesImgs.services3} alt="ear" className="services-doctor"/>
      </Grid.Column>
      <Grid.Column width={10}>
          <Container fluid>
          <Header as='h2' className="servlist-header">Asesoría Gratuita</Header>
            <List bulleted className="services-list">
              <List.Item className="servlist-item">
                <List.Header className="servlist-item">¿Cómo escucha?</List.Header>Evaluamos si requiere un aparato o si es candidato a usar uno
              </List.Item>
              <br/>
              <List.Item className="servlist-item">
                <List.Header className="servlist-item">¿Está buscando el mejor aparato auditivo para usted o un familiar?</List.Header>
                Lo asesoramos y orientamos en su búsqueda de soluciones de audición.
              </List.Item>
              <br/>
              <List.Item className="servlist-item">
                <List.Header className="servlist-item">¿Ya es usuario de aparato auditivo?</List.Header>
                Evaluamos su aparato auditivo y le informamos si es compatible con su baja auditiva actual.
              </List.Item>
            </List>
          </Container>
       <img src={Assets.servicesImgs.devices} alt="devices" className="devices-gif"/>
       <List className="section-footer">
        <List.Item>¿Necesita que un especialista lo asesore?</List.Item>
        <List.Item>¡Nosotros lo ayudamos!</List.Item>
      </List>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className="services-4th-row">
    <Grid.Column width={11}>
      <div>
        <img src={Assets.servicesImgs.bullet1} alt="bullet1" className="bullet1" />
        <p className="bspans bulletspan1">Agende su cita</p>
        <img src={Assets.servicesImgs.bulletLine1} alt="bulletLine1" className="bulletLine1" />
        <p className="bcontents bulletContent1">Horario de Lunes a Viernes</p>
      </div>
      <div>
        <img src={Assets.servicesImgs.bullet2} alt="bullet2" className="bullet2" />
        <p className="bspans bulletspan2">Atención personalizada</p>
        <img src={Assets.servicesImgs.bulletLine2} alt="bulletLine2" className="bulletLine2" />
        <List bulleted className="bcontents bulletContent2">
          <List.Item>Atención personalizada.</List.Item>
          <List.Item>Equipo con tecnología de punta.</List.Item>
          <List.Item>Aplicación de cuestionario previo para determinar las condiciones patológicas en que se presenta el paciente.</List.Item>
          <List.Item>Otoscopia para precisar las condiciones fisiológicas del conducto auditivo.</List.Item>
        </List>
      </div>
      <div>
        <img src={Assets.servicesImgs.bullet3} alt="bullet3" className="bullet3" />
        <p className="bspans bulletspan3">Valoración auditiva</p>
        <img src={Assets.servicesImgs.bulletLine2} alt="bulletLine3" className="bulletLine3" />
        <List ordered className="bcontents bulletContent3">
          <List.Item>Audiometría vía aérea, ósea y logoaudiometría.</List.Item>
          <List.Item>Explicación detallada de su problema auditivo.</List.Item>
          <List.Item>A través de estudios se precisa si es necesario brindarle un auxiliar auditivo bilateral o unilateral, considerando los beneficios que le otorgue y ajustándonos
                      a su presupuesto.</List.Item>
          <List.Item>En caso de requerirlo: toma de impresión del conducto auditivo para la elaboración de moldes anatómicos personalizados.</List.Item>
        </List>
      </div>
      </Grid.Column>
      <Grid.Column width={5}>
        <img src={Assets.servicesImgs.services4} alt="ear" className="services-doctor"/>
        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <div>
        <img src={Assets.servicesImgs.bullet4} alt="bullet4" className="bullet4" />
        <p className="bspans bulletspan4">Prueba de aparatos</p>
        <img src={Assets.servicesImgs.bulletLine4} alt="bulletLine4" className="bulletLine4" />
        <p className="bcontents bulletContent4">Prueba de las diferentes alternativas de auxiliares auditivos, de acuerdo
            a los resultados de su estudio, para definir qué tecnología le da mayores
            beneficios y comodidad.</p>
      </div>
    </Grid.Row>
    </Grid>
</div>
    );
  }
}
export default Services;