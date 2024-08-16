import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const URL = process.env.URL || 'https://awa-gazebos.vercel.app';
// const URL = process.env.URL || 'http://localhost:3001';

const ShowUsers = () => {
    const [ users, setUser ] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);

    const getUsers = async () => {
        const res = await axios.get(`${URL}/users`);
        setUser(res.data)
    };

    const deleteUser = async (id) => {
        axios.delete(`${URL}/users/${id}`);
        getUsers();
    };

    return (

    <div className="container">
        <div className="row">
            <div className="col">
                <table className="table">
                    <thead className="table-primary"> 
                        <tr>
                            <th>Title</th>
                            <th>Contente</th>
                            <th>Actions</th>
                            <th>Title</th>
                            <th>Contente</th>
                            <th>Roll</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map ((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.roll}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className="btn btn-info">Editar</Link>
                                    <button onClick={()=>deleteUser(user.id)} className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
};

export default ShowUsers;

// import React, { useState, useEffect } from "react";



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
//         <div >
//           <label ></label>
//           <input
//             type="text"
//             value={editedValues.firstName}
//             onChange={(e) => onInputChange("firstName", e.target.value)}
//           />
//         </div>
//       ) : (
//         user.firstName
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label ></label>
//           <input
//             type="text"
//             value={editedValues.lastName}
//             onChange={(e) => onInputChange("lastName", e.target.value)}
//           />
//         </div>
//       ) : (
//         user.lastName
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label ></label>
//           <input
//             type="date"
//             value={editedValues.birthDate}
//             onChange={(e) => onInputChange("birthDate", e.target.value)}
//           />
//         </div>
//       ) : (
//         user.birthDate
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label></label>
//           <input
//             type="tel"
//             value={editedValues.phoneNumber}
//             onChange={(e) => onInputChange("phoneNumber", e.target.value)}
//           />
//         </div>
//       ) : (
//         user.phoneNumber
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label ></label>
//           <input
//             type="email"
//             value={editedValues.email}
//             onChange={(e) => onInputChange("email", e.target.value)}
//           />
//         </div>
//       ) : (
//         user.email
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label></label>
//           <select
//             value={editedValues.roll || ""}
//             onChange={(e) => onInputChange("roll", e.target.value)}
//           >
//             <option value="">Seleccione...</option>
//             <option value="Client">Client</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//       ) : (
//         user.roll
//       )}
//     </td>
//     <td>
//       {editing ? (
//         <div >
//           <label ></label>
//           <select
//             value={editedValues.deleted || false}
//             onChange={(e) =>
//               onInputChange("deleted", e.target.value === "true")
//             }
//           >
//             <option value={true}>Sí</option>
//             <option value={false}>No</option>
//           </select>
//         </div>
//       ) : (
//         String(user.deleted)
//       )}
//     </td>

//     <td >
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

// const ShowUsers = () => {
//     const [users, setUsers] = useState(null);
//     console.log(users);
//     const [editingState, setEditingState] = useState({
//       userId: null,
//       editedValues: {
//         firstName: "",
//         lastName: "",
//         birthDate: "",
//         phoneNumber: "",
//         email: "",
//         deleted: "",
//         roll: "",
//       },
//     });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchUsers = async () => {
//         try {
//           const response = await fetch(`http://localhost:3001/users/`);
//           if (!response.ok) {
//             throw new Error("Error al obtener usuariosssssss");
//           }
  
//           const data = await response.json();
//           setUsers(data.users);
//           setLoading(false);
//         } catch (error) {
//           console.error(error.message);
//           setError("Error al obtener usuarios");
//           setLoading(false);
//         }
//       };
  
//       fetchUsers();
//     }, []);
  
//     const handleEdit = (userId, user) => {
//       setEditingState({
//         userId,
//         editedValues: { ...user },
//       });
//     };
  
//     const handleCancelEdit = () => {
//       setEditingState({
//         userId: null,
//         editedValues: {
//           firstName: "",
//           lastName: "",
//           birthDate: "",
//           phoneNumber: "",
//           email: "",
//           deleted: "",
//           roll: "",
//         },
//       });
//     };
  
//     const handleSaveEdit = async () => {
//       const { userId, editedValues } = editingState;
  
//       try {
//         const response = await fetch(`http://localhost:3001/users/${userId}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(editedValues),
//         });
  
//         if (!response.ok) {
//           throw new Error("Error al actualizar el usuario");
//         }
  
//         const updatedUsers = users.map((user) =>
//           user.id === userId ? { ...user, ...editedValues } : user
//         );
  
//         setUsers(updatedUsers);
//         handleCancelEdit();
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
  
//     const handleInputChange = (field, value) => {
//       setEditingState((prevState) => ({
//         ...prevState,
//         editedValues: {
//           ...prevState.editedValues,
//           [field]: value,
//         },
//       }));
//     };
  
//     return (
//       <div >
//         <h2>Lista de Usuarioss</h2>
//         {loading && (
//           <p >
//             Cargando información de usuarios...
//           </p>
//         )}
//         {error && <p >{error}</p>}
//         {users && !loading && !error && (
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Nombre</th>
//                 <th>Apellido</th>
//                 <th>Fecha de Nacimiento</th>
//                 <th>Teléfono</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>deleted</th>
//                 <th>Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <UserRow
//                   key={user.id}
//                   user={user}
//                   editing={editingState.userId === user.id}
//                   editedValues={editingState.editedValues}
//                   onEdit={() => handleEdit(user.id, user)}
//                   onCancelEdit={handleCancelEdit}
//                   onSaveEdit={() => handleSaveEdit(user.id)}
//                   onInputChange={(field, value) =>
//                     handleInputChange(field, value)
//                   }
//                 />
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   };


// export default ShowUsers;