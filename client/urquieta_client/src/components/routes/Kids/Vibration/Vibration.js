import React, { Component } from 'react'
import Header from './Header'
import FirstSect from './FirstSect'
import SecondSect from './SecondSect'

class Vibration extends Component {
    render(){
        return(
            <div>
               <Header />
               <FirstSect />
               <SecondSect />
            </div>
        )
    }
}

export default Vibration