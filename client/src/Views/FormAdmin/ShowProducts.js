import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getProducts } from "../../redux/actions";
import "./ShowProducts.css"

const URL = process.env.URL || 'http://localhost:3001';

const ShowProducts = () => {
    const [ products, setProduct] = useState([]);

    useEffect(() =>{
        getProducts();
    },[]);

    const getProducts = async () => {
        const res = await axios.get(`${URL}/products`);
        setProduct(res.data)
    };

    const deleteProduct = async (id) => {
        axios.delete(`${URL}${id}`);
        getProducts();
    };

    return (

    <div className="show-prod">
        <div className="row">
            <div className="col">
                <table className="table">
                    <thead className="table-primary"> 
                        <tr>
                            <th>Title</th>
                            <th>Contente</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map ((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-info">Editar</Link>
                                    <button onClick={()=>deleteProduct(product.id)} className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
};

export default ShowProducts;