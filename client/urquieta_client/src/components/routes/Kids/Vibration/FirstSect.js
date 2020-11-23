import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class FirstSect extends Component {
    render(){
        return(
            <div>
               <img src={Assets.kidsImgs.circle1} className="kids-circle1" alt="circle1" />
               <p className="kids-circletxt1">Oír, sentir y jugar<br/>sin problemas</p>
               <p className="kids-circletxt2">Totalmente digital, diseñado para niños</p>
               <p className="kids-circletxt3">Ligero, fácil de colocar y muy cómodos de llevar.</p>
               <p className="kids-circletxt4">Supresión de sonidos molestos</p>
               <p className="kids-circletxt5">Manejo sencillo</p>
            </div>
        )
    }
}

export default FirstSect