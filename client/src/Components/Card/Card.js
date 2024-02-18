import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import Swal from "sweetalert2";

function Product({ product }) {

  const { id, name, image, description, price, stock, color, size, material, category } = product;

  const [cart, setCart] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cart"))) ||
      []
  );

  const addToCart = async (userId, productId) => {
    try {
      const response = await axios.post(`${URL}addOneToCart`, {
        userId,
        productId,
      });

      const { message } = response.data;
      if (response.status === 201) {
        let cart2 = cart;

        setCart(cart2);

        Swal.fire({
          position: "center",
          icon: "error",
          title: "No permitido",
          text: `${message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Lo siento!",
        text: "Ha ocurrido un error: " + error.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleDetailProductClick = () => {
    Swal.fire({
      title: `<strong>${name}</strong>`,
      html: `
        <div class="detail-card">
          <img class="detail-img" src="${image}" alt="${name}" />
          <div class="detail-info">
            <p><strong>Descripción:</strong> ${description}</p>
            <p><strong>Tamaño:</strong> ${size}</p>
            <p><strong>Material:</strong> ${material}</p>
            <p><strong>Categoria:</strong> ${category}</p>
            <p><strong>Precio:</strong> $${price}</p>
          </div>
        </div>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Agregar al carrito",
      cancelButtonText: "+ Info",
      confirmButtonColor: "#202020",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Redirect to the specified route when cancel button is pressed
        window.location.href = `products/${id}`;
      }
    });
  };

     
  const handleAddToCartClick = () => {
    const productId = id;
    addToCart(productId);
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={
        name} onClick={handleDetailProductClick} />
      <Card.Body>
        <Card.Title >{
        name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Stock: {stock}</ListGroup.Item>
        <ListGroup.Item>Size: {size}</ListGroup.Item>
        <ListGroup.Item>Color: {color}</ListGroup.Item>
        <ListGroup.Item>Material: {material}</ListGroup.Item>
        <ListGroup.Item>Category: {category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <button className="cart-btn" onClick={handleAddToCartClick}>
            <i className="fa fa-plus"></i>
            <strong>Add to Cart</strong>
          </button>
        <Card.Link  href="/products/:name">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;