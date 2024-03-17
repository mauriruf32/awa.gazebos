import React from 'react';
import { Link } from 'react-router-dom';

import Git from "../../utils/iconmonstr-github-3-240.png";
import LinkedIn from "../../utils/iconmonstr-linkedin-3-48.png";
import Email from "../../utils/iconmonstr-email-11-240.png";
import Phone from "../../utils/iconmonstr-phone-8-64.png";
import Location from "../../utils/iconmonstr-location-1-32.png";

import "./Footer.css"

function Footer() {
  return (
    <footer class=" text-center text-white" style={{ backgroundColor: '#152231' }}>
    <div class="container p-4 pb-0" style={{ backgroundColor: '#152231' }}>
      <section class="mb-4" style={{ backgroundColor: '#152231' }}>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button" >
          <img src={Phone} alt="logoPhone" /><li className='text-white'  >+543434651573</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://github.com/mauriruf32' role="button">
          <img src={Git} alt="logoGit" /><li className='text-white' >/mauriruf32 </li>
        </a>
        <a class="btn btn-line-light btn-lg m-1"  href="contact" role="button">     
          <Link to="contact" className='text-white' smooth={true} duration={500}>
          <img src={Email} alt="logoGmail" /> <li className='text-white' >Email Me</li></Link>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://www.linkedin.com/in/mauricio-fabro/' role="button" >
          <img src={LinkedIn} alt="logoIn" /> <li className='text-white' >/mauricio-fabro</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button">
          <img src={Location} alt="logoLocation" /><li className='text-white' >Paraná, Argentina</li>
        </a>
          
      </section>
    </div>
  
    <div class="text-center p-3" style={{ backgroundColor: '#152231' }}>
      © 2024 Copyright:
      <a class="text-white p-3" href="https://mauriciofabro.vercel.app/">Mauri's Web</a>
    </div>
  </footer>
  )
}

export default Footer;