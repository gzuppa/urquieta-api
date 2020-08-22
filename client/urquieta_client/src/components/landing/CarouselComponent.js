import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Assets from '../../assets/Assets'
import './landing.css'

class CarouselComponent extends Component{
    render(){
        return(
            <Carousel keyboard='true' touch='true' slide='false'>
              <Carousel.Item>
                 <img
                  className="d-block w-100"
                  src={Assets.carouselImgs.image1}
                  alt="First slide"
                />
              <Carousel.Caption>
                <h3>Descripción primer imagen</h3>
                <p>Descripción</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Assets.carouselImgs.image2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Descripción segunda imagen</h3>
                  <p>Descripción</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Assets.carouselImgs.image3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Descripción tercera imagen</h3>
                  <p>Descripción.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselComponent