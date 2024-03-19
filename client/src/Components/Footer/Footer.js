import React from 'react';

import Git from "../../utils/iconmonstr-github-3-240.png";
import LinkedIn from "../../utils/iconmonstr-instagram-13-32.png";
import Email from "../../utils/iconmonstr-email-11-240.png";
import Phone from "../../utils/iconmonstr-whatsapp-4-32.png";
import Location from "../../utils/iconmonstr-location-1-32.png";

import "./Footer.css"

function Footer() {
  return (
    <footer class=" text-center text-white" style={{ backgroundColor: 'black' }}>
    <div class="container p-4 pb-0" style={{ backgroundColor: 'black' }}>
      <section class="mb-4" style={{ backgroundColor: 'black' }}>
      <a href="https://wa.me/543435149599" className="btn btn-line-light btn-lg m-1" role="button">
                <img src={Phone} alt="logoPhone" />
                <li className='text-white'>+54 343 514-9599</li>
            </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://github.com/mauriruf32' role="button">
          <img src={Git} alt="logoGit" /><li className='text-white' >/mauriruf32 </li>
        </a>
        <a class="btn btn-line-light btn-lg m-1"  href="mailto:gazebosawa@gmail.com" role="button">     
          <img src={Email} alt="logoGmail" /> <li className='text-white' >gazebosawa@gmail.com</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://www.instagram.com/awa.gazebos/' role="button" >
          <img src={LinkedIn} alt="logoIn" /> <li className='text-white' >/awa.gazebos</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button">
          <img src={Location} alt="logoLocation" /><li className='text-white' >Paraná, Argentina</li>
        </a>
          
      </section>
    </div>
  
    <div class="text-center p-3" style={{ backgroundColor: 'black' }}>
      © 2024 Copyright:
      <a class="text-white p-3" href="https://mauriciofabro.vercel.app/">Mauri's Web</a>
    </div>
  </footer>
  )
}

export default Footer;
