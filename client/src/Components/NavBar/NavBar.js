import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Card/logo_sin_fondo.png";
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  return (
    <>
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav.Link href="/register">Registrate</Nav.Link>
        <Nav.Link href="/login">LogIn</Nav.Link>
        <Nav.Link href="/products/create">create</Nav.Link>
        
        { isAuthenticated && <p>{user.name}</p>}

        { isAuthenticated ? (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
        </button>
        ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
        )}

        <SearchBar/>
              <Nav.Link href="/products/showproducts">ProductList</Nav.Link>
              <Nav.Link href="/users/:id">Perfil</Nav.Link>
              <Nav.Link href="/Inventory">Inventario</Nav.Link>
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;