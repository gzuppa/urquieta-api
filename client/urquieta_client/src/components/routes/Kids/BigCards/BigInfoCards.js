import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Cards extends Component {
    render(){
        return(
            <div>
                <div class="big-card-container bigcardinfo">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">Balerinas con sistema de vibración ósea</span>
                        <h2 class="big-card-title">Oír, sentir y jugar sin problemas</h2>
                        <span class="big-card-description big-subtle">Totalmente digital diseñado para niños. Es especialmente ligero, fácil de colocar y muy cómodos de llevar. El sistema se coloca sobre el mastoides para garantizar un contacto directo con la piel. Para transmitir las oscilaciones mecánicas al oído interno es necesaria una presión estática del auricular óseo al cráneo.</span>
                        <div class="big-card-read">
                            <img src={Assets.auxImgs.balerina1} class="balerina-1" alt="balerina1" />
                            <img src={Assets.auxImgs.balerina2} class="balerina-2" alt="balerina2" />
                            <img src={Assets.auxImgs.balerina3} class="balerina-3" alt="balerina3" />
                        </div>
                        </div>
                        <img src={Assets.auxImgs.balerina} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>

                    <div class="big-card-container bigcardinfo">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">Diadema con sistema de vibración ósea</span>
                        <h2 class="big-card-title">Se colocan y listo</h2>
                                <span class="big-card-description big-subtle">Ligero, práctico, se adaptan a cualquier cabeza y ofrecen
                                una sensación auditiva natural con un sistema discreto.
                                En las tres variantes de sistemas de vibración ósea tenemos
                                las siguientes características:<br/>
                                -Respuesta de frecuencia de 250-6000 Hz<br/>
                                -Para el procesamiento de las señales se utilizan 16 canales<br/>
                                -Se pueden programar dieciséis bandas de frecuencia</span>
                        <div class="big-card-read">
                           
                        </div>
                        </div>
                        <img src={Assets.auxImgs.diadema} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>

                    <div class="big-card-container bigcardinfo">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">balerinas con sistema de vibración ósea</span>
                        <h2 class="big-card-title">Apenas visible y con un potente rendimiento</h2>
                                <span class="big-card-description big-subtle">Cuando el oído interno está intacto y el oído externo y medio no permiten la transmisión del sonido, los sistemas de vibración ósea favorecen la conducción del sonido; transmiten el sonido mediante oscilaciones mecánicas a los huesos del cráneo y de ahí al oído interno.</span>
                        <div class="big-card-read">
                           
                        </div>
                        </div>
                        <img src={Assets.auxImgs.lentes} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>
            </div>
        )
    }
}

export default Cards