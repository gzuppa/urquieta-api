import React, { Component } from 'react'
import { Grid, List } from 'semantic-ui-react'
import Assets from '../../../../assets/Assets'

class Header extends Component {
    render(){
        return(
            <div>
            <Grid.Row>
                <img src={Assets.kidsImgs.logo} alt="logo" className="kids-logo" />
                <p className="kids-header">
                El ser humano percibe el mundo que lo rodea sirviéndose de las experiencias sensoriales. <br/>
                De todos los sentidos, es fundamentalmente el del oído el que facilita
                la comunicación y promueve la interacción social, lo que nos permite
                establecer relaciones, participar en las actividades cotidianas, ser alertados de un peligro, y percatarnos de nuestras vivencias. Alrededor de
                360 millones de personas (el 5% de la población mundial) presentan
                pérdidas de audición que se consideran discapacitantes; cerca de 32
                millones son niños. 
                </p>
            </Grid.Row>
            </div>
        )
    }
}

export default Header