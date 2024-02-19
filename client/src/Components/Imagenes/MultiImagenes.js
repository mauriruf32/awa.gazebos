import React, { useState } from 'react';
import Dropzone from "react-dropzone";
import { Container } from 'react-bootstrap'; 
import axios from 'axios';

const MultiImagenes = (props) => {

    const [ image, setImage ] = useState({array : []});
    const [ loading, setLoading ] = useState("")

    const handleDrop = (files) =>{
        const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", `jvu2gwik`);
            formData.append("api_key", `537582123457172`);
            formData.append("timestamp", (Date.now() / 1000) | 0 );
            setLoading("true");
            return axios
            .post(`https://api.cloudinary.com/v1_1/djsqt7j6v/image/upload`, formData, {
                headers: {"X-Requested-With" : "XMLHttpRequest"},
            })
            .then((response) =>{
                const data = response.data
                const fileURL = data.secure_url;
                let specificArrayInObject = image.array;
                specificArrayInObject.push(fileURL);
                const newObj = { ...image, specificArrayInObject};
                setImage(newObj)
                console.log(image)
            })
        })
        axios.all(uploaders).then(() =>{
            setLoading("false")
        })
    }

    function imagePreview(){
        if(loading === "true") {
            return <h3>Cargando imagenes...</h3>
        }
        if(loading === "false"){
            return (
                <h3>
                    {
                        image.array.length <= 0
                        ? "No Hay imagenes"
                        : image.array.map((item, index) => (
                            <img 
                            alt="Imagen"
                            style={{width: "125px", height: "70px", backgroundSize: "cover", paddingRight:"15px"
                        }}
                        src={item} />
                        ))
                    }
                </h3>
            )
        }
    }

  return (
    <div>
        <Container>
            <h1 className='text-center'>sube tus imagenes aqui</h1>
            <Dropzone classname="dropzone" onDrop={handleDrop} onChange={(e) => setImage(e.target.value)} value={image} >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({className:"dropzone"})}>
                            <input {...getInputProps()} />
                            <span></span>
                            <p>
                                coloca tus imagenes aqui                           
                            </p>
                        </div>
                    </section>
                )}
            </Dropzone>
            {imagePreview()}
        </Container>
    </div>
  )
}

export default MultiImagenes;