import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {Card, Image, Grid} from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import {v4 as uuid} from 'uuid'
import { config } from "react-spring";
import './landing.css'

export default class OurClients extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuid(),
      content: 
      <Card className="client-card">
      <Card.Content>
        <Image
          floated='right'
          size="small"
          src={Assets.generalImgs.avatar1}
        />
        <Card.Header className="client-card-header">Guadalupe Guadarrama</Card.Header>
        <Card.Meta className="client-card-subtitle">Cliente</Card.Meta>
        <Card.Description className="client-card-description">
          Mi agradecimiento por su <strong>paciencia y tolerancia</strong> y el buen trato hacia mi paciente.
        </Card.Description>
      </Card.Content>
      </Card>
    },
    {
      key: uuid(),
      content: 
      <Card className="client-card">
      <Card.Content>
        <Image
          floated='right'
          size='small'
          src={Assets.generalImgs.avatar2}
        />
        <Card.Header className="client-card-header">José Luis Gil Hernández</Card.Header>
        <Card.Meta className="client-card-subtitle">Paciente</Card.Meta>
        <Card.Description className="client-card-description">
          Escucho de maravilla. <strong>Los recomiendo ampliamente</strong>.
        </Card.Description>
      </Card.Content>
      </Card>
    },
    {
      key: uuid(),
      content: 
      <Card className="client-card">
      <Card.Content>
        <Image
          floated='right'
          size='small'
          src={Assets.generalImgs.avatar3}
        />
        <Card.Header className="client-card-header">Ma. Dolores Martínez</Card.Header>
        <Card.Meta className="client-card-subtitle">Cliente</Card.Meta>
        <Card.Description className="client-card-description">
          Los aparatos son de excelente calidad- <strong>Excelente servicio, </strong>muy atentos y amables.
        </Card.Description>
      </Card.Content>
      </Card>
    },
    {
        key: uuid(),
        content: 
        <Card className="client-card">
        <Card.Content>
          <Image
            floated='right'
            size='small'
            src={Assets.generalImgs.avatar4}
          />
          <Card.Header className="client-card-header">Felipe de J. Carrillo Pinzón</Card.Header>
          <Card.Meta className="client-card-subtitle">Cliente</Card.Meta>
          <Card.Description className="client-card-description">
            Felicidades por su profesionalismo  y servicio, <strong>tienen una atención esmerada</strong>.
          </Card.Description>
        </Card.Content>
        </Card>
      }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
        <Grid>
    <Grid.Row>
      <Grid.Column>
        <p className="advisory">Nuestros clientes...</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <div style={{ width: "100%", height: "300px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          </div>
        </div>
      </Grid.Column>
    </Grid.Row>
        </Grid>
    );
  }
}
