import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { URL } from "../../config.js";
import './Register.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    password: "",
    roll: "Client",
  };
  
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Nombre es requerido"),
    lastName: Yup.string().required("Apellido es requerido"),
    birthDate: Yup.string().required("Fecha de Nacimiento es requerida"),
    phoneNumber: Yup.string().required("Número de Teléfono es requerido"),
    email: Yup.string().email("Email inválido").required("Email es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Contraseña es requerida"),
  });



  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`http://localhost:3001/users`, values);

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        createCart(response.data.ID);
      } else {
        Swal.fire({
          icon: "error",
          title: "Hubo un error en el registro",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setSubmitting(false);
  };


  const createCart = async (userId) => {
    try {
      const { data } = await axios.post(
        `${URL}shoppingCart`,
        {
          userId,
        }
      );
      // console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div  >
      <div > 
            <div className="register-container">
              <span>
                <Link to="/"> 
                </Link>
              </span>
            <div className="row g-2">
            <br /><br />
              <h2> Registrate</h2>
              <br />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="form-row md-8">
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="form-control"
                          required
                        />
                        <label htmlFor="firstName" className="form-label">
                          Nombre
                        </label>
                      </div>
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="form-control"
                          required
                        />
                        <label htmlFor="lastName" className="form-label">
                          Apellido
                        </label>
                      </div>
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          className="form-control"
                          required
                        />
                        <label htmlFor="birthDate" className="form-label">
                          Fecha de Nacimiento
                        </label>
                      </div>
                      <ErrorMessage
                        name="birthDate"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="form-control"
                          required
                        />
                        <label htmlFor="phoneNumber" className="form-label">
                          Número de Teléfono
                        </label>
                      </div>
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="form-floating">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">
                    REGISTRARSE
                  </button>
                  <br />
                  <br />
                  <div className="form-group">
                  <h4>
                    ¿Ya tienes una cuenta?
                    <span>
                      <Link to="/Login">
                        Iniciar sesión
                      </Link>
                    </span>
                  </h4>
                </div>
                </Form>
              </Formik>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
  
