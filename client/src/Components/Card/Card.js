import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from "sweetalert2";
import "./Card.css";

function Product({ product }) {
  const { id, name, image, price,  size, material, category } = product;

  function numberWithCommas(price) {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

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
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "+ Info",
      cancelButtonColor: "#F48422",
      confirmButtonColor: "#F48422",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle confirmed action if needed
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Redirect to the specified route when cancel button is pressed
        window.location.href = `products/${id}`;
      }
    });
  };

  return (
    <Card className="card" style={{ width: '15rem', borderColor: "white", marginBottom: "35%",  height:"15rem" }}>
      <Card.Img variant="top" src={image} alt={name} onClick={handleDetailProductClick} />
      <Card.Title className="mt-2">{name}</Card.Title>
      <ListGroup.Item>${numberWithCommas(price)}</ListGroup.Item>
      <button onClick={handleDetailProductClick}>+</button>
    </Card>
  );
}

export default Product;

