import React, { useState } from 'react';
import Dropzone from "react-dropzone";
import { Container } from 'react-bootstrap';
import axios from 'axios';
import "./Images.css";

const Images = (props) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        url: [],
    });

    const [errors, setErrors] = useState({
        name:"",
        url: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const validate = (formData) => {
        const errorsObj = {};
        if (formData.url.length === 0) {
            errorsObj.url = 'You must choose at least 1 image.';
        } else {
            errorsObj.url = '';
        }
        setErrors(errorsObj);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (form.url.length === 0 || form.name === "") {
            alert("All fields must be filled out.");
        } else {
            axios.post("http://localhost:3001/images", form)
                .then(() => {
                    alert("Imagenes creadas!!");
                    setForm({ name: "", url: [] }); // Limpiar el formulario
                })
                .catch((error) => {
                    console.error("Error al crear las imagenes:", error);
                });
        }
    };

    const handleDrop = (files) => {
        setLoading(true);
        const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", `jvu2gwik`);
            formData.append("api_key", `537582123457172`);
            formData.append("timestamp", (Date.now() / 1000) | 0);
            return axios.post(`https://api.cloudinary.com/v1_1/djsqt7j6v/image/upload`, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            })
                .then((response) => {
                    const data = response.data
                    const fileURL = data.secure_url;
                    setImages([...images, fileURL]);
                    setForm({ ...form, url: [...form.url, fileURL] });
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                });
        });
        axios.all(uploaders).then(() => {
            setLoading(false);
        });
    }

    function imagePreview() {
        if (loading) {
            return <h3>Loading images...</h3>
        }
        return (
            <div>
                {images.length === 0 ? "No images" :
                    images.map((item, index) => (
                        <img
                            key={index}
                            alt=""
                            style={{ width: "10%", height: "10%", backgroundSize: "cover", paddingRight: "15px" }}
                            src={item}
                        />
                    ))}
            </div>
        );
    }


    return (
        <form onSubmit={submitHandler} className='form-images' >
            <div>
                <Container>
                    <h1 className='text-center'>Upload your images here</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter image name"
                        value={form.name}
                        onChange={changeHandler}
                    />
                    <Dropzone className="dropzone" onDrop={handleDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps({ className: "dropzone" })}>
                                    <input {...getInputProps()} />
                                    <p>Drop your images here</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    {imagePreview()}
                </Container>
            </div>
            <button type="submit">Create Images</button>
            {errors.url && <div className="error">{errors.url}</div>}
        </form>
    );
}

export default Images;
