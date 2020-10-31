import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import { Grid } from 'semantic-ui-react'
import Assets from '../../assets/Assets'

class Pricing extends Component {
    render(){
        return(
            <div>
            <Navbar />

            <Grid.Row>
                <img src={Assets.pricingImgs.topBackground} alt="top-back" className="pricing-top-back" />
            </Grid.Row>
            </div>
        )
    }
}

export default Pricing