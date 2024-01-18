import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Swal from "sweetalert2";

function Product({ product }) {

  const { name, image, description, price, stock, size, material, category } = product;

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
        window.location.href = `products/${name}`;
      }
    });
  };

     
  // const handleAddToCartClick = () => {
  //   const productId = id;
  //   addToCart(productId);
  // };
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
        <ListGroup.Item>Material: {material}</ListGroup.Item>
        <ListGroup.Item>Category: {category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link  href="/producto/:name">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;