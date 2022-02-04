import React from 'react';
import homelogo from '../components/Homelogo.svg'

//
const NavBar = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={homelogo} alt="App Logo" width="30" height="30" className="d-inline-block align-text-top" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="https://www.mygingergarlickitchen.com/">MGGK</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.concepro.com/">Concepro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.leelasrecipes.com/">LeelasRecipes</a>
        </li>        
        <li className="nav-item">
          <a className="nav-link" href="https://adoria.xyz/">Ado.xyz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://downloads.concepro.com/dropbox-public-files/LCE/big_bold_random_quotes.html">Want-Wisdom?</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://downloads.concepro.com/dropbox-public-files/LCE/personal_shorturl_creator.html">URL-Shorteners</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designing-Tools
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><a className="dropdown-item" href="https://abhishek-paliwal.github.io/wallpapers-index.html">Design4Love</a></li>
            <li><a className="dropdown-item" href="https://downloads.concepro.com/dropbox-public-files/all-polygonal-backgrounds/all-lowpoly-backgrounds-index.html">Poly-Textures</a></li>
            <li><a className="dropdown-item" href="https://downloads.concepro.com/dropbox-public-files/LCE/google_material_design_colors.html">Material-Colors</a></li>
            <li><a className="dropdown-item" href="https://downloads.concepro.com/dropbox-public-files/logos/all-logos-index.html">All-Logos</a></li>
            <li><a className="dropdown-item" href="https://downloads.concepro.com/dropbox-public-files/LCE/_typography_wallpaper_creator/_CSS-Typography-EFFECTS/slabText-master/index_final.html">Bold-Wallpapers</a></li>
            <li><a className="dropdown-item" href="https://abhishek-paliwal.github.io/wallpaper_creators/JSON-templates-for-design/Index-of-all-JSON-files.html">All JSON Templates</a></li>

            

          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Apps
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
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

