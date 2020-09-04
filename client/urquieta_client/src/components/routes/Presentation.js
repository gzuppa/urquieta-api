import React, { Component } from 'react'
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Grid } from 'semantic-ui-react'
import Assets from '../../assets/Assets'

class Presentation extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <AccessMenu />
            <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
            <img src={Assets.aboutImgs.background} alt="back" className="aboutus-background"/>
            <img src={Assets.aboutImgs.ear} alt="ear" className="aboutus-ear"/>
      </Grid.Column>
      <Grid.Column width={11}>
            <img src={Assets.layoutImgs.earbutton} alt="earbutton" className="aboutus-btn" />
            <span className="aboutus-btn-txt">¿Quienes somos?</span>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
          
      </Grid.Column>
      <Grid.Column>
          
      </Grid.Column>
      <Grid.Column>
          
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Presentation