import axios from "axios";
// import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { getProducts } from "../../redux/actions";
import React, { useState, useEffect } from "react";


const URL = `http://localhost:3001/products/`;

const EditProduct = () => {
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({});
    const [editStatus, setEditStatus] = useState({});
    const [sortConfig, setSortConfig] = useState({
      key: null,
      direction: "asc",
    });
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:3001/products/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  
    const handleEdit = (productId, product) => {
      setEditStatus((prevEditStatus) => ({
        ...prevEditStatus,
        [productId]: true,
      }));
      setEditedProduct({ ...product });
    };
  
    const handleFieldChange = (fieldName, value) => {
      setEditedProduct((prevEditedProduct) => ({
        ...prevEditedProduct,
        [fieldName]: fieldName === "price" ? parseFloat(value) : value,
      }));
    };
  
    const handleInlineUpdate = async (productId, e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:3001/products/edit/${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        });
  
        if (response.ok) {
          const updatedProduct = await response.json();
          setProducts((prevProducts) =>
            prevProducts.map((p) => (p.id === productId ? updatedProduct : p))
          );
          setEditStatus((prevEditStatus) => ({
            ...prevEditStatus,
            [productId]: false,
          }));
          setEditedProduct({});
        } else {
          const errorData = await response.json();
          console.error("Error updating product. Server response:", errorData);
        }
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };
  
    const renderInputField = (fieldName, value, options = []) => (
      <div >
        <label >{fieldName}:</label>
        {options.length ? (
          <select
            value={value !== undefined ? value : ""}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          >
            <option value="">Select...</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            
            type={fieldName === "deleted" ? "checkbox" : "text"}
            value={
              fieldName === "deleted" ? value : value !== undefined ? value : ""
            }
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          />
        )}
      </div>
    );
  
    const renderTableHeader = () => {
      const headers = [
        "Name",
        "Image",
        "Description",
        "Price",
        "Stock",
        "Size",
        "Material",
        "Category",
        "Deleted",
        "Actions",
      ];
  
      return (
        <tr>
          {headers.map((header) =>
            renderHeaderCell(header.toLowerCase(), header)
          )}
        </tr>
      );
    };
  
    const renderHeaderCell = (key, title) => (
      <th key={key} onClick={() => handleSort(key)}>
        {title}
        {sortConfig.key === key && (
          <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
        )}
      </th>
    );
  
    const renderTableCell = (product, fieldName) => {
      const isEditing = editStatus[product.id];
      const value = isEditing ? editedProduct[fieldName] : product[fieldName];
  
      return (
        <td key={fieldName}>
          {isEditing ? (
            fieldName === "deleted" ? (
              <div >
                <label ></label>
                <select
                  value={value || false}
                  onChange={(e) =>
                    handleFieldChange(fieldName, e.target.value === "true")
                  }
                >
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </select>
              </div>
            ) : (
              renderInputField(fieldName, value, getOptionsForField(fieldName))
            )
          ) : fieldName === "deleted" ? (
            value ? (
              "Sí"
            ) : (
              "No"
            )
          ) : (
            value
          )}
        </td>
      );
    };
    const renderTable = () => {
      const sortedProducts = [...products].sort((a, b) => {
        if (sortConfig.key) {
          const keyA = a[sortConfig.key];
          const keyB = b[sortConfig.key];
          if (keyA < keyB) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (keyA > keyB) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
        }
        return 0;
      });
  
      return (
        <table >
          <thead>{renderTableHeader()}</thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id}>
                {renderTableCell(product, "name")}
                {renderTableCell(product, "image")}
                {renderTableCell(product, "description")}
                {renderTableCell(product, "price")}
                {renderTableCell(product, "stock")}
                {renderTableCell(product, "size")}
                {renderTableCell(product, "material")}
                {renderTableCell(product, "category")}
                {renderTableCell(product, "deleted")}
                <td >
                  {editStatus[product.id] ? (
                    <>
                      <button onClick={(e) => handleInlineUpdate(product.id, e)}>
                        Save
                      </button>
                      <button
                        onClick={() =>
                          setEditStatus((prevEditStatus) => ({
                            ...prevEditStatus,
                            [product.id]: false,
                          }))
                        }
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(product.id, product)}>
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
  
    const handleSort = (key) => {
      let direction = "asc";
      if (sortConfig.key === key && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key, direction });
    };
  
    const getOptionsForField = (fieldName) => {
      switch (fieldName) {
        case "size":
          return ["S", "M", "L"];
        case "category":
          return ["accesorio", "figura", "decoracion"];
        case "material":
          return ["ABS", "PLA", "TPU"];
        default:
          return [];
      }
    };
  
    return (
      <div >
        <h2>Product List</h2>
        {renderTable()}
      </div>
    )

};

export default EditProduct;