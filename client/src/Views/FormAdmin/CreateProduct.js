import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getImages } from "../../redux/actions";
import "./CreateProduct.css";
const URL = process.env.DATABASE_URL || 'http://localhost:3001';

const Form = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageSelected, setImageSelected] = useState("");
    console.log(imagePreview);

    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
        stock: "",
        color: "",
        size: "",
        material: "",
        materialTela: "",
        category: "",
        images: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
        stock: "",
        size: "",
        color: "",
        material: "",
        materialTela: "",
        category: "",
        images: "",
    });

    const changeHandler = (event) => {
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    };

    const validate = (form) => {
        if (form.name.length > 50) {
            setErrors({...errors, name: "Less than 50 characters."})
        }
        else if (/.*\d+.*/.test(form.name)) {
            setErrors({...errors, name: 'The name cannot have numbers.'})
        }
        else if (form.description.length > 200) {
            setErrors({...errors, description: "The description should have less than 200 characters."})
        }
        else if (!/^\d+$/.test(form.price)) {
            setErrors({ ...errors, price: 'Price cannot have letters.' });
        }
        else if (!/^\d+$/.test(form.stock)) {
            setErrors({ ...errors, stock: 'Stock cannot have letters.' });
        }
        else if (form.size.length > 20){
            setErrors({...errors,size: "Less than 20 characters."});
        }
        else if (form.color !== "Rojo" && form.color !== "Azul" && form.color !== "Naranja" && form.color !== "Amarillo") {
            setErrors({ ...errors, color: 'You must select a season.' });
        }
        else if (form.material.length > 20){
            setErrors({...errors,material: "Less than 20 characters."})
        } 
        else if (form.category.length > 20){
            setErrors({...errors,category: "Less than 20 characters."})
        }
        else if (form.images === ""){
            setErrors({...errors,images: 'You must choose at least 1 image.'})
        }
       else {
            setErrors({ ...errors, name: "", image: "", description: "", price: "", stock: "", size: "", color: "", material: "", category: "", images: [] });
        }
    };

    const uploadImage = async () => {
        try {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "jvu2gwik");

            const response = await axios.post(`https://api.cloudinary.com/v1_1/djsqt7j6v/image/upload`, formData);

            setImagePreview(response.data.url);
            setForm({ ...form, image: response.data.url }); // Guardar la URL de la imagen en el formulario
        } catch (error) {
            console.error("Error al subir la imagen:", error.message);
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await uploadImage();
            await axios.post(`${URL}/products`, {
                ...form,
            });
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Producto agregado exitosamente",
                showConfirmButton: false,
                timer: 2000,
            });

            // Limpiar el formulario después de enviar
            setForm({
                name: "",
                description: "",
                price: "",
                stock: "",
                size: "",
                color: "",
                material: "",
                category: "",
                images: "",
            });
            setImagePreview(null); // Limpiar la previsualización de la imagen
        } catch (error) {
            console.error("Error al agregar producto:", error.message);
        }
    };

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const changeHandler2 = (e) => {
        const selectedImages = Array.from(e.target.selectedOptions, (option) => option.value);
        setForm({ ...form, images: selectedImages });
    };


    return (
        <form className="form-container" onSubmit={submitHandler}>
            <h1>Crea aqui tu producto:</h1>
            <h3>Completa todos los parametros, luego presiona guardar foto y por ultimo "crear producto"</h3>
            <div className="form-name">
                <label className="form-name">Nombre: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className="form-name">
                <label className="form-name" htmlFor="image">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                        setImageSelected(e.target.files[0]);
                    }}
                />
                <button type="button" onClick={() => uploadImage()}>
                    Guardar foto
                </button>
                <div>
                    {imagePreview && <img src={imagePreview} alt="Preview" />}
                </div>
            </div>
            <div className="form-name">
    <label>Descripción: </label>
    <textarea value={form.description} onChange={changeHandler} name="description" />
    {errors.description && <span>{errors.description}</span>}
</div>

        <div className="form-stockPrecio">
            <label>Precio: </label>
            <input type="number" value={form.price} onChange={changeHandler} name="price" />
            {errors.price && <span>{errors.price}</span>}

            <label>Stock: </label>
            <input type="number" value={form.stock} onChange={changeHandler} name="stock" />
            {errors.stock && <span>{errors.stock}</span>}
        </div>
        <div className="form-name">
            <label>Tamaño: </label>
            <input type="text" value={form.size} onChange={changeHandler} name="size" />
            {errors.size && <span>{errors.size}</span>}
        </div>
        <div className="form-name">
            <label>Color: </label>
                <select type="text" value={form.color} onChange={changeHandler} name="color" >
                    <option value="Rojo">Rojo</option>
                    <option value="Azul">Azul</option>
                    <option value="Naranja">Naranja</option>
                    <option value="Amarillo">Amarillo</option>
                </select>
            {errors.color && <span>{errors.color}</span>}
        </div>
        <div className="form-name">
            <label>Material: </label>
            <input type="text" value={form.material} onChange={changeHandler} name="material" />
            {errors.material && <span>{errors.material}</span>}
        </div>
        <div className="form-name">
            <label>Material Tela: </label>
            <input type="text" value={form.materialTela} onChange={changeHandler} name="materialTela" />
            {errors.material && <span>{errors.material}</span>}
        </div>
        <div className="form-name">
            <label>Categoria: </label>
            <input type="text" value={form.category} onChange={changeHandler} name="category" />
            {errors.category && <span>{errors.category}</span>}
        </div>
        <select type="text" value={form.images} name="images" onChange={changeHandler2} multiple required>
                  {images.map((image) => {
                    return (<option key={image.id} value={image.id}>{" "} {image.name}, </option> );
                  })}
            </select>
            {errors.images && <span>{errors.images}</span>}
        <button type="submit">Crear Producto</button>
    </form>
    )
};

export default Form;