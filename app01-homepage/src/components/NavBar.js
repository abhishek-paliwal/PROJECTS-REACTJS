import React from 'react';
//import homelogo from '../components/Homelogo.svg'
import homelogo from '../components/logo-home.png'

//
const NavBar = () => {
  return <><nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={homelogo} alt="App Logo" width="30" height="30" className="d-inline-block align-text-top" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" target="_blank" rel="noreferrer noopener" href="https://www.mygingergarlickitchen.com/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MGGK
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.mygingergarlickitchen.com/">MGGK - Homepage</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.gmail.com">MGGK Gmail</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/MyGingerGarlicKitchen">MGGK Facebook</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://instagram.com/mygingergarlickitchen/">MGGK Instragram</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.pinterest.com/anupamapaliwal">MGGK Pinterest</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/c/Mygingergarlickitchen">MGGK Youtube</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app.grammarly.com/">Grammarly</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.verywellfit.com/recipe-nutrition-analyzer-4157076">Recipe Nutrition Analyzer</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://websiteseochecker.com/domain-authority-checker/">DA Checker (Domain authority)</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.whois.com/whois">Whois Checker</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app-mggk01-image-finder.pages.dev/unitscalculator">MGGK App - UnitsCalculator</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer noopener" href="https://www.mygingergarlickitchen.com/">MGGK</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer noopener" href="https://www.keysearch.co/user/login">KeySearch</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" target="_blank" rel="noreferrer noopener" href="https://app01-homepage.pages.dev/" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our-Sites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://notes.abhishekpali.us/">Notes.abhishekpali.us</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.concepro.com/">Concepro</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.leelasrecipes.com/">LeelasRecipes</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://adoria.xyz/">Ado.xyz</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.abhishekpaliwal.fi/">AbhishekPaliwal.fi</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.hashbanghacks.store">#!HACKS</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.abhishekpali.us/">AbhishekPali.us</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/LCE/big_bold_random_quotes.html">Want-Wisdom?</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/LCE/personal_shorturl_creator.html">URL-Shorteners</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
            Designing-Tools
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://abhishek-paliwal.github.io/wallpapers-index.html">Design4Love</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/all-polygonal-backgrounds/all-lowpoly-backgrounds-index.html">Poly-Textures</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/LCE/google_material_design_colors.html">Material-Colors</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/logos/all-logos-index.html">All-Logos</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/dropbox-public-files/LCE/_typography_wallpaper_creator/_CSS-Typography-EFFECTS/slabText-master/index_final.html">Bold-Wallpapers</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://abhishek-paliwal.github.io/wallpaper_creators/JSON-templates-for-design/Index-of-all-JSON-files.html">All JSON Templates</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://downloads.concepro.com/_BRAND-CONCEPRO/concepro-08-social/sharing/Index-of-SocialMedia-files-BS.html">Social Media Images</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
            Apps
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app01-homepage.pages.dev">app01-homepage</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app-mggk01-image-finder.pages.dev">app-mggk01-image-finder</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app02-foodblogfeeds.pages.dev">app02-foodblogfeeds</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://app04-openmultiplelinks.abhishekpali.us/index.html">app04-openmultiplelinks</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.abhishekpali.us/apps/app01-openpgp-encrypt-decrypt/">vanillaJS - app01-openpgp-encrypt-decrypt</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://www.perfect-hospital.com">Perfect-Hospital.com</a></li>
            
          </ul>
        </li>
      </ul>
    </div>
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

