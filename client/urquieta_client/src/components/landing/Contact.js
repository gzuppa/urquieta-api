import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const Contact = () => (
    <Grid columns="equal">
    <Grid.Row>
        <Grid.Column>
            <Segment.Group compact>
             <Segment className="contact-segment-1">
                 <p className="text-segment-1">Atención telefónica</p>
             </Segment>
             <Segment>
                <Icon name="phone" /> 01800 28 68 471
             </Segment>
            </Segment.Group>
        </Grid.Column>
        <Grid.Column>
        
        </Grid.Column>
        <Grid.Column>
        
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    
    </Grid.Row>
    </Grid>
)

export default Contact