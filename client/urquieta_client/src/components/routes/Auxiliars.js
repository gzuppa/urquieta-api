import React, { Component } from "react";
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Container, Header } from 'semantic-ui-react'
import './routes.css'

class Auxiliars extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <AccessMenu />

    <Container>
    <br/><br/>
    <Header as='h2' className="services-up">¿Qué es un auxiliar auditivo?</Header>
    <p className="services-paragraph">
    Es un aparato que ayuda a mejorar la baja auditiva que sufren algunas personas por diversos factores, como edad o un padecimiento. Ayuda al paciente a mejorar la audición de
    forma cómoda y, por tanto, a comunicarse sin problemas y realizar sus actividades diarias
    como cualquier normoyente. 
    </p>
    <Header as='h2' className="services-up">Auxiliares Auditivos personalizados: </Header>
    <p className="services-paragraph">
    Cada persona requiere un dispositivo de ayuda auditiva adecuado a sus necesidades de escucha y comodidad. Aplicamos prueba de auxiliares auditivos, de acuerdo a los resultados
    de sus estudios, para determinar qué tecnología le da mayor confort y beneficios en escucha, y resolvemos si necesita un auxiliar bilateral o unilateral. Para que el dispositivo se
    ajuste a su oído tomamos la impresión del conducto auditivo y hacemos un molde anatómico que se ensambla a su auxiliar. Finalmente, calibramos el aparato para que funcione correctamente y le resulte cómodo con el medio ambiente.
    </p>
    <Header as='h2' className="services-up">¿Qué tipos de aparatos auditivos existen?  </Header>
    <Header as='h2' className="services-up">Receptor dentro del canal o RIC.  </Header>
    <p className="services-paragraph">
    Esta generación de auxiliares auditivos ha revolucionado la manera de usar un aparato auditivo. Se coloca detrás de la oreja, un cable
    delgado conecta un receptor dentro del oído y separa en dos partes el dispositivo de ayuda
    auditiva. Al mantener los micrófonos lejos de la bocina logra mayor potencia, confort y estética. Los sistemas RIC son de tecnología avanzada. Pueden ser compatibles con Bluetooth,
    recargables o usar batería convencional.
    Ideal para pacientes que buscan discreción y potencia en un mismo equipo.   
    </p>
    <Header as='h2' className="services-up">ITC o Intracanal:  </Header>
    <p className="services-paragraph">
    Hecho a la medida del conducto auditivo. <br/><br/>
    CIC o completamente dentro del canal. <br/><br/>
    ITE o intrauricular. Conocido en México como concha. Ocupa todo el pabellón auditivo y
    parte del conducto. Es el más grande de estos tres sistemas.
    Para cualquiera de estos dispositivos de ayuda auditiva se hace un molde anatómico del
    conducto auditivo del paciente y se ensambla un circuito. Son ideales para personas que no
    segregan tanto cerumen y tienen buena motricidad para el manejo de un auditivo pequeño.
    Ideal para el paciente que busca no traer nada atrás del oído.    
    </p>
    <Header as='h2' className="services-up">Curveta o BTE (behind the ear)  </Header>
    <p className="services-paragraph">
    Normalmente tienen la mayor potencia con una batería de larga duración. Se usa colgado detrás de la oreja. Un tubo delgado lo conecta a un
    molde hecho al tamaño del conducto auditivo. Hay curvetas de diferentes tamaños y
    pueden cubrir desde la baja auditiva más leve hasta la más profunda. Existe una generación
    de curvetas mini, que se esconden tras la oreja. Cuentan con un tubo muy fino, prácticamente invisible, que se conecta dentro del conducto auditivo. Son conocidos como Sistema
    Open, pues no tapan el canal auditivo y no provocan sensación de oído tapado. Ideal para
    quien empieza con baja auditiva debido a la edad.     
    </p>
    <Header as='h2' className="services-up">Sistemas de vibración ósea.  </Header>
    <p className="services-paragraph">
    Son aparatos auditivos especiales para personas que
    no pueden usar un auxiliar convencional dentro del conducto, debido a alguna afección,
    como oído tapado, malformaciones de nacimiento (microtia, atresia) u otitis crónica supurante (escurrimiento de líquido constante). El sistema vibratorio se coloca detrás de la oreja,
    transforma las ondas sonoras en vibraciones y así amplifica el sonido. Estimula directamente a la cóclea o caracol sin necesidad de que pase el sonido por el conducto auditivo.     
    </p>
    
  </Container>
)
</div>
    );
  }
}
export default Auxiliars;