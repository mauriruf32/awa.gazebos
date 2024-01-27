import React, { useState } from "react";
import { getProductByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleSearchClick = async () => {

    try {
      if (searchValue.trim() === "") {
        // Mostrar SweetAlert2 si el campo de búsqueda está vacío
        await Swal.fire({
          icon: "warning",
          title: "Ingrese un nombre de producto",
          showConfirmButton: false,
          timer: 1500,
        });
        
      } 
      await dispatch(getProductByName(searchValue));
    } catch (error) {
      console.error("Error al agregar producto:");
    }

  };

  return (
    <div>
      <input type="search" onChange={handleChange} placeholder="Search.." />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;


