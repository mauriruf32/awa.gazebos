import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getProducts } from "../../redux/actions";

const URL = `http://localhost:3001/products/`;

const ShowProducts = () => {
    const [ products, setProduct] = useState([]);

    useEffect(() =>{
        getProducts();
    },[]);

    const getProducts = async () => {
        const res = await axios.get(URL);
        setProduct(res.data)
    };

    const deleteProduct = async (id) => {
        axios.delete(`${URL}${id}`);
        getProducts();
    };

    return (

    <div className="container">
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