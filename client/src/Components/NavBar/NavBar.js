import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavbarCollapse } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../utils/AWA (1).png";
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css";


const NavBar = () => {
  // const { user, loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  return (
    <>
    <Navbar  data-bs-theme="light" className='nav-container' >
      <Container className="justify-content-start" >
        <Navbar.Brand  href="/">
          <img
            alt=""
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        {/* <Nav.Link className='login' href="/login">Login</Nav.Link>
        <Nav.Link className='login' href="/about">Nosotros</Nav.Link>        */}
      </Container>
          <SearchBar/>
    </Navbar>
  </>
  )
}

export default NavBar;