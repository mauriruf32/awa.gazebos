import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, orderProductsByPrice, filterProductsByMaterial, filterProductsByColor } from '../../redux/actions';
import CarouselHome from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import "./Home.css";


const Home = () => {  
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const allProducts = useSelector((state) => state.allProducts);

  const resetFilters = () => {
    setOrder('');
    setSelectedMaterial('');
    setSelectedColor('');
    dispatch(getProducts());
  };

  const handleOrder = (value) => {
    setOrder(value);
    dispatch(orderProductsByPrice(value));
  };

  const handleFilterMaterial = (value) => {
    setSelectedMaterial(value);
    dispatch(filterProductsByMaterial(value));
  };

  const handleFilterColor = (value) => {
    setSelectedColor(value);
    dispatch(filterProductsByColor(value));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <CarouselHome />
      <Container className='container-home'>
        <div className='containerFilters' >
          <Accordion defaultActiveKey={['0']} alwaysOpen >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Orden Precio</Accordion.Header>
              <Accordion.Body>
                <div>
                  <input 
                    type="radio" 
                    id="priceAsc" 
                    name="order" 
                    value="asc" 
                    checked={order === 'asc'} 
                    onChange={() => handleOrder('asc')} 
                  />
                  <label className='p-1 f-s' htmlFor="priceAsc">+ Precio</label>
                </div>
                <div>
                  <input 
                    type="radio" 
                    id="priceDesc" 
                    name="order" 
                    value="desc" 
                    checked={order === 'desc'} 
                    onChange={() => handleOrder('desc')} 
                  />
                  <label className='p-1 f-s' htmlFor="priceDesc">- Precio</label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Materiales</Accordion.Header>
              <Accordion.Body>
                {[...new Set(allProducts.map(product => product.material))].map((material, index) => (
                  <div key={index}>
                    <input 
                      type="radio" 
                      id={`material-${index}`} 
                      name="material" 
                      value={material} 
                      checked={selectedMaterial === material} 
                      onChange={() => handleFilterMaterial(material)} 
                    />
                    <label className='p-1 f-s' htmlFor={`material-${index}`}> {material}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>Colores</Accordion.Header>
              <Accordion.Body>
                {[...new Set(allProducts.map(product => product.color))].map((color, index) => (
                  <div key={index}>
                    <input 
                      type="radio" 
                      id={`color-${index}`} 
                      name="color" 
                      value={color} 
                      checked={selectedColor === color} 
                      onChange={() => handleFilterColor(color)} 
                    />
                    <label className='p-1 f-s' htmlFor={`color-${index}`}>{color}</label>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>


             <button type="button" class="mb-3" style={{ backgroundColor: '#F48422', border:"none" }} onClick={resetFilters}>    
           Resetear filtros
      </button>

          </Accordion>
        </div>

        <div className='containerCards'>
          {allProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;




// import React from 'react';
// import { getProducts, orderProductsByPrice, filterProductsByMaterial, filterProductsByColor } from '../../redux/actions';
// import { useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CarouselHome from "../../Components/Carousel/Carousel";
// import Card from "../../Components/Card/Card";
// import "./Home.css";
// import { Container } from 'react-bootstrap';
// import Accordion from 'react-bootstrap/Accordion';

// const Home = () => {  
//   const dispatch = useDispatch();
//   const [order, setOrder] = useState(false);
//   const allProducts =  useSelector((state) => state.allProducts);

//   const resetFilters = () => {
//     dispatch(getProducts()); 
//   };

//   const handleOrder = function(evento){
//     dispatch(orderProductsByPrice(evento.target.value))
//     if (!order) setOrder(true);
//     else setOrder (false);
//   };

//   const handleFilterMaterial = function(evento){
//     evento.preventDefault();
//     dispatch(filterProductsByMaterial(evento.target.value))
//   };

//   const handleFilterColor = function(evento){
//     evento.preventDefault();
//     dispatch(filterProductsByColor(evento.target.value))
//   }

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);


//   return (
//     <div>
//       <CarouselHome />
      
//       <Container className='container-home'>
//       <div className='containerFilters'>
//      
//       <button type="button" class="mb-3" style={{ backgroundColor: '#F48422' }} onClick={resetFilters}>    
//           Resetear filtros
//         </button>
//             <select class="form-select form-select-lg mb-3" name="order" onChange={handleOrder}>
//              <option value="asc">Precio mas alto</option>
//              <option value="desc">Precio mas bajo</option>
//             </select>
//             <select class="form-select form-select-lg mb-3" name="materiales" onChange={handleFilterMaterial} >
//             <option onChange={resetFilters} value="materiales"  >Materiales</option>
//             {allProducts.map((product) => {
//                     return (<option key={product.id} product={product.material}> {product.material} </option> );
//                   })}
//             </select>
//             <select class="form-select form-select-lg mb-3" className="form-select" name="colores" onChange={handleFilterColor} >
//             <option onChange={resetFilters} value="colores"  >Colores</option>
//             {allProducts.map((product) => {
//                     return (<option key={product.id} product={product.color}> {product.color} </option> );
//                   })}
//             </select>
//       </div>

//       <div class="card mb-3" className='containerCards'>
//             {allProducts.map((product) => (
//             <Card key={product.id} product={product} />
//             ))}
//       </div>
//            </Container>
//       </div>
      
//   )
// }

// export default Home;