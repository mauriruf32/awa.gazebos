import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Card/logo.jpeg";


const NavBar = () => {
  return (
    <>
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;