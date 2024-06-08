import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../utils/1.png";
import image2 from "../../utils/2.png";
import image3 from "../../utils/3.png";
import { Container } from "react-bootstrap";



import "./Carousel.css";

function CarouselHome() {
  return (
    <Container  fluid className="p-0 ha">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100 fluid"  src={image1} alt="img1" text="First slide"/>
          <Carousel.Caption>
            <h3>Envios a todo el Pais</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100  fluid" src={image2} alt="img2" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
   
          <img className="d-block w-100  fluid" src={image3} alt="img3" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
