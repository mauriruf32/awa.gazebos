import React, { useState, useEffect } from "react";
// import "./EditUsers.css";

const URL = process.env.URL || 'https://awa-gazebos.vercel.app';
// const URL = process.env.URL || 'http://localhost:3001';

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

// import React, { useState, useEffect } from "react";
// import styles from "./UserList.module.css";

// const URL = 'http://localhost:3001';

// const UserRow = ({
//   user,
//   editing,
//   editedValues,
//   onEdit,
//   onCancelEdit,
//   onSaveEdit,
//   onInputChange,
// }) => (
//   <tr key={user.id}>
//     <td>{user.id}</td>
//     <td>
//       {editing ? (
//         <input
//           className={styles.editInput}
//           type="text"
//           value={editedValues.firstName}
//           onChange={(e) => onInputChange("firstName", e.target.value)}
//         />
//       ) : (
//         user.firstName
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <input
//           className={styles.editInput}
//           type="text"
//           value={editedValues.lastName}
//           onChange={(e) => onInputChange("lastName", e.target.value)}
//         />
//       ) : (
//         user.lastName
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <input
//           className={styles.editInput}
//           type="date"
//           value={editedValues.birthDate}
//           onChange={(e) => onInputChange("birthDate", e.target.value)}
//         />
//       ) : (
//         user.birthDate
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <input
//           className={styles.editInput}
//           type="tel"
//           value={editedValues.phoneNumber}
//           onChange={(e) => onInputChange("phoneNumber", e.target.value)}
//         />
//       ) : (
//         user.phoneNumber
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <input
//           className={styles.editInput}
//           type="email"
//           value={editedValues.email}
//           onChange={(e) => onInputChange("email", e.target.value)}
//         />
//       ) : (
//         user.email
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <select
//           className={styles.editInput}
//           value={editedValues.roll || ""}
//           onChange={(e) => onInputChange("roll", e.target.value)}
//         >
//           <option value="">Seleccione...</option>
//           <option value="Client">Client</option>
//           <option value="Admin">Admin</option>
//         </select>
//       ) : (
//         user.roll
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <select
//           className={styles.editInput}
//           value={editedValues.deleted || false}
//           onChange={(e) =>
//             onInputChange("deleted", e.target.value === "true")
//           }
//         >
//           <option value={true}>Sí</option>
//           <option value={false}>No</option>
//         </select>
//       ) : (
//         String(user.deleted)
//       )}
//     </td>

//     <td className={styles.actions}>
//       {editing ? (
//         <>
//           <button onClick={onSaveEdit}>Guardar</button>
//           <button onClick={onCancelEdit}>Cancelar</button>
//         </>
//       ) : (
//         <button onClick={onEdit}>Editar</button>
//       )}
//     </td>
//   </tr>
// );

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [editingState, setEditingState] = useState({
//     userId: null,
//     editedValues: {
//       firstName: "",
//       lastName: "",
//       birthDate: "",
//       phoneNumber: "",
//       email: "",
//       deleted: false,
//       roll: "",
//     },
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(`${URL}/users`);
//         if (!response.ok) {
//           throw new Error("Error al obtener usuarios");
//         }
//         const data = await response.json();
//         setUsers(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error.message);
//         setError("Error al obtener usuarios");
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleEdit = (userId, user) => {
//     setEditingState({
//       userId,
//       editedValues: { ...user },
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingState({
//       userId: null,
//       editedValues: {
//         firstName: "",
//         lastName: "",
//         birthDate: "",
//         phoneNumber: "",
//         email: "",
//         deleted: false,
//         roll: "",
//       },
//     });
//   };

//   const handleSaveEdit = async () => {
//     const { userId, editedValues } = editingState;
  
//     try {
//       const response = await fetch(`${URL}/users/edit/${userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(editedValues),
//       });
  
//       if (!response.ok) {
//         throw new Error("Error al actualizar el usuario");
//       }
  
//       const updatedUsers = users.map((user) =>
//         user.id === userId ? { ...user, ...editedValues } : user
//       );
  
//       setUsers(updatedUsers);
//       handleCancelEdit();
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
  

//   const handleInputChange = (field, value) => {
//     setEditingState((prevState) => ({
//       ...prevState,
//       editedValues: {
//         ...prevState.editedValues,
//         [field]: value,
//       },
//     }));
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <h2>Lista de Usuarios</h2>
//       {loading && (
//         <p className={styles.loadingMessage}>
//           Cargando información de usuarios...
//         </p>
//       )}
//       {error && <p className={styles.errorMessage}>{error}</p>}
//       {users.length > 0 && !loading && !error && (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nombre</th>
//               <th>Apellido</th>
//               <th>Fecha de Nacimiento</th>
//               <th>Teléfono</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Deleted</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <UserRow
//                 key={user.id}
//                 user={user}
//                 editing={editingState.userId === user.id}
//                 editedValues={editingState.editedValues}
//                 onEdit={() => handleEdit(user.id, user)}
//                 onCancelEdit={handleCancelEdit}
//                 onSaveEdit={handleSaveEdit}
//                 onInputChange={(field, value) => handleInputChange(field, value)}
//               />
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserList;
