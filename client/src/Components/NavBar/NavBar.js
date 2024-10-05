import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../utils/AWA (1).png";
import SearchBar from '../SearchBar/SearchBar';
// import LogInButton from '../LogInButton/LogInButton';
// import UserProfile from '../UserProfile/UserProfile';

import "./NavBar.css"

const NavBar = ({user}) => {

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
        <a class="nav-link" href="/"><Link to="/" className='text-home' smooth={true} duration={500}>Home</Link></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="/about"><Link to="/about" className='text-about' smooth={true} duration={500}>About</Link></a>
      </li>   
      {
            !user ? (
              <li class="nav-item">
              <a class="nav-link" href="/profiles"><Link to="/profiles" className='text-about' smooth={true} duration={500}>Admin</Link></a>
            </li>  

            ) : (
              null

            )
          }
 
      <li class="nav-item">
        <a class="nav-link" href="/profiles"><Link to="/register" className='text-about' smooth={true} duration={500}>Registrate</Link></a>
      </li> 
     <li class="nav-item">
        <a class="nav-link" href="/login"><Link to="/login" className='text-about' smooth={true} duration={500}>LogIn</Link></a>
      </li>   
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




