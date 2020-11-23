import React, { Component } from 'react'
import Header from './Header'
import FirstSect from './FirstSect'
import SecondSect from './SecondSect'
import ThirdSect from './ThirdSect'

class Vibration extends Component {
    render(){
        return(
            <div>
               <Header />
               <FirstSect />
               <SecondSect />
               <ThirdSect />
            </div>
        )
    }
}

export default Vibration