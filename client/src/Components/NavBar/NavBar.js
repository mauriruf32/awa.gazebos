import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";

import logo from "../Card/logo.jpeg";


const NavBar = () => {
  return (
    <>
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav.Link href="/register">Registrate</Nav.Link>
        <Nav.Link href="/login">LogIn</Nav.Link>
        <Nav.Link href="/products/create">create</Nav.Link>
              {/* <Nav.Link href="/ProductList">ProductList</Nav.Link>
              <Nav.Link href="/Inventory">Inventario</Nav.Link> */}
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;