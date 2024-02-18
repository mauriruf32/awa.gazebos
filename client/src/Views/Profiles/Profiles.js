// import React from 'react'
import React, { useState, useEffect } from "react";
// import  {getUserById}  from "../../redux/actions"; 
import axios from "axios";
import { useParams } from "react-router-dom";

// const URL = `http://localhost:3001/users/`;


export const Profiles = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);


  useEffect(() => {
    axios(`http://localhost:3001/users/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setUser(data);
        } else {
          window.alert("No hay usuario con ese ID");
        }
      }
    );
    return setUser({});
  }, []);



  return (
    <div>
    
        <div>
          <div>
            <br />
            <br />
            <h1 >
              Hola {user.firstName}! Bienvenido a tu perfil
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
                    <li >Nombre: {user.firstName}</li>
                    <li >Apellido: {user.lastName}</li>
                    <li >Email: {user.email}</li>
                    <li >Telefono: {user.phoneNumber}</li>
                  </ul>
                </div>
            
             
            </div>
          </div>
          <div></div>
        </div>

    </div>
  )
}
