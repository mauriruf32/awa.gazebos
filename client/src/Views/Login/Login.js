import React, { useState } from 'react';
import axios from 'axios';
import validation from './LoginValidations';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
  
    if (!validationErrors.email && !validationErrors.password) {
      // Asegúrate de que la función `login` recibe los datos correctos
      console.log('Intentando iniciar sesión con:', values);
       login(values);
    }
  };
  

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              value={values.email}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              onChange={handleInput}
              value={values.password}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success'>Log In</button>
          <p>You agree to our terms and policies</p>
          <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import validation from './LoginValidations';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
  
//   const [values, setValues] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});

//   const handleInput = (event) => {
//     setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validation(values);
//     setErrors(validationErrors);

//     // Verificar que no haya errores de validación
//     if (!validationErrors.email && !validationErrors.password) {
//       try {
//         // Enviar la solicitud GET con parámetros de consulta
//         const response = await axios.get('http://localhost:3001/login', {
//           params: {
//             email: values.email,
//             password: values.password
//           }
//         });

//         // Manejar la respuesta del backend
//         if (response.data.access) {
//           navigate('/profiles');
//         } else {
//           alert("Contraseña incorrecta");
//         }
//       } catch (err) {
//         console.error(err);
//         alert("Error al iniciar sesión");
//       }
//     }
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               placeholder='Enter Email'
//               name='email'
//               onChange={handleInput}
//               value={values.email}
//             />
//             {errors.email && <span>{errors.email}</span>}
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='password'
//               placeholder='Enter password'
//               name='password'
//               onChange={handleInput}
//               value={values.password}
//             />
//             {errors.password && <span>{errors.password}</span>}
//           </div>
//           <button type='submit' className='btn btn-success'>Log In</button>
//           <p>You agree to our terms and policies</p>
//           <button className='btn btn-default border'>Create Account</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import "./Login.css";

// const Login = (props) => {
//   const { login } = props;
//   const [ userData, setUserData ] = useState({
//     email: "",
//     password: "",
//   });

//   const [ errors, setErrors ] = useState({
//     email: "",
//     password: ""
//   });

//   const validate = (userData) => {
//     if (!userData.email) {
//       setErrors({...errors, email: "Email es requerido"});
//     }
//     else if (userData.email !== "ringo@gmail.com"){
//       setErrors({...errors, email: "USUARIO NO AUTORIZADO"});
//     }
//     else if (!userData.password) {
//       setErrors({...errors, password: "Password es requerido"});
//     }
//     else {
//       setErrors({...errors, email:"", password:""});
//     }
//   };

//   const changeHandler = (event) => {
//     event.preventDefault();
//     const property = event.target.name;
//     const value = event.target.value;

//     validate({...userData, [property]: value});
//     setUserData({...userData, [property]: value});
//   };

//   const handlerSubmit = (event) => {
//     event.preventDefault();
//     login(userData);
//     alert("Activity created successfully!!")
//   }


//   return (
//     <div className='login-container'>
//       <h1>Bienvenido</h1>
//       <form className='login-form' onSubmit={handlerSubmit}>
//         <div>
//         <label>Email:</label>
//         <input type='texto' value={userData.email} onChange={changeHandler} name="email" />
//         {errors.email && <span>{errors.email}</span>}
//         </div>
//         <div>
//         <label>Constraseña:</label>
//         <input type='texto' value={userData.password} onChange={changeHandler} name="password" />
//         {errors.password && <span>{errors.password}</span>}
//         </div>
//         <button type="submit">LogIn</button>
//       </form>
//     </div>
//   )
// }

// export default Login;