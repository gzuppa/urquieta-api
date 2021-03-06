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

    <Grid.Row className="services-2nd-section">
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

    <Grid.Row className="lonely-row">
      <div>
        <img src={Assets.servicesImgs.bullet4} alt="bullet4" className="bullet4" />
        <p className="bspans bulletspan4">Prueba de aparatos</p>
        <img src={Assets.servicesImgs.bulletLine4} alt="bulletLine4" className="bulletLine4" />
        <p className="bcontents bulletContent4">Prueba de las diferentes alternativas de auxiliares auditivos, de acuerdo
            a los resultados de su estudio, para definir qué tecnología le da mayores
            beneficios y comodidad.</p>
      </div>
    </Grid.Row>

    <Grid.Row>
    <Grid.Column width={6}>
        <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
        <img src={Assets.servicesImgs.services5} alt="ear" className="services-doctor"/>
      </Grid.Column>
      <Grid.Column width={10}>
      <Container fluid>
          <Header as='h2' className="servlist-header">Adaptación y ajuste</Header>
            <List ordered className="services-list">
              <List.Item className="servlist-item2">
              Colocación de moldes anatómicos. 
              </List.Item>
              <List.Item className="servlist-item2">
              Calibración del aparato de ayuda auditiva para que funcione correctamente y sea agradable al paciente con el medio ambiente.
              </List.Item>
              <List.Item className="servlist-item2">
              Adaptación.
              </List.Item>
              <List.Item className="servlist-item2">
              Ajuste fino. Pruebas de ambiente cerrado y abierto para evaluar cómo se perciben los sonidos y voces. 
              </List.Item>
              <List.Item className="servlist-item2">
              Explicación detallada del funcionamiento y uso del auxiliar auditivo, así como de los cuidados para su óptimo mantenimiento.
              </List.Item>
            </List>
          </Container>
          <br/><br/>
          <Container fluid>
          <Header as='h2' className="servlist-header">Postadaptación y seguimiento a nuestros pacientes</Header>
            <Grid.Row>
               <p className="servlist-item2">Tras adquirir su auxiliar auditivo, usted cuenta con asesoría gratuita, ya sea que requiera información o tenga dudas sobre el adecuado funcionamiento del dispositivo.
                Lo atendemos de lunes a viernes de 9:00 a 18:00 hrs </p>
            </Grid.Row>
            <br/>
            <Grid.Row>
              <Grid.Column>
                <img src={Assets.servicesImgs.phone} alt="phone" />
              </Grid.Column>
              <Grid.Column>
                <img src={Assets.servicesImgs.whatsapp} alt="whatsapp" /> 
              </Grid.Column>
              <Grid.Column>
               <img src={Assets.servicesImgs.mail} alt="mail" />
              </Grid.Column>
            </Grid.Row>
            <br/>
            <Grid.Row>
              <List bulleted className="servlist-item2">
                <List.Item>Cuando usted se haya acostumbrado al auxiliar, lo esperamos dos veces más en nuestras instalaciones para recalibrar el aparato auditivo. Nuestros
                  técnicos mejoran el volumen o hacen modificaciones para que usted escuche mejor. Este servicio no tiene costo.</List.Item>
                <List.Item>Nuestras puertas están abiertas también si siente molestias o deficiencia auditiva. </List.Item>
                <List.Item>Además los auxiliares cuentan con garantía y pueden ser revisados directamente en nuestras sucursales.</List.Item>
              </List>
            </Grid.Row>
          </Container>
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Row className="services-4th-row">
    <Grid.Column width={11}>
      <Container fluid className="last-servcont">
      <Header as='h2' className="servlist-header">Laboratorio y taller</Header>
        <p className="servlist-item2">En nuestro laboratorio y taller damos mantenimiento y limpieza a auxiliares
          auditivos de cualquier tipo o marca y reparamos el noventa por ciento de las
          firmas auditivas en México. Además, manufacturamos moldes y ensamblamos
          dispositivos.</p>
      </Container>
      <Container fluid className="last-servcont">
      <Header as='h2' className="servlist-header">Accesorios, moldes y pilas</Header>
        <p className="servlist-item2">La vida de las baterías de los auxiliares auditivos varía dependiendo de la
        potencia, uso y aplicaciones que utilicen. <br/> <br/>
        En un dispositivo RIC con 12 horas de uso diario, la batería dura aproximadamente
        dos semanas. Si el uso de Bluetooth es constante la batería se agota en 10
        días. Puede adquirir el blíster de seis pilas en nuestras instalaciones. <br/> <br/>
        Hay auxiliares que se fabrican a partir de moldes anatómicos, tomados a la
        medida del conducto auditivo del paciente. Se deben cambiar cada seis meses,
        aproximadamente.
        Tenemos una gran variedad de accesorios que mejoran el rendimiento del
        aparato auditivo.    </p>
      </Container>
      </Grid.Column>
      <Grid.Column width={5}>
        <img src={Assets.servicesImgs.services6} alt="ear" className="services-doctor"/>
        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
      </Grid.Column>
    </Grid.Row>

    </Grid>
</div>
    );
  }
}
export default Services;