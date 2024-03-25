import React from 'react';
import { getProducts, orderProductsByPrice, filterProductsByMaterial, filterProductsByColor } from '../../redux/actions';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselHome from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import "./Home.css";


const Home = () => {  
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
  const allProducts =  useSelector((state) => state.allProducts);

  const resetFilters = () => {
    dispatch(getProducts()); 
  };

  const handleOrder = function(evento){
    dispatch(orderProductsByPrice(evento.target.value))
    if (!order) setOrder(true);
    else setOrder (false);
  };

  const handleFilterMaterial = function(evento){
    evento.preventDefault();
    dispatch(filterProductsByMaterial(evento.target.value))
  };

  const handleFilterColor = function(evento){
    evento.preventDefault();
    dispatch(filterProductsByColor(evento.target.value))
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
      <CarouselHome />
      <div className='containerFilters'>
      <button type="button" class="btn btn-warning" onClick={resetFilters}>    
          Resetear filtros
        </button>
            <select class="form-select" name="order" onChange={handleOrder}>
             <option value="asc">Precio mas alto</option>
             <option value="desc">Precio mas bajo</option>
            </select>
            <select class="form-select" name="materiales" onChange={handleFilterMaterial} >
            <option onChange={resetFilters} value="materiales" >Materiales</option>
            {allProducts.map((product) => {
                    return (<option key={product.id} product={product.material}> {product.material} </option> );
                  })}
            </select>
            <select class="form-select" name="colores" onChange={handleFilterColor} >
            <option onChange={resetFilters} value="colores" >Colores</option>
            {allProducts.map((product) => {
                    return (<option key={product.id} product={product.color}> {product.color} </option> );
                  })}
            </select>
      </div>

           <div className='containerCards'>
      {allProducts.map((product) => (
      <Card key={product.id} product={product} />
      ))}
           </div>
      </div>
  )
}

export default Home;