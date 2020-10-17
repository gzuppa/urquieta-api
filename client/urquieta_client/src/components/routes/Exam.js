import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import { Grid, List } from 'semantic-ui-react'
import Assets from '../../assets/Assets'

class Exam extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <Grid>

                <Grid.Row>
                    <div>
                    <img src={Assets.examImgs.topBackground} alt="topback" className="exam-top-background" />
                    <p className="exam-top-title">Examen de</p>
                    <p className="exam-top-subtitle">audición</p>
                    </div>
                    <div className="exam-top-right-cont">
                    <List bulleted className="exam-top-list">
                        <List.Item>Asesoría y orientación en su búsqueda de soluciones de audición </List.Item>
                        <List.Item>Valoramos si requiere un aparato auditivo</List.Item>
                        <List.Item>Si ya es usuario de un aparato auditivo, evaluamos su auxiliar y le
                        informamos si es compatible con su baja auditiva actual. </List.Item>
                        <List.Item>Demostración del uso adecuado de un aparato auditivo</List.Item>
                    </List>
                    <p className="exam-top-question">¿Necesita que un especialista lo asesore?</p>
                    <p className="exam-top-subquestion">¿Requieres información de tecnología para la audición?</p>
                    </div>
                </Grid.Row>

            </Grid>
            </div>
        )
    }
}

export default Exam