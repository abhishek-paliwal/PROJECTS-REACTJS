import React from 'react';
import Data from '../data/data_out/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
//import {useState} from 'react';

/* =============================================== */
function calculateLowResImageUrl(imageurl, desiredLowRes) {
    let imageBaseName = imageurl.substring(imageurl.lastIndexOf('/') + 1);
    let prefixAdd = 'https://cdn.mygingergarlickitchen.com/images/' ;
    let finalImage = prefixAdd + desiredLowRes + '/' + desiredLowRes + '-' + imageBaseName ; 
    console.log(finalImage) ;
    return finalImage ; 
}
////
/* =============================================== */

const MggkRandomImageDisplay = () => {
  //const [query, setQuery] = useState(0) ;
  console.log(Data.length) ; 

  const minNum = 0 ; 
  const maxNum = Data.length - 1 ; 
  const randomImageNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum ;
  const randomImageUrl = Data[randomImageNumber].url ; 

  console.log(randomImageNumber, randomImageUrl) ; 

  const desiredLowRes = '550px' ; 
  const randomLowResImageUrl = calculateLowResImageUrl(randomImageUrl, desiredLowRes) ; 
  
  /* ================ */
  return <div className="container-fluid bg-dark" >
    <p className="text-center text-white">MGGK - Displaying Random Image # {randomImageNumber}</p>
    <div className="row"><div className="col-12 text-center">
      <img src={randomLowResImageUrl}  style={{ height: '90vh' }} />
    </div></div>
  </div>;
};

export default MggkRandomImageDisplay;
