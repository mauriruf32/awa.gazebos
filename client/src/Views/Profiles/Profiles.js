// import React from 'react'
import React, { useState, useEffect } from "react";
// import styles from "./profile.module.css";
import axios from "axios";

export const Profiles = ({ userData }) => {
  const { firstName, lastName, email, phoneNumber} = userData;



  return (
    <div>
    
        <div>
          <div>
            <br />
            <br />
            <h1 >
              Hola {userData.firstName}! Bienvenido a tu perfil
            </h1>
          </div>
          <div >
            <button >
              Informacion del perfil
            </button>
            <button  >
              Mostrar Compras
            </button>
            <div>
                <div>
                  <ul >
                    <li >Nombre: {firstName}</li>
                    <li >Apellido: {lastName}</li>
                    <li >Email: {email}</li>
                    <li >Telefono: {phoneNumber}</li>
                  </ul>
                </div>
            
             
            </div>
          </div>
          <div></div>
        </div>

    </div>
  )
}
