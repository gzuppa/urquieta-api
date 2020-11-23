import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Buttons extends Component {
    render(){
        return(
            <div>
                <img src={Assets.kidsImgs.questionButton} alt="questionbtn" className="questbtn1" />
                <img src={Assets.kidsImgs.questionButton} alt="questionbtn" className="questbtn2" />
                <img src={Assets.kidsImgs.questionButton} alt="questionbtn" className="questbtn3" />
                <img src={Assets.kidsImgs.questionButton} alt="questionbtn" className="questbtn4" />
                <img src={Assets.kidsImgs.questionButton} alt="questionbtn" className="questbtn5" />
                <p className="questtxt1">¿Porqué es importante la detección<br/>y rehabilitación temprana?</p>
                <p className="questtxt2">¿Qué debo hacer si sospecho que <br/>el niño tiene una pérdida auditiva?</p>
                <p className="questtxt3">¿Cómo funcionan los aparatos<br/>auditivos para niños?</p>
                <p className="questtxt4">¿Qué causa la pérdida auditiva?</p>
                <p className="questtxt5">¿Qué tipo de aparato auditivo<br/>puede usar mi hijo?</p>
                <img src={Assets.kidsImgs.smallButton} alt="smallbtn" className="smallbtn1" />
                <img src={Assets.kidsImgs.smallButton} alt="smallbtn" className="smallbtn2" />
                <p className="smalltxt1">Agenda tu cita</p>
                <p className="smalltxt2">555677 9364</p>
            </div>
        )
    }
}

export default Buttons