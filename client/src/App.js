import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Register from "../src/Views/Register/Register";
import DetailProduct from "../src/Views/DetailProduct/DetailProduct";
import Login from "./Views/Login/Login";
import CreateProduct from "../src/Views/FormAdmin/CreateProduct"
import Profile  from "./Views/Profiles/Profile.js";
import ShowProducts from "./Views/FormAdmin/ShowProducts";
import EditProducts from "./Views/FormAdmin/EditProducts";
import Cart from "./Views/Cart/Cart";
import NavBar from '../src/Components/NavBar/NavBar';
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();

  return (
    <div>
          {location.pathname !== "/register" &&
        location.pathname !== "/products/create" &&
         (
          <NavBar />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/showproducts" element={<ShowProducts />} />
          <Route path="/edit/:id" element={<EditProducts />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>

  );
}

export default App;
