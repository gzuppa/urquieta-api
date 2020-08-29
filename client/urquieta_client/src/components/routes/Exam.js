import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'

class Exam extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            <h1>Examen de audición</h1>
            </div>
        )
    }
}

export default Exam