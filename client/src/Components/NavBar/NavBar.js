import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Card/image-blanca.png";
import "./NavBar.css";


const NavBar = () => {
  // const { user, loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  return (
    <>
    <Navbar className='nav-container'>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="200"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        {/* <button className='boton-login' >
        <Nav.Link href="/login">Login</Nav.Link>

        </button>
         */}
        {/* { isAuthenticated  && <Nav.Link href="/profiles">Perfil</Nav.Link>
        
        }
        { isAuthenticated && <p>{user.name}</p>
        && <SideBarAdmin/>
        
        }



        { isAuthenticated ? (
        <button type="button" class="btn btn-warning" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
        </button>
        ) : (
        <button type="button" class="btn btn-warning" onClick={() => loginWithRedirect()}>Log In</button>
        )} */}

      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;