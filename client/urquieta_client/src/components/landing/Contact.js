import React from 'react'
import { Grid, Header, Image, Button } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const Contact = () => (
    <Grid columns="equal">
    <Grid.Row columns={3} only="computer" className="contact-margin">
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={Assets.generalImgs.telephone} alt="phone"/>
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
                        <Image circular src={Assets.generalImgs.mail} className="icon-mail"/> Enviar Correo
                        <Header.Subheader className="contact-mail">
                        info@auditivosurquieta.com.mx
                        </Header.Subheader>
                    </Header>   
                </div>
            </div>
        </div>
        </div>
        </Grid.Column>
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face5">
                <div class="content">
                    <img src={Assets.generalImgs.clock} alt="clock"/>
                    <h3>Horarios de atención</h3>
                </div>
            </div>
            <div class="face face6">
            <div class="content">
            <Button.Group widths='3'>
                <Button className="venue">CDMX</Button>
                <Button className="venue">Cuernavaca</Button>
                <Button className="venue">Querétaro</Button>
            </Button.Group>
            <Header as='h3'>
                 Lunes a Viernes 09:00-18:00 hrs
            </Header> 
            <Header as='h3'>
                 Sábado 10:00-14:00 hrs
            </Header>   
            </div>  
            </div>
        </div>
        </div>
        </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} only="mobile">
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={Assets.generalImgs.telephone} alt="phone"/>
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
                        <Image circular src={Assets.generalImgs.mail} className="icon-mail"/> Enviar Correo
                        <Header.Subheader className="contact-mail">
                        info@auditivosurquieta.com.mx
                        </Header.Subheader>
                    </Header>   
                </div>
            </div>
        </div>
        </div>
        </Grid.Column>
        <Grid.Column>
        <div class="container">
        <div class="card">
            <div class="face face5">
                <div class="content">
                    <img src={Assets.generalImgs.clock} alt="clock"/>
                    <h3>Horarios de atención</h3>
                </div>
            </div>
            <div class="face face6">
            <div class="content">
            <Button.Group widths='3'>
                <Button className="venue">CDMX</Button>
                <Button className="venue">Cuernavaca</Button>
                <Button className="venue">Querétaro</Button>
            </Button.Group>
            <Header as='h3'>
                 Lunes a Viernes 09:00-18:00 hrs
            </Header> 
            <Header as='h3'>
                 Sábado 10:00-14:00 hrs
            </Header>   
            </div>  
            </div>
        </div>
        </div>
        </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Contact