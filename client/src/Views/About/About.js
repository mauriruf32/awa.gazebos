import React from 'react';
import check from "../../utils/iconmonstr-check-mark-13-32.png";
import aboutImagen from "../../utils/ABOUTImage.png";
import "./About.css";

function About() {
  return (
    <div className='container-about'>
      <div className='titulo'>NOSOTROS</div>
      <div className='arriba-section'>
        SOMOS AWA GAZEBOS UV, UN EQUIPO DE EMPRENDEDORES DEDICADOS A LA FABRICACION DE GAZEBOS CON PROTECCION UV.
      </div>
      <div className='columna1'>
        <img src={aboutImagen} alt='aboutImagen' />
        <div className='nosotros-section'>
          Nuestros gazebos están fabricados con tela de alta tecnología, con protección UV, elástica y de primera calidad. Forma configurable según tus necesidades. Gracias a sus parantes regulables y a su sistema de anclaje puedes darle el ángulo de sombra que desees.
        </div>
      </div>
      <div className='columna2'>
        <div className='elementos-section'>
          <div>Bolso de Transporte</div>
          <div>Tela Elástica</div>
          <div>4 Parantes Regulables</div>
          <div>4 Estacas Tirabuzón</div>
          <div>4 Bolsas de Anclaje para Arena</div>
          <div>Sogas y Mosquetones</div>
        </div>
        <div className='check-section'>
          <div><img src={check} alt='checkImg'/> Fácil Armado</div>
          <div><img src={check} alt='checkImg'/> 100% Transportable</div>
          <div><img src={check} alt='checkImg'/> Innovación y diseño</div>
        </div>
      </div>
    </div>
  );
}

export default About;
