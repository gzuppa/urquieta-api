import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import { Grid, List, Image } from 'semantic-ui-react'
import Assets from '../../assets/Assets'

class Exam extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <Grid>

                <Grid.Row>
                    
                    <img src={Assets.examImgs.topBackground} alt="topback" className="exam-top-background" />
                    <p className="exam-top-title">Examen de</p>
                    <p className="exam-top-subtitle">audición</p>
                    <List bulleted className="exam-top-list">
                        <List.Item>Asesoría y orientación en su búsqueda de soluciones de audición </List.Item>
                        <List.Item>Valoramos si requiere un aparato auditivo</List.Item>
                        <List.Item>Si ya es usuario de un aparato auditivo, evaluamos su auxiliar y le
                        informamos si es compatible con su baja auditiva actual. </List.Item>
                        <List.Item>Demostración del uso adecuado de un aparato auditivo</List.Item>
                    </List>
                    <p className="exam-top-question">¿Necesita que un especialista lo asesore?</p>
                    <p className="exam-top-subquestion">¿Requieres información de tecnología para la audición?</p>
                </Grid.Row>
                    
                <Grid.Row className="exam-2nd-row">
                    <div>
                        <img src={Assets.examImgs.exam1} alt="exam1" />
                    </div>
                    <div className="exam-arcs">
                        <img src={Assets.examImgs.arc1} alt="arc1" className="arc1"/>
                        <img src={Assets.examImgs.arc2} alt="arc2" className="arc2"/>
                        <img src={Assets.examImgs.arc3} alt="arc3" className="arc3"/>
                    </div>
                    <div className="exam-list">
                    <List animated verticalAlign='middle'>
                        <List.Item>
                        <Image avatar src={Assets.examImgs.icon1} className="exam-icons"/>
                        <List.Content className="exam-list-content">
                        Expediente e historia audiológica.<br/>
                        Son breves preguntas sobre el paciente.
                        </List.Content>
                        </List.Item>
                        <List.Item className="list-revision">
                        <Image avatar src={Assets.examImgs.icon2} className="exam-icons"/>
                        <List.Content className="exam-list-content">
                        Revisión de sus oídos.
                        </List.Content>
                        </List.Item>
                        <List.Item className="list-evaluation">
                        <Image avatar src={Assets.examImgs.icon3} className="exam-icons"/>
                        <List.Content className="exam-list-content">
                        Evaluación de su capacidad para escuchar sonidos.
                        </List.Content>
                        </List.Item>
                    </List>
                    </div>
                    <div className="exam-buttons">
                    <p className="issues-nocost">Sin costo</p>
                    <img src={Assets.issuesImgs.button} alt="button" className="issues-btn1" />
                        <p className="exam-btntxt1">Agenda tu cita <br/> GRATUITA</p>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn2" />
                        <p className="exam-btntxt2">55 5677 9364</p>
                    </div>
                </Grid.Row>

                <Grid.Row className="bottom-section">
                    <img src={Assets.examImgs.bottomBack} alt="bottom-back" className="exam-bottomBack" />
                    <img src={Assets.examImgs.bottomImg} alt="bottom-img" className="exam-bottomImg" />
                </Grid.Row>

            </Grid>
            </div>
        )
    }
}

export default Exam