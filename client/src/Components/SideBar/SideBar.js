import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from "react-bootstrap";


function SideBarAdmin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth0();

  return (
    <>
      <Button type="button" class="btn btn-warning" onClick={handleShow}>
        Barra Admin
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bienvenido {user.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Aqui encontraras todos las opciones habilitadas para el admin:
          <Nav.Link href='/products/create'>Crear Producto</Nav.Link> 
          <Nav.Link href='/products/showproducts'>Ver Productos</Nav.Link> 
          <Nav.Link href='/users/showusers'>Ver Usuarios</Nav.Link> 
          <Nav.Link href='/images'>Crear Imagenes</Nav.Link> 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBarAdmin;