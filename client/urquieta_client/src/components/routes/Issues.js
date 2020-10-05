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
                    <img src={Assets.issuesImgs.issues1} alt="ear" className="services-doctor"/>
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

                </Grid>
            </div>
        )
    }
}

export default Issues