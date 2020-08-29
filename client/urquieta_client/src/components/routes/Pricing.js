import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'

class Pricing extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            <h1>Pricing</h1>
            </div>
        )
    }
}

export default Pricing