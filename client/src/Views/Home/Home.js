import React from 'react';
import { getProducts } from '../../redux/actions';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../../Components/NavBar/NavBar';
import Card from "../../Components/Card/Card"
// import logo from "../../Components/Card/logo.jpeg";
// import gazebo1 from "../../Components/Card/gazebo1.webp";

const Home = () => {
  // const dummyData = [
  //   {
  //     name: "Artículo 1",
  //     image: logo,
  //     description: "Descripción del artículo 1.",
  //     price: 19.99,
  //     stock: 50,
  //     size: "M",
  //     material: "Algodón",
  //     category: "Ropa",
  //   },
  //   {
  //     name: "Artículo 2",
  //     image: gazebo1,
  //     description: "Descripción del artículo 2.",
  //     price: 29.99,
  //     stock: 30,
  //     size: "L",
  //     material: "Cuero",
  //     category: "Calzado",
  //   },
  //   {
  //     name: "Artículo 3",
  //     image: "imagen_3.jpg",
  //     description: "Descripción del artículo 3.",
  //     price: 39.99,
  //     stock: 20,
  //     size: "S",
  //     material: "Plástico",
  //     category: "Accesorios",
  //   },
  //   {
  //     name: "Artículo 4",
  //     image: "imagen_4.jpg",
  //     description: "Descripción del artículo 4.",
  //     price: 49.99,
  //     stock: 10,
  //     size: "XL",
  //     material: "Metal",
  //     category: "Electrónicos",
  //   },
  //   {
  //     name: "Artículo 5",
  //     image: "imagen_5.jpg",
  //     description: "Descripción del artículo 5.",
  //     price: 59.99,
  //     stock: 15,
  //     size: "M",
  //     material: "Lana",
  //     category: "Ropa",
  //   },
  // ];
  
  const dispatch = useDispatch();
  // const [order, setOrder] = useState(false);
  const allProducts =  useSelector((state) => state.allProducts);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
      <NavBar />

      Home
      {/* <Card {...allProducts} /> */}
      {allProducts.map((product) => (
      <Card key={product.id} product={product} />
      ))}
      </div>
  )
}

export default Home;