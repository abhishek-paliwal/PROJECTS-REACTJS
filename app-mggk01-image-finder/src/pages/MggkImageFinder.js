import React from 'react';
import Data from '../data/data_out/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
import {useState} from 'react';

/* =============================================== */
function showInputField (triggerSearchAtChars, setQuery) {
  return <div className="m-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search below (with url segment or text with hyphens, minimum {triggerSearchAtChars} characters required)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search image here" onChange={event => {(event.target.value.length >= triggerSearchAtChars) ? setQuery(event.target.value) : setQuery('') }} />
      </div>

}

function showRangeSlider (numImagesToShow, setNumImagesToShow) {
  return <div className="m-3">
        <label htmlFor="customRange1" className="form-label">Number of images to display</label>
        <input type="range" className="form-range" min="1" max="500" id="customRange1" onChange={e => setNumImagesToShow(e.target.value)} />
      </div>
}

function calculate350pxImageUrl(url) {
    let imageBaseName = url.substring(url.lastIndexOf('/') + 1);
    let prefixAdd = 'https://cdn.mygingergarlickitchen.com/images/350px/350px-' ;
    let finalImage = prefixAdd + imageBaseName ; 
    return finalImage ; 
}

function displayCollapsedDetails () {
  return  <div>
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Dispaly all image URLs (toggle)</a>
          </div>
} ;

function getSearchResults (query) {  
  const filteredData = Data.filter(post => {
  if (query === '') { return post; } 
  else if (post.url.toLowerCase().includes(query.toLowerCase())) {
    console.log(query);
    return post; 
  }
  else { return null ; }
  }) ;      
  
  const printFilteredDataItems = filteredData.map((post,index) => {
        const image350px = calculate350pxImageUrl(post.url) ;  
        return <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2" key={index}>
            <hr />
            <p><a href={post.url}> <img alt={post.url} src={image350px} width='100%;' /> </a></p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <a href={post.url}><small>{post.url}</small></a>
                <br />
                <small><strong>Displayed image:</strong> {image350px}</small>
              </div>
            </div>
        </div>
  }) ;
  return printFilteredDataItems ; 
} ; 
/* =============================================== */

const MggkImageFinder = () => {
  const [query, setQuery] = useState('') ;
  const [numImagesToShow, setNumImagesToShow] = useState(10) ;
  // Getting array elements and slicing it to only show N elements
  const finalData = getSearchResults(query) ; 
  const slicedArray = finalData.slice(0, numImagesToShow);
  const triggerSearchAtChars = 3 ; 
  console.log(Data.length) ; 
  /* ================ */
  return <div className="container">
    <h1 className="display-5">MGGK IMAGE FINDER (APP)</h1>
    <div className="row bg-dark text-white"><div className="col-12">
      {showInputField (triggerSearchAtChars, setQuery)}
      {showRangeSlider (numImagesToShow, setNumImagesToShow)}
    </div></div>
    <div className="row">
      <div className="col-12 m-3">
        <h3><strong>{finalData.length} images found</strong> { (query.length >= triggerSearchAtChars) ? 'for search term ' + query : 'in database' } (showing max {numImagesToShow})</h3> 
        {displayCollapsedDetails()}
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default MggkImageFinder;
