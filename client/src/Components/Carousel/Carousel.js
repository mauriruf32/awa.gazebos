import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../Components/Card/logo_sin_fondo3.png";
import image2 from "../../utils/envios.jpg";
import image3 from "../../utils/enviossss.jpg";
import { Container } from "react-bootstrap";



import "./Carousel.css";

function CarouselHome() {
  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100 half-height-img fluid" src={image1} alt="img1" text="First slide"/>
          <Carousel.Caption>
            <h3>Envios a todo el Pais</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Carousel.Caption>
            
            <h3>Contacto</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img className="d-block w-100 half-height-img fluid" src={image2} alt="img2" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img className="d-block w-100 half-height-img fluid" src={image3} alt="img3" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
