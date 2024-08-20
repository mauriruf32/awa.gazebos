import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from "sweetalert2";
import "./Card.css";

function Product({ product }) {
  const { id, name, image, price, impermeable, size, material, category } = product;

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
            <p><strong>Precio:</strong> $ ${numberWithCommas(price)}</p>
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
    <Card className="card" style={{ width: '15rem', borderColor: "white", marginBottom: "55%",  height:"15rem" }}>
      <Card.Img variant="top" src={image} alt={name} onClick={handleDetailProductClick} />
      <Card.Title className="mt-2">{name}</Card.Title>
      <ListGroup.Item>${numberWithCommas(price)}</ListGroup.Item>
      <button onClick={handleDetailProductClick}>+</button>
    </Card>
  );
}

export default Product;


// import React, { useState, useEffect } from "react";
// import Card  from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import axios from "axios";
// import Swal from "sweetalert2";
// import plusIcon from "../../utils/iconmonstr-plus-square-multiple-filled-240.png"
// import "./Card.css";

// function Product({ product }) {

//   const { id, name, image, description, price, stock, color, size, material, category } = product;

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
  
//   function numberWithCommas(price) {
//     return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }
//   const handleDetailProductClick = () => {
//     Swal.fire({
//       title: `<strong>${name}</strong>`,
//       html: `
//         <div class="detail-card">
//           <img class="detail-img" src="${image}" alt="${name}" />
//           <div class="detail-info">
//             <p><strong>Tamaño:</strong> ${size}</p>
//             <p><strong>Material:</strong> ${material}</p>
//             <p><strong>Categoria:</strong> ${category}</p>
//             <p><strong>Precio:</strong> $ ${price}</p>
//           </div>
//         </div>`,
//       // showCloseButton: true,
//       showCancelButton: true,
//       focusConfirm: false,
//       // confirmButtonText: "Agregar al carrito",
//       cancelButtonText: "+ Info",
//       cancelButtonColor: "#F48422",
//       confirmButtonColorHover: "#000",
//       confirmButtonColor: "#F48422",
//     }).then((result) => {
//       if (result.isConfirmed) {
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         // Redirect to the specified route when cancel button is pressed
//         window.location.href = `products/${id}`;
//       }
//     });
//   };

     
//   // const handleAddToCartClick = () => {
//   //   const productId = id;
//   //   addToCart(productId);
//   // };
//   return (
//     <Card className="card" style={{ width: '15rem', borderColor: "white", marginBottom: "35%",  height:"15rem" }} >
//       <Card.Img variant="top" src={image} alt={
//         name} onClick={handleDetailProductClick} />
      
//         <Card.Title className="mt-2">{name}</Card.Title>
//         <ListGroup.Item> $ numberWithCommas({price})</ListGroup.Item>
//         {/* <Card.Text>{description}</Card.Text> */}
     
//       {/* <ListGroup className="list-group-flush" style={{  borderColor: "orange" }}>
//         <ListGroup.Item>Precio: ${price}</ListGroup.Item>
//         <ListGroup.Item>Tamaño: {size}</ListGroup.Item>
//         <ListGroup.Item>Color: {color}</ListGroup.Item> 
//       </ListGroup>
//       <Card.Body>*/}
//       <button  onClick={handleDetailProductClick} >+</button>
//        {/* <Card.Link onClick={handleDetailProductClick} >Consultar Stock</Card.Link> */}
//        {/*   <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body> */}
//     </Card>
//   );
// }

// export default Product;