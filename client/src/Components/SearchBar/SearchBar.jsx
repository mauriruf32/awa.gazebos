import React, { useState, useEffect } from "react";
import { getProductByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap"; 

const SearchBar = () => {
  const dispatch = useDispatch();
  const [localSearchValue, setLocalSearchValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setLocalSearchValue(newValue);
  };

  const handleSearchClick = () => {
    dispatch(getProductByName(localSearchValue));
  };

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     dispatch();
  //   }, 500);
  //   return () => clearTimeout(timerId);
  // }, [localSearchValue, dispatch]);

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={localSearchValue}
      />
      <Button variant="primary" 
  
      onClick={handleSearchClick}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
