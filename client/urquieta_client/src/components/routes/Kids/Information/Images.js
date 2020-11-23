import React, { Component } from 'react'
import Assets from '../../../../assets/Assets'

class Images extends Component {
    render(){
        return(
            <div>
               <img src={Assets.kidsImgs.diadema} className="kids-diadema" alt="diadema" />
               <img src={Assets.kidsImgs.table} className="kids-table" alt="table" />
            </div>
        )
    }
}

export default Images