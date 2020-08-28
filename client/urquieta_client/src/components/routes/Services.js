import React, { Component } from "react";
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Item, Grid, Container, Header } from 'semantic-ui-react'
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

    <Item.Group>
     <Item className="serv-crumb">
      <Item.Image size='tiny' src={Assets.servicesImgs.ear} />
      <Item.Content verticalAlign='middle'>
        <p className="header-text header-services">Asesoría Gratuita</p>
      </Item.Content>
    </Item>
    </Item.Group>

    <Container>
    <p className="services-paragraph">
    Evaluamos si requiere un aparato o si es candidato a usar uno.
    Lo asesoramos y orientamos en su búsqueda de soluciones de audición.
    Evaluamos su aparato auditivo y le informamos si es compatible con su baja
    auditiva actual.
    Si lo requiere, recibe en línea una demostración del uso adecuado de su aparato auditivo.
    ¿Necesita que un especialista lo asesore?
    ¿Requiere información de tecnología para la audición? ¡Nosotros lo ayudamos! 
    </p>
    <Header as='h2' className="services-up">Servicio: Adaptación y ajuste.
    <br/>Nuestro protocolo de
        atención consiste en:</Header>
    <p className="services-paragraph">
    1. Atención personalizada. <br/>
    2. Equipo con tecnología de punta para los diferentes estudios que necesite. <br/>
    3. Aplicación de cuestionario previo para determinar las condiciones patológicas en que se presenta el paciente. <br/>
    4. Otoscopia para precisar las condiciones fisiológicas del conducto auditivo. <br/> <br/>
    Al concluir la primera etapa realizamos la valoración auditiva de la siguiente
    forma: <br/>
    1. Audiometría vía aérea, ósea y logoaudiometría. <br/>
    2. Explicación detallada de su problema auditivo. <br/>
    3. Prueba de las diferentes alternativas de auxiliares auditivos, de acuerdo a
    los resultados de su estudio, para definir qué tecnología le da mayores beneficios y comodidad. <br/>
    4. A través de estudios se precisa si es necesario brindarle un auxiliar auditivo
    bilateral o unilateral, considerando los beneficios que le otorgue y ajustándonos a su presupuesto. <br/>
    5. Toma de impresión del conducto auditivo para la elaboración de moldes
    anatómicos personalizados. <br/>
    Probado y autorizado el auxiliar, se realiza la adaptación de su dispositivo de
    ayuda auditiva. <br/><br/>
    El proceso consta de varios pasos: <br/>
    1. Colocación de moldes anatómicos. <br/>
    2. Calibración del aparato de ayuda auditiva para que funcione correctamente
    y sea agradable al paciente con el medio ambiente. <br/>
    3. Adaptación. <br/>
    4. Ajuste fino. Pruebas de ambiente cerrado y abierto para evaluar cómo se
    perciben los sonidos y voces. <br/>
    5. Explicación detallada del funcionamiento y uso del auxiliar auditivo, así
    como de los cuidados para su óptimo mantenimiento <br/>
    </p>
    <Header as='h2' className="services-up">Servicio: Postadaptación y seguimiento al paciente</Header>
    <p className="services-paragraph">
    Tras adquirir su auxiliar auditivo, usted cuenta con asesoría gratuita, ya sea
    que requiera información o tenga dudas sobre el adecuado funcionamiento
    del dispositivo. Lo atendemos de lunes a viernes de 9:00 a 18:00 a través de
    llamada telefónica, Whatsapp o correo electrónico. Si lo prefiere agendamos
    una cita en la sucursal. <br/> <br/>
    Cuando usted se haya acostumbrado al auxiliar, lo esperamos dos veces más
    en nuestras instalaciones para recalibrar el aparato auditivo. Nuestros técnicos mejoran el volumen o hacen modificaciones para que usted escuche
    mejor. Este servicio no tiene costo. Nuestras puertas están abiertas también si
    siente molestias o deficiencia auditiva. Además los auxiliares cuentan con garantía y pueden ser revisados directamente en nuestras sucursales. 
    </p>
    <Header as='h2' className="services-up">Accesorios, moldes y pilas </Header>
    <p className="services-paragraph">
    La vida de las baterías de los auxiliares auditivos varía dependiendo de la potencia, uso y aplicaciones que utilicen. En un dispositivo RIC con 12 horas de
    uso diario, la batería dura aproximadamente dos semanas. Si el uso de Bluetooth es constante la batería se agota en 10 días. Puede adquirir el blíster de
    seis pilas en nuestras instalaciones. <br/> <br/>
    Hay auxiliares que se fabrican a partir de moldes anatómicos, tomados a la
    medida del conducto auditivo del paciente. Se deben cambiar cada seis
    meses, aproximadamente.<br/> <br/>
    Tenemos una gran variedad de accesorios que mejoran el rendimiento del
    aparato auditivo. 
    </p>
    <Header as='h2' className="services-up">Laboratorio y taller </Header>
    <p className="services-paragraph">
    En nuestro laboratorio y taller damos mantenimiento y limpieza a auxiliares auditivos de cualquier tipo o marca y reparamos el noventa por ciento de las firmas auditivas en México. Además, manufacturamos moldes y ensamblamos dispositivos. 
    </p>
  </Container>
)
</div>
    );
  }
}
export default Services;