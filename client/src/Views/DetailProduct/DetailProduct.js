import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { URL } from "../../config.js";
// import Reviews from "../../Components/Review/Review.jsx";
import "./DetailProduct.css";

function DetailProduct({ name, image, description, price, stock, size, material, category }) {

  const [Producto, setProducto] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}Producto/${name}`)
      .then((response) => {
        if (response && response.data) {
          setProducto(response.data);
        } else {
          console.error("Error fetching product: Invalid response structure");
        }
      })
      .catch((error) => {
        // Handle errors
      });
  }, [name]);


  return (
    <div className="detail-product-container">
      <div className="detail-product-image">
        <img src={image} alt={name} />
      </div>
      <div className="detail-product-info">
        <h4>
          <b>{Producto.name}</b>
        </h4>
        <p className="product-description">{description}</p>
        <p><strong>Size:</strong> {size}</p>
        <p><strong>Material:</strong> {Producto.material}</p>
        <p><strong>Category:</strong> {category}</p>
        <p className="product-price">${price}</p>
        {/* <Reviews productId={Producto.id}/> */}
      </div>
    </div>
  );
}

export default DetailProduct;
