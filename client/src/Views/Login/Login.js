import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo inválido")
        .required("Espacio obligatorio"),
      password: Yup.string()
        .min(6, "Debe tener mínimo 6 caracteres")
        .required("Espacio obligatorio"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${URL}login`, values);

        if (response.status === 200) {
          const responseData = response.data;
          const token = responseData.token;

          if (!token) {
            Swal.fire({
              title: "Inicio de sesión fallido",
              text: "El token no está presente en la respuesta del servidor",
              icon: "error",
              confirmButtonText: "OK",
            });
          } else {
            localStorage.setItem("token", token);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Iniciando sesión",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } else {
          Swal.fire({
            title: "Inicio de sesión fallido",
            text: "Error en la respuesta del servidor",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        window.location.href = "/Profile";
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);

        Swal.fire({
          title: "Inicio de sesión fallido",
          text: "Se produjo un error durante el inicio de sesión",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

  return (
    <div className="container-lg">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col w-50 h-50 mt-4 rounded-3">
        </div>

        <div className="d-flex justify-content-center align-items-center w-50 ps-3 py-4">
          <form
            className="text-start w-75 ms-4 ps-4 needs-validation"
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Link to="/">
            </Link>

            <h2 className="fw-bold text-center pt-1 mb-2">Bienvenido</h2>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Example@example.com"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger m-1">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password..."
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger m-1">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="mb-4 form-check">
              <input
                type="checkbox"
                name="connected"
                className="form-check-input"
              />
              <label htmlFor="connected" className="form-check-label">
                Mantenerme conectado
              </label>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>

            <div className="my-3">
              <span>
                ¿No tienes Cuenta? <Link to="/Register">Regístrate</Link>
              </span>

              <br />
              <span className="pe-auto" aria-disabled="true">
                <Link>Recuperar Contraseña</Link>
              </span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
