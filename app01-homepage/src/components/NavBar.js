import React from 'react';
//
const NavBar = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/ilovefinland.jpg" alt="" width="30" height="30" className="d-inline-block align-text-top" /> AAA
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="https://www.mygingergarlickitchen.com/">MGGK</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.concepro.com/">Concepro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://adoria.xyz/">Ado.xyz</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Apps
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="https://app-mggk01-image-finder.abhishekpali.us/index.html">app-mggk01-image-finder</a></li>
            <li><a className="dropdown-item" href="https://app02-foodblogfeeds.abhishekpali.us/index.html">app02-foodblogfeeds</a></li>
            <li><a className="dropdown-item" href="https://app03-tictactoe.abhishekpali.us/index.html">app03-tictactoe</a></li>
            <li><a className="dropdown-item" href="https://app04-openmultiplelinks.abhishekpali.us/index.html">app04-openmultiplelinks</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> ;
};
//
export default NavBar;

