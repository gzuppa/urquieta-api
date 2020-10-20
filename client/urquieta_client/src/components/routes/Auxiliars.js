import React, { Component } from "react";
import Navbar from '../common/Navbar'
import { Grid, List } from 'semantic-ui-react'
import './routes.css'
import Assets from '../../assets/Assets'

class Auxiliars extends Component {
  render() {
    return (
        <div>
     <Navbar />
                 <Grid.Row>
                    <div>
                    <img src={Assets.examImgs.topBackground} alt="topback" className="exam-top-background" />
                    <p className="aux-top-title">¿Qué es un</p>
                    <p className="aux-top-subtitle">auxiliar</p>
                    <p className="aux-top-subsubtitle">auditivo?</p>
                    </div>
                    <div className="exam-top-right-cont">
                    <p className="aux-top-subquestion">Es un aparato que ayuda a mejorar la baja auditiva que sufren algunas personas 
                    por diversos factores, como edad o un padecimiento. Ayuda al paciente a mejorar la audición de forma cómoda
                    y, por tanto, a comunicarse sin problemas y realizar sus actividades diarias como cualquier persona normoyente. </p>
                    </div>
                </Grid.Row>
</div>
    );
  }
}
export default Auxiliars;