import React from 'react';
import Data from './data/data_out/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
import {useState} from 'react';
import './App.css' ;

/* =============================================== */
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
            <p><a href={post.url}> <img src={image350px} width='100%;' /> </a></p>
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

const App = () => {
  const [query, setQuery] = useState('') ;
  // Getting array elements and slicing it to only show N elements
  const finalData = getSearchResults(query) ; 
  const numImagesToShow = 50 ; 
  const slicedArray = finalData.slice(0, numImagesToShow);
  const triggerSearchAtChars = 3 ; 
  console.log(Data.length) ; 
  /* ================ */
  return <div className="container">
    <h1 className="display-5">MGGK IMAGE FINDER (APP)</h1>
    <div className="row"><div className="col-12">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search below (with url segment or text with hyphens, minimum {triggerSearchAtChars} characters required)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search image here" onChange={event => {(event.target.value.length >= triggerSearchAtChars) ? setQuery(event.target.value) : setQuery('') }} />
      </div>
    </div></div>
    <div className="row">
      <div className="col-12">
        <h3><strong>{finalData.length} images found</strong> { (query.length >= triggerSearchAtChars) ? 'for search term ' + query : 'in database' } (showing max {numImagesToShow})</h3> 
        {displayCollapsedDetails()}
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default App;
