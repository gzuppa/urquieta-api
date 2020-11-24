import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Title extends Component {
    render(){
        return(
            <div>
                <img src={Assets.kidsImgs.blueballoon} className="kids-balloon" alt="balloon" />
                <p className="balloontitle">Auditivos Urquieta es el único distribuidor en México</p>
                <p className="balloonsubtitle">Audioservice / Bruckhoff</p>
            </div>
        )
    }
}

export default Title