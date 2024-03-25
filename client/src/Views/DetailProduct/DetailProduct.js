import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./DetailProduct.css";
import Swal from "sweetalert2";

function DetailProduct() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Obtener la información del producto
    axios.get(`http://localhost:3001/products/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setProducto(data);
          // Filtrar las imágenes asociadas al producto
          const productImages = data.images.map(imageId => ({
            ...images.find(image => image.id === parseInt(imageId))
          }));
          setImages(productImages);
        } else {
          window.alert("No hay producto con ese ID");
        }
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });

    // Obtener todas las imágenes disponibles
    axios.get('http://localhost:3001/images')
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
        {/* Mostrar solo las imágenes asociadas al producto */}
        <div className="product-images">
          {images.filter(image => producto.images.includes(String(image.id))).map((image) => (
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
    </div>
    </div>
  );
}

export default DetailProduct;
