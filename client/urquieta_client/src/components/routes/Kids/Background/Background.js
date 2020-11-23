import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Background extends Component {
    render(){
        return(
            <div>
               <img src={Assets.kidsImgs.girl} className="kids-girl" alt="kidsgirl" /> 
               <img src={Assets.kidsImgs.device1} className="kids-device1" alt="kidsdevice1" />
               <img src={Assets.kidsImgs.devices} className="kids-devices" alt="kidsdevices" />
               <p className="txtbackids1">Sistema de</p>
               <p className="txtbackids2">Vibracion osea</p>
               <p className="txtbackids3">Aparatos auditivos</p>
               <p className="txtbackids4">Infantiles</p>
            </div>
        )
    }
}

export default Background