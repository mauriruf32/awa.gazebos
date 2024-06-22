import React, { useState } from "react";
import { getProductByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./SearchBar.css";
import lupa from "../../utils/search-icon.png";

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
        return; // Salir de la función si el campo está vacío
      }
      
      const result = await dispatch(getProductByName(searchValue));
      
      if (result.length === 0) {
        // Mostrar SweetAlert2 si no se encuentran productos
        await Swal.fire({
          icon: "info",
          title: "No se encontraron productos con ese nombre",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    } catch (error) {
      console.error("Error al buscar productos:", error);
    }
  };

  return (
    <div className="searchBar">
      <input type="search" onChange={handleChange} placeholder="Buscar..." />
      <button onClick={handleSearchClick}><img src={lupa} alt="Buscar" /></button>
    </div>
  );
};

export default SearchBar;
