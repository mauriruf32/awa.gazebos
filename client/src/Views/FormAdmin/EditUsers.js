import React, { useState, useEffect } from "react";
// import "./EditUsers.css";
import { URL } from "../../config.js";


const EditUsers = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState({});
  const [editStatus, setEditStatus] = useState({});
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${URL}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId, user) => {
    setEditStatus((prevEditStatus) => ({
      ...prevEditStatus,
      [userId]: true,
    }));
    setEditedUser({ ...user });
  };

  const handleFieldChange = (fieldName, value) => {
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      [fieldName]: fieldName === "deleted" ? value === "true" : value,
    }));
  };

  const handleInlineUpdate = async (userId, e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${URL}/users/edit/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
      });
  
      const responseBody = await response.text(); // Obtener respuesta como texto
      if (response.ok) {
        const updatedUser = JSON.parse(responseBody); // Parsear el texto como JSON
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === userId ? updatedUser : u))
        );
        setEditStatus((prevEditStatus) => ({
          ...prevEditStatus,
          [userId]: false,
        }));
        setEditedUser({});
      } else {
        console.error("Error updating user. Server response:", responseBody);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  const renderInputField = (fieldName, value, options = []) => (
    <div className="input-field">
      <label>{fieldName}:</label>
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
          checked={fieldName === "deleted" ? value : undefined}
          value={fieldName !== "deleted" ? value !== undefined ? value : "" : undefined}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
        />
      )}
    </div>
  );

  const renderTableHeader = () => {
    const headers = [
      "First Name",
      "Last Name",
      "Birth Date",
      "Phone Number",
      "Email",
      "Roll",
      "Deleted",
      "Actions",
    ];

    return (
      <tr>
        {headers.map((header) =>
          renderHeaderCell(header.toLowerCase().replace(" ", ""), header)
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

  const renderTableCell = (user, fieldName) => {
    const isEditing = editStatus[user.id];
    const value = isEditing ? editedUser[fieldName] : user[fieldName];

    return (
      <td key={fieldName}>
        {isEditing ? (
          fieldName === "deleted" ? (
            <select
              value={value || false}
              onChange={(e) =>
                handleFieldChange(fieldName, e.target.value === "true")
              }
            >
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
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
    const sortedUsers = [...users].sort((a, b) => {
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
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">{renderTableHeader()}</thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr key={user.id}>
                  {renderTableCell(user, "firstName")}
                  {renderTableCell(user, "lastName")}
                  {renderTableCell(user, "birthDate")}
                  {renderTableCell(user, "phoneNumber")}
                  {renderTableCell(user, "email")}
                  {renderTableCell(user, "roll")}
                  {renderTableCell(user, "deleted")}
                  <td>
                    {editStatus[user.id] ? (
                      <>
                        <button
                          className="save-btn"
                          onClick={(e) => handleInlineUpdate(user.id, e)}
                        >
                          Save
                        </button>
                        <button
                          className="cancel-btn"
                          onClick={() =>
                            setEditStatus((prevEditStatus) => ({
                              ...prevEditStatus,
                              [user.id]: false,
                            }))
                          }
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(user.id, user)}>
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
    // Customize this function if you have specific options for certain fields
    return [];
  };

  return (
    <div className="edit-users">
      {renderTable()}
    </div>
  );
};

export default EditUsers;

