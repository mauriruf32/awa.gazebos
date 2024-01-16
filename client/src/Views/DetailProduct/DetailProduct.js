import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { URL } from "../../config.js";
// import Reviews from "../../Components/Review/Review.jsx";
import "./DetailProduct.css";

function DetailProduct() {

  const { name } = useParams();
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
        <img src={Producto.image} alt={Producto.name} />
      </div>
      <div className="detail-product-info">
        <h4>
          <b>{Producto.name}</b>
        </h4>
        <p className="product-description">{Producto.description}</p>
        <p><strong>Size:</strong> {Producto.size}</p>
        <p><strong>Material:</strong> {Producto.material}</p>
        <p><strong>Category:</strong> {Producto.category}</p>
        <p className="product-price">${Producto.price}</p>
        {/* <Reviews productId={Producto.id}/> */}
      </div>
    </div>
  );
}

export default DetailProduct;
