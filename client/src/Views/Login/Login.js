import React, { useState } from 'react';
import "./Login.css";

const Login = (props) => {
  const { login } = props;
  const [ userData, setUserData ] = useState({
    email: "",
    password: "",
  });

  const [ errors, setErrors ] = useState({
    email: "",
    password: ""
  });

  const validate = (userData) => {
    if (!userData.email) {
      setErrors({...errors, email: "Email es requerido"});
    }
    else if (userData.email !== "ringo@gmail.com"){
      setErrors({...errors, email: "USUARIO NO AUTORIZADO"});
    }
    else if (!userData.password) {
      setErrors({...errors, password: "Password es requerido"});
    }
    else {
      setErrors({...errors, email:"", password:""});
    }
  };

  const changeHandler = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    validate({...userData, [property]: value});
    setUserData({...userData, [property]: value});
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    login(userData);
    alert("Activity created successfully!!")
  }


  return (
    <div className='login-container'>
      <h1>Bienvenido</h1>
      <form className='login-form' onSubmit={handlerSubmit}>
        <div>
        <label>Email:</label>
        <input type='texto' value={userData.email} onChange={changeHandler} name="email" />
        {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
        <label>Constraseña:</label>
        <input type='texto' value={userData.password} onChange={changeHandler} name="password" />
        {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}

export default Login;