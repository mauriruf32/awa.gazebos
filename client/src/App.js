import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Register from "../src/Views/Register/Register";
import DetailProduct from "../src/Views/DetailProduct/DetailProduct";
import Login from "./Views/Login/Login";
import CreateProduct from "../src/Views/FormAdmin/CreateProduct";
import Imagenes from "../src/Views/FormAdmin/Images.js";
import ShowProducts from "./Views/FormAdmin/ShowProducts";
import EditProducts from "./Views/FormAdmin/EditProducts";
import Cart from "./Views/Cart/Cart";
import NavBar from '../src/Components/NavBar/NavBar';
import { useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import ShowUsers from "./Views/FormAdmin/ShowUsers.js";
import { Profiles } from "./Views/Profiles/Profiles.js";



function App() {
  const location = useLocation();

  return (
    <div>
          {location.pathname !== "/register" &&
         (
          <NavBar />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/images" element={<Imagenes />} />
          <Route path="/products/showproducts" element={<ShowProducts />} />
          <Route path="/edit/:id" element={<EditProducts />} />
          <Route path="/users/:id" element={<Profiles />} />
          <Route path="/users/showusers" element={<ShowUsers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
        </div>

  );
}

export default App;
