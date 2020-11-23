import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import Navbar from '../../common/Navbar'
import Header from './Header/Header'
import Questions from './Questions/Questions'
import Background from './Background/Background'
import Cards from './Cards/Cards'
import Assets from '../../../assets/Assets'

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
                <Grid.Row className="backsect">
                    <img src={Assets.kidsImgs.background} className="kids-back-girl" alt="kidsback" /> 
                    <Background />
                </Grid.Row>
                <Grid.Row className="cardkidsect">
                    <Cards />
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Kids