import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { getProducts } from "../../redux/actions";

const URL = `http://localhost:3001/products/`;

const EditProduct = () => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(URL+id, {
            name: name,
            description: description
        })
        navigate('/')
    };

    useEffect(() => {
        getProductById()
    }, []);

    const getProductById = async () => {
        const res= await axios.get(URL+id);
        setName(res.data.name);
        setDescription(res.data.description);
    };

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Descripción</label>
                <textarea
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

};

export default EditProduct;