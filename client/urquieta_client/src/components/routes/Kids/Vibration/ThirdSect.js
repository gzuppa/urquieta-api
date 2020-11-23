import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class ThirdSect extends Component {
    render(){
        return(
            <div>
               <p className="kids-circletxt9">Colocación</p>
               <img src={Assets.kidsImgs.colocation} className="kids-colocate" alt="colocate" />
            </div>
        )
    }
}

export default ThirdSect