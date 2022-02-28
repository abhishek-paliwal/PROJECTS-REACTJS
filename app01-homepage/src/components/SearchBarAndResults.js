import React from 'react';
import DataLinks from '../data/data_out/combinedCategoryLinksData.json' ;
import DataMGGK from '../data/data_out/mggkWebpagesData.json' ;
import {useState} from 'react';

/* =============================================== */
function showInputField (triggerSearchAtChars, setQuery, setNumImagesToShow) {
  return <div className="m-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter single word (url/anchor-text, {triggerSearchAtChars} chars min)</label>
        <input type="text" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="search here" 
        onChange={event => {(event.target.value.length >= triggerSearchAtChars) ? setQuery(event.target.value) : setQuery('') ; setNumImagesToShow(4) }} />
      </div>
}
//////
function showDropdownSelectMenu (setInputDataToUse) {
  return <div className="m-3">
        <select multiple={false} className="form-select" aria-label="Default select menu" value="defaultOption" onChange={e => setInputDataToUse(e.target.value) }>
        <option value="defaultOption">Select from option below</option>
        <option value="dataLinks">Links (default)</option>
        <option value="dataMGGK">MGGK Webpages</option>
        </select>
      </div>
}
//////
function showRangeSlider (numImagesToShow, setNumImagesToShow) {
  return <div className="m-3">
        <label htmlFor="customRange1" className="form-label">Number of results to display</label>
        <input type="range" 
        className="form-range" 
        min="1" 
        max="30" 
        id="customRange1" 
        onChange={e => setNumImagesToShow(e.target.value) } />
      </div>
}
//////
function getSearchResults_for_datalinks (query) { 
  let inputData = DataLinks ;
  //
  const filteredData = inputData.filter(post => {
  if (query === '') { return post; } 
  else if (post.URL.toLowerCase().includes(query.toLowerCase()) || post.ANCHORTEXT.toLowerCase().includes(query.toLowerCase()) ) {
    console.log(query);
    return post; 
  }
  else { return null ; }
  }) ;      
  //
  const printFilteredDataItems = filteredData.map((post,index) => {
        return  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3" key={index}>
                  <div className="m-2 p-2 rounded bg-warning rounded text-center">
                    <a target="_blank" rel="noopener noreferrer" href={post.URL}><strong>{post.ANCHORTEXT}</strong></a>
                  </div>
                </div>
  }) ;
  return printFilteredDataItems ; 
} ; 
//////
function getSearchResults_for_dataMGGK (query) { 
  const inputData = DataMGGK ;
  const filteredData = inputData.filter(post => {
  if (query === '') { return post; } 
  else if (post.url_value.toLowerCase().includes(query.toLowerCase()) || post.seo_title_value.toLowerCase().includes(query.toLowerCase()) ) {
    console.log(query);
    return post; 
  }
  else { return null ; }
  }) ;      
  //
  const printFilteredDataItems = filteredData.map((post,index) => {
        return  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3" key={index}>
                  <div className="m-2 p-2 rounded bg-warning rounded text-center">
                    <a target="_blank" rel="noopener noreferrer" href={post.url_value}><strong>{post.seo_title_value}</strong></a>
                  </div>
                </div>
  }) ;
  return printFilteredDataItems ; 
} ; 
//////
function whichDatatoUseFinally (query,inputDataToUse) {
  let finalData = getSearchResults_for_datalinks(query) ; 
  //
  if (inputDataToUse === "dataLinks" ) { 
    finalData = getSearchResults_for_datalinks(query) ; 
  } 
  else if (inputDataToUse === "dataMGGK") { 
    finalData = getSearchResults_for_dataMGGK(query) ;
  }
  else { 
    finalData = getSearchResults_for_datalinks(query) ;
  } ; 
  console.log(inputDataToUse) ;
  return finalData ; 
}
//////
/* =============================================== */

const SearchBarAndResults = () => {
  const [query, setQuery] = useState('') ;
  const [numImagesToShow, setNumImagesToShow] = useState(0) ;
  const [inputDataToUse, setInputDataToUse] = useState('dataLinks') ;
  //
  // Getting array elements and slicing it to only show N elements
  const finalData = whichDatatoUseFinally (query,inputDataToUse) ;
  const slicedArray = finalData.slice(0, numImagesToShow);
  const triggerSearchAtChars = 2 ; 
  // console.log(Data.length) ; 
  /* ================ */
  return <div className="container">
    <div className="row bg-dark text-white"><div className="col-12">
      {showInputField (triggerSearchAtChars, setQuery, setNumImagesToShow)}
      {showDropdownSelectMenu (setInputDataToUse)}
      {showRangeSlider (numImagesToShow, setNumImagesToShow)}
    </div></div>
    <div className="row">
      <div className="col-12 m-2 p-2 text-white">
        <h4><strong>{finalData.length} links found</strong> { (query.length >= triggerSearchAtChars) ? 'for term ' + query : 'in this database > ' + inputDataToUse } (showing max {numImagesToShow})</h4> 
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default SearchBarAndResults;
