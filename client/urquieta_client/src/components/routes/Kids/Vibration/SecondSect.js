import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class SecondSect extends Component {
    render(){
        return(
            <div>
               <img src={Assets.kidsImgs.circle2} className="kids-circle2" alt="circle2" />
               <p className="kids-circletxt6">Listo para una<br/>colocación sencilla</p>
               <p className="kids-circletxt7">El sistema se colocará sobre el mastoides para<br/>garantizar un contacto directo con la piel</p>
               <p className="kids-circletxt8">Para transmitir las oscilaciones mecánicas al<br/>oído interno es necesaria una presión estática<br/>del auricular óseo al cráneo</p>
            </div>
        )
    }
}

export default SecondSect