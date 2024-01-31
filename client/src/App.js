import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Register from "../src/Views/Register/Register";
import DetailProduct from "../src/Views/DetailProduct/DetailProduct";
import Login from "./Views/Login/Login";
import CreateProduct from "../src/Views/FormAdmin/CreateProduct"
import { Profiles } from "./Views/Profiles/Profiles";
import ShowProducts from "./Views/FormAdmin/ShowProducts";
import EditProduct from "./Views/FormAdmin/EditProducts";

function App() {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:name" element={<DetailProduct />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/showproducts" element={<ShowProducts />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/login" element={<Login />} />
        </Routes>

  );
}

export default App;
