import React from 'react';
import homelogo from '../components/logo-news.png' ; 

//
const NavBar = () => {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={homelogo} alt="App Logo" width="30" height="30" className="d-inline-block align-text-top" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  </div>
</nav>
<div class="m-2">
  <img src={homelogo} alt="App Logo" width="80" height="80" className=" mx-auto d-block" />
</div>
<hr />
</> ;
};
//
export default NavBar;

