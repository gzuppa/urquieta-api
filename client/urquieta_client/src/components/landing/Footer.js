import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FormAndMap = () => (
    <Container className="footer-cont">
    <Grid columns="equal" >
    <Grid.Row>
        <Grid.Column>
            <span className="footer-pay">Aceptamos las siguientes formas de pago</span>
        </Grid.Column>
        <Grid.Column className="social-media">
            <img src={Assets.generalImgs.instagram} alt="instagram" className="footer-social"/>
            <img src={Assets.generalImgs.fb} alt="facebook" className="footer-social"/>
            <img src={Assets.generalImgs.twitter} alt="twitter" className="footer-social"/>
            <img src={Assets.generalImgs.whatsappwhite} alt="whatsapp" className="footer-social"/>
        </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
)

export default FormAndMap