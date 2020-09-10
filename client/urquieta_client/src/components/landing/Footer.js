import React from 'react'
import { Grid, Container, Image, List } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FormAndMap = () => (
    <Container className="footer-cont">
    <Grid columns="equal" >
    <Grid.Row>
        <Grid.Column>
            <span className="footer-pay">Aceptamos las siguientes formas de pago</span>
            <List horizontal relaxed animated className="footer-payform">
                <List.Item>
                <Image src={Assets.generalImgs.amex} alt="amex" className="footer-payform-icon payform-align"/>
                </List.Item>
                <List.Item>
                <Image src={Assets.generalImgs.dollar} alt="money" className="footer-payform-icon payform-align"/>
                </List.Item>
                <List.Item>
                <Image src={Assets.generalImgs.visa} alt="visa" className="footer-payform-icon payform-align"/>
                </List.Item>
                <List.Item>
                <Image src={Assets.generalImgs.mastercard} alt="mastercard" className="footer-payform-icon payform-align"/>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column className="social-media">
            <a href="https://www.instagram.com/auditivosurquieta/"><img src={Assets.generalImgs.instagram} alt="instagram" className="footer-social"/></a>
            <a href="https://www.facebook.com/AuditivosUrquieta/"><img src={Assets.generalImgs.fb} alt="facebook" className="footer-social"/></a>
            <a href="https://twitter.com/AuditivosUrqui"><img src={Assets.generalImgs.twitter} alt="twitter" className="footer-social"/></a>
            <img src={Assets.generalImgs.whatsappwhite} alt="whatsapp" className="footer-social"/>
        </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
)

export default FormAndMap