import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'
import Buttons from './Buttons'

class Questions extends Component {
    render(){
        return(
            <div>
            <Buttons />
            <img src={Assets.kidsImgs.kids1} alt="kids1" className="kids-back1" />
            <p className="backtxt">Con el diagnóstico de su médico o especialista,<br/>nos cercioramos si su pequeño tiene una baja auditiva</p>
            </div>
        )
    }
}

export default Questions