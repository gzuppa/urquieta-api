import React, { Component } from 'react'
import { Grid, Container, List } from 'semantic-ui-react'
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
                </Grid>
            </div>
        )
    }
}

export default Issues