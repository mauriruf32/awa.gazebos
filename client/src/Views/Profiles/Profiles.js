// import React from 'react'
import React, { useState, useEffect } from "react";
// import  {getUserById}  from "../../redux/actions"; 
// import axios from "axios";
// const URL = `http://localhost:3001/users/`;


export const Profiles = ({ users }) => {
const { firstName, lastName, email, phoneNumber } = users;

//   useEffect(() =>{
//     getUserById();
// },[]);

// const getUserById = async (id) => {
//     const user = await axios.get(`${URL}${id}`);
//     setUser(user)
// };




  return (
    <div>
    
        <div>
          <div>
            <br />
            <br />
            <h1 >
              Hola {firstName}! Bienvenido a tu perfil
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
