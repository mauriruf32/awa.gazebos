import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import { URL } from "../../config.js";
import { gazebos } from "../../utils/dummyData.js";

function DetailProduct() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  function numberWithCommas(price) {
    if (typeof price !== 'undefined') {
      return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return "";
    }
  }

  useEffect(() => {
    // Obtener la información del producto desde la API
    axios.get(`${URL}/products/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setProducto(data);
        } else {
          window.alert("No hay producto con ese ID");
        }
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        // Cargar el producto desde dummyData.js si la API falla
        const productoDummy = gazebos.find(item => item.id === parseInt(id));
        if (productoDummy) {
          setProducto(productoDummy);
        } else {
          window.alert("No hay producto con ese ID en los datos de prueba");
        }
      });
  }, [id]);

  const showImagePopup = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: 'Ampliación de imagen',
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        popup: 'custom-popup-class',
      }
    });
  };

  return (
    <div className="container-detail"> 
      <div className="detail-product-container">
        <div className="detail-product-image">
          {producto.image && (
            <img
              src={producto.image}
              alt={producto.name}
              onClick={() => showImagePopup(producto.image)}
            />
          )}
          <div className="product-images">
            {producto.images && producto.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${producto.name} ${index + 1}`}
                onClick={() => showImagePopup(image)}
                className="clickable-image"
              />
            ))}
          </div>
        </div>
        <div className="detail-product-info">
          <h1 className="product-main__heading">
            {producto.name}
          </h1>
          <div>
            <p>Medidas: {producto.size}</p>
            <p>Material: {producto.material}</p>
            <p>Material Tela: {producto.materialTela}</p>
            <p>Categoria: {producto.category}</p>
            <p className="product-price">${numberWithCommas(producto.price)}</p>
          </div>
          <Button className="detail-product-button" href="https://wa.me/543435149599" style={{ border: 'none', backgroundColor: "#F48422" }}>Consultar Stock</Button>{' '}
        </div>
      </div>
      
      <div className="product-description">
        <p>Descripción:</p>
        {producto.description && producto.description.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default DetailProduct;
