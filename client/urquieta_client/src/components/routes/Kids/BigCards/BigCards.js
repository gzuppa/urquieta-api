import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import Title from './Title'
import BigInfoCards from './BigInfoCards'

class BigCards extends Component {
    render(){
        return(
            <div>
                <Title />
                <Grid.Row className="biginfosect">
                <BigInfoCards />
                </Grid.Row>
            </div>
        )
    }
}

export default BigCards