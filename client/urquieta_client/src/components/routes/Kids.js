import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Container, Header } from 'semantic-ui-react'
import './routes.css'

class Kids extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            
            <Container>
    <br/><br/>
    <p className="services-paragraph">
    Entendemos la preocupación de los padres con sus hijos, por eso contamos con aparatos auditivos con perfil pediátrico. Nuestros aparatos de tipo curveta o BTE son ideales para ellos.
    <br/><br/> 
    Se usan detrás de la oreja y un tubo delgado los conecta a un molde hecho al tamaño de su
    conducto auditivo.
    <br/><br/> 
    Si los niños son alegres, ¿por qué su dispositivo de ayuda auditiva no debería serlo? Nuestros dispositivos de ayuda auditiva son amigables con ello y vienen en divertidos colores como rojo, morado, azul, rosa, café y vino.
    <br/><br/> 
    Para nosotros, lo más bonito de nuestra labor es lograr que un niño escuche.
    </p>
    <Header as='h2' className="services-up">¿Qué tipo de aparato puede usar mi hijo? </Header>
    <p className="services-paragraph">
    Con el diagnóstico de su médico o especialista, nos cercioramos si su pequeño tiene una baja auditiva. La tecnología apoya el desarrollo acústico de los niños
    </p>
    <Header as='h2' className="services-up">Aparatos auditivos pediátricos  </Header>
    <p className="services-paragraph">
    Necesitamos saber esta información para la adaptación del auxiliar auditivo electrónico (AAE):
    <br/><br/>
    Historial clínico.<br/>
    Situación de oído externo y medio.<br/>
    Conducto despejado.<br/>
    Estudios audiológicos realizados.<br/>
    PEATC* y estado estable con umbrales marcados.<br/>
    Señales de incomodidad o molestia.<br/>
    Observaciones del molde.<br/>
    Grado de confiabilidad de estudios.<br/>
    Situación de cooperación e interés de la familia.<br/>
    Cuestionario a familia para determinar detección de diferentes sonidos sin
    AAE.<br/><br/>
    *Potenciales Evocados Auditivos del Tronco Cerebral.
    Para los mas pequeños:<br/><br/>
    Medimos la resonancia del conducto auditivo.<br/>
    Alojamos los valores en un oído falso.<br/>
    Realizamos la adaptación en cámara anecoica.<br/>
    Damos la amplificación exacta.<br/><br/>
    En Auditivos Urquieta contamos con una gran variedad de aparatos auditivos especiales para niños, con diferentes tecnologías así como adaptación.<br/>
    Prueba de funcionamiento de auxiliares en bebes a partir de las cuatro semanas de edad.<br/>
    Medimos la respuesta real de la amplificación de diferentes sonidos contra el
    tímpano.   
    </p>
  </Container>

            </div>
        )
    }
}

export default Kids