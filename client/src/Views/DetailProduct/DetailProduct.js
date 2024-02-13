import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { URL } from "../../config.js";
// import Reviews from "../../Components/Review/Review.jsx";
import "./DetailProduct.css";

function DetailProduct() {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);


  useEffect(() => {
    axios(`http://localhost:3001/products/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setProducto(data);
        } else {
          window.alert("No hay producto con ese ID");
        }
      }
    );
    return setProducto({});
  }, []);




  return (
    <div className="detail-product-container">
      <div className="detail-product-image">
        <img src={producto.image} alt={producto.name} />
      </div>
      <div className="detail-product-info">
        <h4>
          <b>{producto.name}</b>
        </h4>
        <p className="product-description">{producto.description}</p>
        <p><strong>Size:</strong> {producto.size}</p>
        <p><strong>Material:</strong> {producto.material}</p>
        <p><strong>Category:</strong> {producto.category}</p>
        <p className="product-price">${producto.price}</p>
        {/* <Reviews productId={Producto.id}/> */}
      </div>
    </div>
  );
}

export default DetailProduct;
