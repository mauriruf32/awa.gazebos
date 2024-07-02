import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../utils/AWA (1).png";
import SearchBar from '../SearchBar/SearchBar';

import "./NavBar.css"

const NavBar = () => {

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light text-black" >
  <a class="navbar-brand" href="/"><img className='logo' src={logo} alt=''/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto t-black">
      <li class="nav-item " className='text-black'>
        <a class="nav-link" href="..."><Link to="/" className='text-home' smooth={true} duration={500}>Home</Link></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="..."><Link to="about" className='text-black text-decoration-none' smooth={true} duration={500}>About</Link></a>
      </li>     
     {/* <li class="nav-item">
        <a class="nav-link" href="..."><Link to="login" className='text-black text-decoration-none' smooth={true} duration={500}>LogIn</Link></a>
      </li>    */}
    </ul>
<div className='searchbar'>
<SearchBar/>

</div>
</div>
</nav>

    </header>
  );
}

export default NavBar;




// import React from 'react';
// import logo from "../../utils/AWA (1).png";
// import SearchBar from '../SearchBar/SearchBar';
// import "./NavBar.css"

// const NavBar = () => {

//   return (
//     <header>
//       <nav class="navbar navbar-expand-lg navbar-light text-black" >
//   <a class="navbar-brand" href="/"><img className='logo' src={logo} alt=''/></a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto t-white">
//       <li class="nav-item" className='text-white'>
//         <a href="/">Home</a>
//       </li>
//       <li class="nav-item " className='text-white'>
//         <a href="/login">Login</a>
//       </li>
//       <li class="nav-item " className='text-white'>
//         <a href="/about">Nosotros</a>
//       </li>
//       {/* <li class="nav-item">
//         <a class="nav-link" href="..."><Link to="skills" className='text-white' smooth={true} duration={500}>{t("header.skills")}</Link></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="..."><Link to="projects" className='text-white' smooth={true} duration={500}>{t("header.projects")}</Link></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="..."><Link to="certifications" className='text-white' smooth={true} duration={500}>{t("header.certifications")}</Link></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="..."><Link to="contact" className='text-white' smooth={true} duration={500}>{t("header.contact")}</Link></a>
//       </li>     */}
//       {/* <div className='botones' >
//         <button className='boton'  onClick={() => i18n.changeLanguage("es")} type="button">ES</button>
//         <button className='boton'  onClick={() => i18n.changeLanguage("en")} type="button">EN</button>
//       </div> */}
//     </ul>
//     <SearchBar/>   

//   </div>
// </nav>

//     </header>
//   );
// }

// export default NavBar;


// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { Nav, NavbarCollapse } from "react-bootstrap";
// // import { useAuth0 } from "@auth0/auth0-react";
// import logo from "../../utils/AWA (1).png";
// import SearchBar from '../SearchBar/SearchBar';
// import "./NavBar.css";


// const NavBar = () => {
//   // const { user, loginWithRedirect, logout, isAuthenticated  } = useAuth0();
//   return (
//     <>
//     <Navbar  data-bs-theme="light" className='nav-container' >
//       <Container className="justify-content-start" >
//         <Navbar.Brand  href="/">
//           <img
//             alt=""
//             src={logo}
//             width="50"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <div  className='container-enlaces'>
//         <Nav.Link className='container-enlaces-primero' href="/">Home</Nav.Link>
//         <Nav.Link  href="/about">Nosotros</Nav.Link> 
//         <Nav.Link  href="/login">Login</Nav.Link>
//         </div>
//       </Container> 
//           <SearchBar/>
//     </Navbar>
//   </>
//   )
// }

// export default NavBar;