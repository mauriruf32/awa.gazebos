import React, { useState, useEffect } from "react";



const UserRow = ({
  user,
  editing,
  editedValues,
  onEdit,
  onCancelEdit,
  onSaveEdit,
  onInputChange,
}) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>
      {editing ? (
        <div >
          <label ></label>
          <input
            type="text"
            value={editedValues.firstName}
            onChange={(e) => onInputChange("firstName", e.target.value)}
          />
        </div>
      ) : (
        user.firstName
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label ></label>
          <input
            type="text"
            value={editedValues.lastName}
            onChange={(e) => onInputChange("lastName", e.target.value)}
          />
        </div>
      ) : (
        user.lastName
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label ></label>
          <input
            type="date"
            value={editedValues.birthDate}
            onChange={(e) => onInputChange("birthDate", e.target.value)}
          />
        </div>
      ) : (
        user.birthDate
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label></label>
          <input
            type="tel"
            value={editedValues.phoneNumber}
            onChange={(e) => onInputChange("phoneNumber", e.target.value)}
          />
        </div>
      ) : (
        user.phoneNumber
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label ></label>
          <input
            type="email"
            value={editedValues.email}
            onChange={(e) => onInputChange("email", e.target.value)}
          />
        </div>
      ) : (
        user.email
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label></label>
          <select
            value={editedValues.roll || ""}
            onChange={(e) => onInputChange("roll", e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      ) : (
        user.roll
      )}
    </td>
    <td>
      {editing ? (
        <div >
          <label ></label>
          <select
            value={editedValues.deleted || false}
            onChange={(e) =>
              onInputChange("deleted", e.target.value === "true")
            }
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>
      ) : (
        String(user.deleted)
      )}
    </td>

    <td >
      {editing ? (
        <>
          <button onClick={onSaveEdit}>Guardar</button>
          <button onClick={onCancelEdit}>Cancelar</button>
        </>
      ) : (
        <button onClick={onEdit}>Editar</button>
      )}
    </td>
  </tr>
);

const ShowUsers = () => {
    const [users, setUsers] = useState(null);
    console.log(users);
    const [editingState, setEditingState] = useState({
      userId: null,
      editedValues: {
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        deleted: "",
        roll: "",
      },
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch(`http://localhost:3001/users`);
          if (!response.ok) {
            throw new Error("Error al obtener usuariosssssss");
          }
  
          const data = await response.json();
          setUsers(data.users);
          setLoading(false);
        } catch (error) {
          console.error(error.message);
          setError("Error al obtener usuarios");
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    const handleEdit = (userId, user) => {
      setEditingState({
        userId,
        editedValues: { ...user },
      });
    };
  
    const handleCancelEdit = () => {
      setEditingState({
        userId: null,
        editedValues: {
          firstName: "",
          lastName: "",
          birthDate: "",
          phoneNumber: "",
          email: "",
          deleted: "",
          roll: "",
        },
      });
    };
  
    const handleSaveEdit = async () => {
      const { userId, editedValues } = editingState;
  
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedValues),
        });
  
        if (!response.ok) {
          throw new Error("Error al actualizar el usuario");
        }
  
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, ...editedValues } : user
        );
  
        setUsers(updatedUsers);
        handleCancelEdit();
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const handleInputChange = (field, value) => {
      setEditingState((prevState) => ({
        ...prevState,
        editedValues: {
          ...prevState.editedValues,
          [field]: value,
        },
      }));
    };
  
    return (
      <div >
        <h2>Lista de Usuarios</h2>
        {loading && (
          <p >
            Cargando información de usuarios...
          </p>
        )}
        {error && <p >{error}</p>}
        {users && !loading && !error && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Role</th>
                <th>deleted</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  editing={editingState.userId === user.id}
                  editedValues={editingState.editedValues}
                  onEdit={() => handleEdit(user.id, user)}
                  onCancelEdit={handleCancelEdit}
                  onSaveEdit={() => handleSaveEdit(user.id)}
                  onInputChange={(field, value) =>
                    handleInputChange(field, value)
                  }
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };


export default ShowUsers;