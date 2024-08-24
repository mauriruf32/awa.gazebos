import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, orderProductsByPrice, filterProductsByMaterial, filterProductsByColor } from '../../redux/actions';
import CarouselHome from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import "./Home.css";


const Home = ({ user }) => {  
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const allProducts = useSelector((state) => state.allProducts);
console.log(user)

// if (!user) {
//   return <Navigate to="/"/>
// }

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


             <button type="button" class="mb-3 mt-3" style={{ backgroundColor: '#ffff', border:"#F48422", color:"#a8a8a8" }} onClick={resetFilters}>    
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

