import React from 'react';
import Data from '../data/data_out/combinedCategoryLinksData.json' ;
import {useState} from 'react';

/* =============================================== */
function showInputField (triggerSearchAtChars, setQuery) {
  return <div className="m-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search (with url segment or anchor text, {triggerSearchAtChars} chars required)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search image here" onChange={event => {(event.target.value.length >= triggerSearchAtChars) ? setQuery(event.target.value) : setQuery('') }} />
      </div>
}

function showRangeSlider (numImagesToShow, setNumImagesToShow) {
  return <div className="m-3">
        <label htmlFor="customRange1" className="form-label">Number of results to display</label>
        <input type="range" className="form-range" min="1" max="50" id="customRange1" onChange={e => setNumImagesToShow(e.target.value)} />
      </div>
}

function getSearchResults (query) {  
  const filteredData = Data.filter(post => {
  if (query === '') { return post; } 
  else if (post.URL.toLowerCase().includes(query.toLowerCase()) || post.ANCHORTEXT.toLowerCase().includes(query.toLowerCase()) ) {
    console.log(query);
    return post; 
  }
  else { return null ; }
  }) ;      

  const printFilteredDataItems = filteredData.map((post,index) => {
        return <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2" key={index}>
                    &bull; <a href={post.URL}><small>{post.ANCHORTEXT}</small></a>
                </div>
  }) ;
  return printFilteredDataItems ; 
} ; 
/* =============================================== */

const SearchBarAndResults = () => {
  const [query, setQuery] = useState('') ;
  const [numImagesToShow, setNumImagesToShow] = useState(5) ;
  // Getting array elements and slicing it to only show N elements
  const finalData = getSearchResults(query) ; 
  const slicedArray = finalData.slice(0, numImagesToShow);
  const triggerSearchAtChars = 3 ; 
  console.log(Data.length) ; 
  /* ================ */
  return <div className="container">
    <div className="row bg-dark text-white"><div className="col-12">
      {showInputField (triggerSearchAtChars, setQuery)}
      {showRangeSlider (numImagesToShow, setNumImagesToShow)}
    </div></div>
    <div className="row">
      <div className="col-12 m-3">
        <h4><strong>{finalData.length} results found</strong> { (query.length >= triggerSearchAtChars) ? 'for term ' + query : 'in database' } (showing max {numImagesToShow})</h4> 
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default SearchBarAndResults;
