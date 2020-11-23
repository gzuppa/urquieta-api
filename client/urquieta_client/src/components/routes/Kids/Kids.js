import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import Navbar from '../../common/Navbar'
import Header from './Header/Header'
import Questions from './Questions/Questions'

class Kids extends Component {
    render(){
        return(
            <div>
                <Navbar/>
            <Grid>
                <Grid.Row>
                    <Header />
                </Grid.Row>
                <Grid.Row className="questsect">
                    <Questions />
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Kids