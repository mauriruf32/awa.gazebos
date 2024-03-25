import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Card/image-blanca.png";
import SearchBar from '../SearchBar/SearchBar';
import "./NavBar.css";
import SideBarAdmin from '../SideBar/SideBar';


const NavBar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  return (
    <>
    <Navbar className='nav-container'>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        {/* <Nav.Link href="/register">Registrate</Nav.Link>
        <Nav.Link href="/login">LogIn</Nav.Link> */}
        {/* <Nav.Link href="/images">Imagenes</Nav.Link> */}

        
        { isAuthenticated && <p>{user.name}</p>
        && <SideBarAdmin/>
        }

        {/* { isAuthenticated 
        && <SideBarAdmin/>
        } */}

        { isAuthenticated ? (
        <button type="button" class="btn btn-warning" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
        </button>
        ) : (
        <button type="button" class="btn btn-warning" onClick={() => loginWithRedirect()}>Log In</button>
        )}

        {/* <SearchBar/> */}
              {/* <Nav.Link href="/users/:id">Perfil</Nav.Link> */}
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;