import React from 'react';

import LinkedIn from "../../utils/iconmonstr-instagram-11-240.png";
import Email from "../../utils/iconmonstr-email-4-240.png";
import Phone from "../../utils/iconmonstr-whatsapp-1-240.png";
import Location from "../../utils/iconmonstr-location-2-240.png";

import "./Footer.css"

function Footer() {
  return (
    <footer class=" text-center text-white" style={{ backgroundColor: 'black' }}>
    <div class="container p-1 pb-0" style={{ backgroundColor: 'black' }}>
      <section class="mb-2" style={{ backgroundColor: 'black' }}>
      <a href="https://wa.me/543435149599" className="btn btn-line-light btn-lg m-1" role="button">
                <img src={Phone} alt="logoPhone" className="w-50" />
                
            </a>
        <a class="btn btn-line-light btn-lg m-1"  href="mailto:gazebosawa@gmail.com" role="button">     
          <img src={Email} alt="logoGmail" className="w-50" /> 
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://www.instagram.com/awa.gazebos/' role="button" >
          <img src={LinkedIn} alt="logoIn" className="w-50" />
        </a>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button">
          <img src={Location} alt="logoLocation" className="w-50" />
        </a>
          
      </section>
    </div>
  
    <div class="text-center p-1" style={{ backgroundColor: 'black' }}>
      © 2024 Copyright:
      <a class="text-white p-1" href="https://mauriciofabro.vercel.app/">MauriFabro</a>
    </div>
  </footer>
  )
}

export default Footer;
