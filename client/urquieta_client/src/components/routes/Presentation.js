import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'

class Presentation extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            <h1>Quienes somos</h1>
            </div>
        )
    }
}

export default Presentation