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
    config: config.gentle
  };

  slides = [
    {
      key: uuid(),
      content: 
      <div class="testimonial">
        <div class="testimonial-body">
            <p>Mi reconocimiento por su <strong>paciencia</strong> y el buen trato humano hacia mi paciente.</p>
            <i class="fas fa-quote-right"></i>
        </div>
        <div class="testimonial-footer">
            <img src={Assets.generalImgs.avatar1} alt="user" />
            <h3>Guadalupe Guadarrama</h3>
            <h4>Cliente</h4>
        </div>
    </div>
    },
    {
      key: uuid(),
      content: 
      <div class="testimonial">
      <div class="testimonial-body">
          <p>Escucho de maravilla. Los recomendaría ampliamente.</p>
          <i class="fas fa-quote-right"></i>
      </div>
      <div class="testimonial-footer">
          <img src={Assets.generalImgs.avatar2} alt="user" />
          <h3>José Luis Gil Hernández</h3>
          <h4>Paciente</h4>
      </div>
  </div>
    },
    {
      key: uuid(),
      content: 
      <div class="testimonial">
      <div class="testimonial-body">
          <p>Los aparatos son de excelente calidad. Excelente servicio, muy atentos y amables.</p>
          <i class="fas fa-quote-right"></i>
      </div>
      <div class="testimonial-footer">
          <img src={Assets.generalImgs.avatar3} alt="user" />
          <h3>María Dolores Martinez</h3>
          <h4>Cliente</h4>
      </div>
  </div>
    },
    {
        key: uuid(),
        content: 
        <div class="testimonial">
      <div class="testimonial-body">
          <p>Felicidades por su profesionalismo y servicio, tienen una atención esmerada.</p>
          <i class="fas fa-quote-right"></i>
      </div>
      <div class="testimonial-footer">
          <img src={Assets.generalImgs.avatar4} alt="user" />
          <h3>Felipe de J. Carrillo Pinzón</h3>
          <h4>Cliente</h4>
      </div>
  </div>
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
        <p className="advisory adv-414">Nuestros clientes...</p>
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
