import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getProducts, orderProductsByPrice, filterProductsByMaterial } from '../../redux/actions';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";


function SideBar() {
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
    }
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

  return (
    <div><Dropdown className="d-inline mx-2" autoClose="inside" onChange={handleFilterMaterial} >
    <Dropdown.Toggle id="dropdown-autoclose-inside">
    Materiales
    </Dropdown.Toggle>
    <Dropdown.Menu name="materiales" onChange={handleFilterMaterial} >
            <Dropdown.Item onChange={resetFilters} value="materiales" >Materiales</Dropdown.Item>
            {allProducts.map((product) => {
                    return (<Dropdown.Item key={product.id} product={product.material}> {product.material} </Dropdown.Item> );
                  })}
            </Dropdown.Menu>
  </Dropdown>
  </div>
  )
}

export default SideBar;