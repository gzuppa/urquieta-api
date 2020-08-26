import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
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
                    <p>01 800 2868 471</p>
                </div>
            </div>
        </div>
        </div>
        </Grid.Column>
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face3">
                <div class="content">
                    <h3>Contáctanos</h3>
                    <h5>Estamos a tus órdenes</h5>
                </div>
            </div>
            <div class="face face4">
                <div class="content">
                    <Header as='h3'>
                        <Image circular src={Assets.generalImgs.whatsapp} /> Enviar Whatsapp
                        <Header.Subheader className="contact-whatsapp">
                        Tel. 55 31993483
                        </Header.Subheader>
                    </Header>      
                    <Header as='h3'>
                        <Image circular src={Assets.generalImgs.mail} /> Enviar Correo
                        <Header.Subheader>
                        info@auditivosurquieta.com.mx
                        </Header.Subheader>
                    </Header>   
                </div>
            </div>
        </div>
        </div>
        </Grid.Column>
        <Grid.Column>
        
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    
    </Grid.Row>
    </Grid>
)

export default Contact