import React from 'react';
import { getProducts, orderProductsByPrice, filterProductsByMaterial } from '../../redux/actions';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../../Components/NavBar/NavBar';
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

  const handleFilterActivity = function(evento){
    evento.preventDefault();
    dispatch(filterProductsByMaterial(evento.target.value))
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
      <NavBar />
      Home
      <div className='containerFilters'>
      <button onClick={resetFilters}>    
Reset Filters
        </button>
            <select name="order" onChange={handleOrder}>
             <option value="asc">Higher price</option>
             <option value="desc">Lower price</option>
            </select>
            <select name="materiales" onChange={handleFilterActivity} >
            <option onChange={resetFilters} value="materiales" >Materiales</option>
            {allProducts.map((product) => {
                    return (<option key={product.id} product={product.material}> {product.material} </option> );
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