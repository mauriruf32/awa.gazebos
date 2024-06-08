import React from 'react';
import "./Announcement.css";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="announcement">
        <Marquee>
        <div className="announcement-text text1">
            <span>¿Queres ser revendedor?</span>
            <span>Contactate con nosotros al +54 343 5149599</span>
        </div>
        <br/>
        <div className="announcement-text text2">
            <span>Hacemos envios a todo el Pais.</span>
            <span>Descuentos pagando por efectivo/transferencia.</span>
        </div>
        </Marquee>
    </div>
  )
}

export default Announcement