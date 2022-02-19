import React from 'react';
import Data from '../data/data_out/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
import {useState, useEffect} from 'react';

/* =============================================== */
function calculateLowResImageUrl(imageurl, desiredLowRes) {
    let imageBaseName = imageurl.substring(imageurl.lastIndexOf('/') + 1);
    let prefixAdd = 'https://cdn.mygingergarlickitchen.com/images/' ;
    let finalImage = prefixAdd + desiredLowRes + '/' + desiredLowRes + '-' + imageBaseName ; 
    //console.log(finalImage) ;
    return finalImage ; 
}
////
/* =============================================== */

const MggkRandomImageDisplay = () => {  
    // console.log(Data.length) ; 
    /* use hooks to set interval // this component updates every 5 seconds */
    const [time, setTime] = useState(Date.now());
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    /* ============== */

    const minNum = 0 ; 
    const maxNum = Data.length - 1 ;
    // Find random number between two numbers 
    const randomImageNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum ;
    const randomImageUrl = Data[randomImageNumber].url ; 
    const desiredLowRes = '550px' ; 
    const randomLowResImageUrl = calculateLowResImageUrl(randomImageUrl, desiredLowRes) ; 
    console.log(randomImageNumber, randomImageUrl, randomLowResImageUrl) ; 
  
    /* ================ */
    return <div className="container-fluid bg-dark" >
        <p className="text-center text-white">MGGK - Displaying Random Image # {randomImageNumber}</p>
        <div className="row"><div className="col-12 text-center">
        <img src={randomLowResImageUrl} alt='{randomImageNumber}' style={{ height: '100vh' }} />
        </div></div>
    </div>;
};

export default MggkRandomImageDisplay;
