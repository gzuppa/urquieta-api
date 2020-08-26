import React from 'react'
import { Grid } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const description = [
    '01 800 28 68 471'
  ].join(' ')

const Contact = () => (
    <Grid columns="equal">
    <Grid.Row>
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={Assets.generalImgs.telephone} />
                    <h3>Atención telefónica</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>01800 2868 471</p>
                        <a href="#"></a>
                </div>
            </div>
        </div>
        </div>
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