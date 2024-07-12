import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
const URL = process.env.URL || 'https://awa-gazebos.vercel.app';
// const URL = process.env.URL || 'http://localhost:3001';

function DetailProduct() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Obtener la información del producto y las imágenes
    axios.get(`${URL}/products/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setProducto(data);
          // Filtrar las imágenes asociadas al producto si producto.images está definido
          if (data.images) {
            const productImages = data.images.map(imageId => ({
              ...images.find(image => image.id === parseInt(imageId))
            }));
            setImages(productImages);
          }
        } else {
          window.alert("No hay producto con ese ID");
        }
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });

    // Obtener todas las imágenes disponibles
    axios.get(`${URL}/images`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [id]);

  // Función para mostrar la imagen ampliada
  const showImagePopup = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: 'Ampliación de imagen',
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        popup: 'custom-popup-class', // Clase CSS personalizada para el popup
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
            {images.filter(image => producto.images && producto.images.includes(String(image.id))).map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.name}
                onClick={() => showImagePopup(image.url)}
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
            <p className="product-price">${producto.price}</p>
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
