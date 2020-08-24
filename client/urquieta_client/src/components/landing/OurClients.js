import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {Card, Image, Grid} from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import {v4 as uuid} from 'uuid'
import { config } from "react-spring";

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
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={Assets.generalImgs.avatar1}
        />
        <Card.Header>Logan "Wolverine"</Card.Header>
        <Card.Meta>Immortal Mutant</Card.Meta>
        <Card.Description>
          This is a grateful <strong>experience!</strong>.
          <br></br>
          DUMMY TEXT
        </Card.Description>
      </Card.Content>
      </Card>
    },
    {
      key: uuid(),
      content: 
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={Assets.generalImgs.avatar2}
        />
        <Card.Header>Peter "Spiderman" Parker</Card.Header>
        <Card.Meta>Immortal Mutant</Card.Meta>
        <Card.Description>
          This is a grateful <strong>experience!</strong>.
          <br></br>
          DUMMY TEXT
        </Card.Description>
      </Card.Content>
      </Card>
    },
    {
      key: uuid(),
      content: 
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={Assets.generalImgs.avatar3}
        />
        <Card.Header>Bruce "Hulk" Banner</Card.Header>
        <Card.Meta>Immortal Mutant</Card.Meta>
        <Card.Description>
          This is a grateful <strong>experience!</strong>.
          <br></br>
          DUMMY TEXT
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
        <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
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
    );
  }
}
