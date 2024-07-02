import React from 'react';
import check from "../../utils/iconmonstr-check-mark-13-32.png";
import aboutImagen from "../../utils/ABOUTImage.png"
import "./About.css"

function About() {
  return (
    <div className='container-about'>
      <div>NOSOTROS</div>
      <div className='arriba-section'>
        SOMOS AWA GAZEBOS UV, UN EQUIPO DE EMPRENDEDORES DEDICADOS A LA FABRICACION DE GAZEBOS CON PROTECCION UV.
      </div>
      <div className='columna1'>
      <img src={aboutImagen} alt='aboutImagen' className='w-30 h-30'/>

      <div className='nosotros-section'>

      <div>Nuestros gazebos estan fabricados con tela de alta tecnologia, con proteccion de rayos ultravioletas UV, elastica y de primera calidad. Forma configurable segun tus necesidades. GRacias a sus parantes regulables y a su sistema de anclaje podes darle el angulo de sombra que desees</div>
      </div>
      </div>


      <div className='columna2'>
      <div className='elementos-section'>
      <div>Bolso de Transporte</div>
      <div>Tela Elastica</div>
      <div>4 Parantes Regulables</div>
      <div>4 Estacas Tirabuzon</div>
      <div>4 Bolsas de Anclaje para Arena</div>
      <div>Sogas y Mosquetones</div>
      </div>

      
      <div className='check-section'>
      <div> <img src={check} alt='checkImg'/> Facil Armado</div>
      <div> <img src={check} alt='checkImg'/> 100% Transportable</div>
      <div> <img src={check} alt='checkImg'/> Innovacion y diseño</div>
      </div>
      </div>

      </div>

    
  )
}

export default About