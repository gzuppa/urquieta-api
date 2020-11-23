import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Cards extends Component {
    render(){
        return(
            <div> 
                    <div class="kids-box">
                    <div class="kids-card">
                        <div class="kids-details">
                            <h2>Diadema</h2>
                        </div>
                        <div class="kids-imgBx">
                            <img src={Assets.auxImgs.diadema} alt="images"/>
                        </div>
                    </div>
                    
                    <div class="kids-card">
                        <div class="kids-details">
                            <h2>Balerina</h2>
                        </div>
                        <div class="kids-imgBx">
                            <img src={Assets.auxImgs.balerina} alt="images"/>
                        </div>
                    </div>

                    <div class="kids-card">
                        <div class="kids-details">
                            <h2>Lentes</h2>
                        </div>
                        <div class="kids-imgBx">
                            <img src={Assets.auxImgs.lentes} alt="images"/>
                        </div>
                    </div>

                    <div class="kids-card">
                        <div class="kids-details">
                            <h2>Auxiliar auditivo</h2>
                        </div>
                        <div class="kids-imgBx">
                            <img src={Assets.auxImgs.lentes} alt="images"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards