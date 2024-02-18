import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
// import { getCountries, orderCountriesByName, getActivities } from "../../redux/actions";

const Form = () => {
    // const dispatch = useDispatch();
    // const countries = useSelector((state) => state.countries);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageSelected, setImageSelected] = useState("");
    console.log(imagePreview);
    

    const [form, setForm ] = useState({
        name:"",
        image:"",
        description:"",
        price:"",
        stock: "",
        color: "",
        size: "",
        material: "",
        category: "",
    });

    const [errors, setErrors] = useState({
        name:"",
        image:"",
        description:"",
        price:"",
        stock: "",
        size: "",
        color: "",
        material: "",
        category: "",
    });

    const changeHandler = (event) => {
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;

        validate({...form,[property]:value})

        setForm({...form,[property]:value})  
    }

    const validate = (form) => {
        if (form.name.length > 20) {
            setErrors({...errors, name: "Less than 20 characters."})
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
        else if (form.color !== "Rojo" || form.color !== "Azul" || form.color !=="Naranja" || form.color !== "Amarillo" ){
            setErrors({...errors,color: 'You must select a season.'})
        }
        else if (form.material.length > 20){
            setErrors({...errors,material: "Less than 20 characters."})
        } 
        else if (form.category.length > 20){
            setErrors({...errors,category: "Less than 20 characters."})
        }
        else {
        setErrors({...errors, name:"", image:"",  description:"", price:"", stock:"", size:"", color:"", material:"", category:""})
        }
    };

    const uploadImage = async () => {
        try {
          const formData = new FormData();
          formData.append("file", imageSelected);
          formData.append("upload_preset", "jvu2gwik");
    
          const response = await axios.post(`https://api.cloudinary.com/v1_1/djsqt7j6v/image/upload`, formData);
    
          setImagePreview(response.data.url);
        } catch (error) {
          console.error("Error al subir la imagen:", error.message);
        }
      };

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await uploadImage();
            await axios.post(`http://localhost:3001/products`, {
                ...form,
                image: imagePreview,
              })
        Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Producto agregado exitosamente",
                showConfirmButton: false,
                timer: 2000,
              });

             setForm({
                name: "",
                image: "",
                description: "",
                size: "",
                price: "",
                stock: "",
                color: "",
                material: "",
                category: "",
              });
        } catch (error) {
            console.error("Error al agregar producto:", error.message);
        }

    //     if (form.name==="" || form.description==="" || form.price==="" || form.stock==="" || form.size ==="" || form.material==="" || form.category==="" ){
    //     event.preventDefault();
    //     alert("All fields must be filled out.")}
    //     else{
    //     axios.post("http://localhost:3001/products", form)
    //     alert("Product created successfully!!")
    // }
    };

    // useEffect(()=>{
    //     dispatch(getCountries());
    //     dispatch(getActivities());
    // },[dispatch]);

    // const changeHandler2=(e)=> {
    //     var options = e.target.options;
    //     var value = [];
    //     for (var i = 0, l = options.length; i < l; i++) {
    //       if (options[i].selected) {
    //         value.push(options[i].value);
    //       }
    //     }
    //     console.log(value);
    //     return setForm({ ...form, ["products"]: value });
    //   }

    //   const handleOrder = function(evento){
    //     evento.preventDefault();
    //     dispatch(orderCountriesByName(evento.target.value))
    //   }

    return (
    <form  onSubmit={submitHandler}>
        <h1>Crea aqui tu producto:</h1>
        <h3>Completa todos los parametros, luego presiona guardar foto y por ultimo "crear producto"</h3>
        <div >
            <label>Nombre: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="image" >
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
            
          />
          <button onClick={() => uploadImage()}>Guardar foto</button>

          <div >
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                
              />
            )}
          </div>
        </div>
        <div >
            <label>Descripción: </label>
            <input type="text" value={form.description} onChange={changeHandler} name="description" />
            {errors.description && <span>{errors.description}</span>}
        </div>

        <div >
            <label>Precio: </label>
            <input type="number" value={form.price} onChange={changeHandler} name="price" />
            {errors.price && <span>{errors.price}</span>}
        </div>
        <div >
            <label>Stock: </label>
            <input type="number" value={form.stock} onChange={changeHandler} name="stock" />
            {errors.stock && <span>{errors.stock}</span>}
        </div>
        <div >
            <label>Tamaño: </label>
            <input type="text" value={form.size} onChange={changeHandler} name="size" />
            {errors.size && <span>{errors.size}</span>}
        </div>
        <div >
            <label>Color: </label>
                <select type="text" value={form.color} onChange={changeHandler} name="color" >
                    <option value="Rojo">Rojo</option>
                    <option value="Azul">Azul</option>
                    <option value="Naranja">Naranja</option>
                    <option value="Amarillo">Amarillo</option>
                </select>
            {errors.color && <span>{errors.color}</span>}
        </div>
        <div >
            <label>Material: </label>
            <input type="text" value={form.material} onChange={changeHandler} name="material" />
            {errors.material && <span>{errors.material}</span>}
        </div>
        <div >
            <label>Categoria: </label>
            <input type="text" value={form.category} onChange={changeHandler} name="category" />
            {errors.category && <span>{errors.category}</span>}
        </div>
        {/* <div className={style.inputbox}>
            <label>Countries where the activity takes place: </label>
            <select name="order" onChange={handleOrder} className={style.select} >
             <option value="alphabetA">Names (A-Z)</option>
             <option value="alphabetZ">Names (Z-A)</option>
            </select>
            <select type="text" value={form.countries} name="countries" onChange={changeHandler2}  multiple required>
                  {countries.map((country) => {
                    return (<option key={country.id} value={country.id}>{" "} {country.name} </option> );
                  })}
            </select>
            {errors.countries && <span>{errors.countries}</span>}

        </div> */}

        <button type="submit">Crear Producto</button>
    </form>
    )
};

export default Form;