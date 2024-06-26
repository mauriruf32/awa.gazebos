import React, { useState, useEffect } from "react";
import Card  from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import Swal from "sweetalert2";
import plusIcon from "../../utils/iconmonstr-plus-square-multiple-filled-240.png"
import "./Card.css";

function Product({ product }) {

  const { id, name, image, description, price, stock, color, size, material, category } = product;

  // const [cart, setCart] = useState(
  //   (typeof window !== "undefined" &&
  //     JSON.parse(localStorage.getItem("cart"))) ||
  //     []
  // );

  // const addToCart = async (userId, productId) => {
  //   try {
  //     const response = await axios.post(`${URL}addOneToCart`, {
  //       userId,
  //       productId,
  //     });

  //     const { message } = response.data;
  //     if (response.status === 201) {
  //       let cart2 = cart;

  //       setCart(cart2);

  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: "No permitido",
  //         text: `${message}`,
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "error",
  //       title: "Lo siento!",
  //       text: "Ha ocurrido un error: " + error.message,
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });
  //   }
  // };

  const handleDetailProductClick = () => {
    Swal.fire({
      title: `<strong>${name}</strong>`,
      html: `
        <div class="detail-card">
          <img class="detail-img" src="${image}" alt="${name}" />
          <div class="detail-info">
            <p><strong>Tamaño:</strong> ${size}</p>
            <p><strong>Material:</strong> ${material}</p>
            <p><strong>Categoria:</strong> ${category}</p>
            <p><strong>Precio:</strong> $ ${price}</p>
          </div>
        </div>`,
      // showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      // confirmButtonText: "Agregar al carrito",
      cancelButtonText: "+ Info",
      cancelButtonColor: "#F48422",
      confirmButtonColorHover: "#000",
      confirmButtonColor: "#F48422",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Redirect to the specified route when cancel button is pressed
        window.location.href = `products/${id}`;
      }
    });
  };

     
  // const handleAddToCartClick = () => {
  //   const productId = id;
  //   addToCart(productId);
  // };
  return (
    <Card className="card" style={{ width: '15rem', borderColor: "white", marginBottom: "50px", padding: "10px 10px 10px 10px", height:"15rem" }} >
      <Card.Img variant="top" src={image} alt={
        name} onClick={handleDetailProductClick} />
      <Card.Body>
        <Card.Title >{
        name}</Card.Title>
        <ListGroup.Item> $ {price}</ListGroup.Item>
        {/* <Card.Text>{description}</Card.Text> */}
      </Card.Body>
      {/* <ListGroup className="list-group-flush" style={{  borderColor: "orange" }}>
        <ListGroup.Item>Precio: ${price}</ListGroup.Item>
        <ListGroup.Item>Tamaño: {size}</ListGroup.Item>
        <ListGroup.Item>Color: {color}</ListGroup.Item> 
      </ListGroup>
      <Card.Body>*/}
      <button  onClick={handleDetailProductClick} >
      <img src={plusIcon} alt="plusIcon" className="w-50" />
      </button>
      {/*   <Card.Link  href="/products/:name">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

export default Product;