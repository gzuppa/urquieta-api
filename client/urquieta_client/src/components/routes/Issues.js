import React, { Component } from 'react'
import { Grid, Container, List, Image } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'

class Issues extends Component {
    render(){
        return(
            <div>
            <Navbar />
            
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues1} alt="ear" className="services-doctor"/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    La audición y el equilibrio son fundamentales para nuestra vida
                    diaria, el cuidado y atención de su audición son esenciales.<br/><br/>
                    <strong>¿Cómo se diagnostica la hipoacusia?</strong><br/>
                    La hipoacusia suele ser un motivo frecuente de consulta médica.
                    Normalmente las bajas auditivas son detectadas por terceras
                    personas. Sin embargo, una de las pruebas para identificarla es
                    el estudio audiométrico o audiometría. <br/><br/>
                    <strong>Puntos a considerar</strong>
                    </p>
                    <List bulleted className="issues-paragraph">
                        <List.Item>Investigación clínica del paciente</List.Item>
                        <List.Item>Edad de detección </List.Item>
                        <List.Item>Si afecta a uno o a los dos oídos</List.Item>
                        <List.Item>Síntomas agregados familiares o perinatales</List.Item>
                        <List.Item>Desarrollo de lenguaje</List.Item>
                        <List.Item>Uso de ototóxicos</List.Item>
                    </List>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>

                    </Grid.Column>
                    <Grid.Column width={8}>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn1" />
                        <p className="issues-btntxt1">Agenda tu cita <br/> GRATUITA</p>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn2" />
                        <p className="issues-btntxt2">55 5677 9364</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="bullet-section">
                        <img src={Assets.issuesImgs.bullet1} alt="bullet1" className="issues-blt1" />
                        <p className="issues-blttxt1">Agenda <br/> tu cita <br/> GRATUITA</p>
                        <img src={Assets.issuesImgs.bullet2} alt="bullet2" className="issues-blt2" />
                        <p className="issues-blttxt2">Expediente</p>
                        <img src={Assets.issuesImgs.bullet3} alt="bullet3" className="issues-blt3" />
                        <p className="issues-blttxt3">Otoscopia</p>
                        <img src={Assets.issuesImgs.bullet4} alt="bullet4" className="issues-blt4" />
                        <p className="issues-blttxt4">Audiometría</p>
                        <img src={Assets.issuesImgs.bullet5} alt="bullet5" className="issues-blt5" />
                        <p className="issues-blttxt5">Asesoría <br/>y prueba <br/> de aparatos</p>
                </Grid.Row>

                <Grid.Row>
                <img src={Assets.issuesImgs.landscape} alt="back" className="services-background issues-landscape"/>
                <img src={Assets.issuesImgs.landscapeImg} alt="ear" className="services-doctor issues-landscape"/>
                </Grid.Row>

                <Grid.Row className="info-section">
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues2} alt="ear" className="services-doctor issues-2nd-section"/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    Es un eficiente diagnóstico para valorar el estado de su audición, se
                    realiza cuando se sospecha pérdida auditiva. <br/>
                    Este estudio evalúa su capacidad para percibir (escuchar) tonos puros
                    para cada una de las frecuencias estudiadas, es decir, la intensidad
                    más baja a la que el oído percibe el sonido en dichas frecuencias.
                    </p>
                    <List horizontal className="issues-list">
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            Rápido
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            Confiable
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            No causa molestias
                        </List.Content>
                        </List.Item>
                    </List>
                    <p className="issues-paragraph">
                    <strong>¿Cómo se realiza?</strong>
                    </p>
                    <List animated verticalAlign='middle'>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La audiometría precederá de una exploración otoscópica. Realizada por un especialista en el diagnóstico auditivo 
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        Las pruebas de audiometría se llevan a cabo en una cabina audiométrica, un espacio sonoamortiguado que aísla al paciente
                        de otros sonidos del ambiente. 
                        </List.Content>
                        </List.Item>
                    </List>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="issues-3rd-row">
                    <Grid.Column width={11}>
                    <List animated verticalAlign='middle' className="issues-3rd-list">
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        A la persona a quien se le realiza la prueba se le colocan unos
                        audífonos, y el especialista usa un audiómetro para producir
                        sonidos de diferentes frecuencias e intensidades que envía al
                        paciente y se le pide a la persona que indique si puede escuchar los sonidos que se generan.  
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La interpretación de resultados y asesoría se realizan en la
                        misma consulta. 
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La audiometría no es en sí misma una técnica de prevención,
                        ya que no evita los daños congénitos, por la edad u ocasionados por la exposición al ruido, pero permite detectarlos en un
                        estado precoz de su desarrollo, y por tanto su la importancia
                        de su realización periódica
                        </List.Content>
                        </List.Item>
                        <div className="issues-advisory">
                           <br/> ¿Tiene alguna duda sobre su audición?<br/><br/>Asesoría, sin costo.
                        </div>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn3" />
                        <img src={Assets.generalImgs.whatsapp} alt="whatsapp" className="whatsapp-issues" />
                        <p className="issues-btntxt3">Enviar Whatsapp</p>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <img src={Assets.servicesImgs.services2} alt="ear" className="services-doctor"/>
                        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <img src={Assets.issuesImgs.landscapeInverted} alt="landscape-inv" className="landscape-inverted" />
                        <p className="landscape-1sttxt">¿Cómo <br/> oímos?</p>
                        <p className="landscape-2ndtxt">Los oídos son receptores auditivos que captan las ondas
                                                        sonoras, encargados de transmitir y transformar diferentes
                                                        tipos de energía:
                                                        Acústica: hasta que impacta el tímpano.<br/>
                                                        Mecánica: al vibrar con los huesecillos.<br/>
                                                        Hidráulica: al estimular fluidos dentro de la cóclea.
                        </p>
                    </Grid.Row>

                    <Grid.Row>
                        <div>
                        <p className="ear-1stblt">1</p>
                        <p className="ear-1sttxt">Las ondas sonoras son recogidas por el pabellón auricular</p>
                        </div>
                        <div className="ear-2nddiv">
                        <p className="ear-2ndblt">2</p>
                        <p className="ear-2ndtxt">Transmitidas a través del canal auditivo</p>
                        </div>
                        <div className="ear-3rddiv">
                        <p className="ear-3rdblt">3</p>
                        <p className="ear-3rdtxt">El tímpano comienza a vibrar y envía
                                                  de esta forma ondas sonoras a los huesecillos del oído medio</p>
                        </div>
                        <div>
                        <img src={Assets.issuesImgs.ear} alt="ear-schema" className="ear-schema" />
                        </div>
                        <div className="ear-4thdiv">
                        <p className="ear-4thblt">4</p>
                        <p className="ear-4thtxt">Una membrana transmite las vibraciones a la cóclea</p>
                        </div>
                        <div className="ear-5thdiv">
                        <p className="ear-5thblt">5</p>
                        <p className="ear-5thtxt">El nervio auditivo envía impulsos al cerebro, donde son percibidos como sonidos</p>
                        </div>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Issues