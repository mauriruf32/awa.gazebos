import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Register from "../src/Views/Register/Register";
import DetailProduct from "../src/Views/DetailProduct/DetailProduct";
import Login from "./Views/Login/Login";
import About from "./Views/About/About.js";
import CreateProduct from "../src/Views/FormAdmin/CreateProduct";
import Imagenes from "../src/Views/FormAdmin/Images.js";
import ShowProducts from "./Views/FormAdmin/ShowProducts";
import EditProducts from "./Views/FormAdmin/EditProducts";
import EditUsers from "./Views/FormAdmin/EditUsers.js";
import Cart from "./Views/Cart/Cart";
import NavBar from '../src/Components/NavBar/NavBar';
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import ShowUsers from "./Views/FormAdmin/ShowUsers.js";
import Profile from "./Views/Profiles/Profile.js";
import { useSelector } from "react-redux";
import { useState } from 'react';
import Announcement from "./Components/NavBar/Announcement.jsx";
import  ProtectedRoute  from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import axios from 'axios';

function App() {
  const userData = useSelector((state) => state.userData);
  const location = useLocation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [user, setUser] = useState(null);
 
  const URL = process.env.URL || 'https://awa-gazebos.vercel.app';
// const URL = process.env.URL || 'http://localhost:3001';

  const logout = () => setUser(null);

  async function login({email, password}) {
    try {
      const response = await axios.get(`${URL}/login`, {
        params: {
          email: email,
          password: password
        }
      });
  
      const user = response; // Ajusta según cómo se estructura la respuesta del servidor
  
      if (user) {
        setUser(user);
        navigate('/profiles');
      } else {
        alert("Contraseña incorrecta");
      }
    } catch (error) {
      console.error('Error de login:', error.response ? error.response.data : error.message);
      alert("Error al iniciar sesión");
    }
  }
  

  return (
    <div>
      <Announcement />
      <NavBar />
      {user ? (
        <button onClick={logout}>LogOut</button>
      ) : (
        <Routes >
          <Route path="/login" element={<Login login={login} />} />
          {/* <Route path="/profiles" element={<Profile />} /> */}
        </Routes>
      )}
      <Routes>
        <Route path="/" element={<Home   />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/images" element={<Imagenes />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

        <Route element={<ProtectedRoute isAllowed={!!user } />}>
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/showproducts" element={<ShowProducts />} />
          <Route path="/edit/:id" element={<EditProducts />} />
          <Route path="/edit/:id" element={<EditUsers />} />
          <Route path="/users/showusers" element={<ShowUsers />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

