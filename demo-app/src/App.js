import React from 'react';
import Data from './data/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
import {useState} from 'react';
import './App.css' ;

const App = () => {
  const [query, setQuery] = useState('') ;
  // Getting array elements and slicing it to only show N elements
  const finalData = calcFunction(query) ; 
  const slicedArray = finalData.slice(0, 20);
  console.log(Data.length) ; 
  return <div className="container">
    <h1>MGGK IMAGE FINDER</h1>
    <div className="row"><div className="col-12">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search here (anchor text or url)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search here" onChange={event => setQuery(event.target.value)} />
      </div>
    </div></div>
    <div className="row">
      <div className="col-12">
        <h4>Results found = {finalData.length}</h4>
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default App;

function calcFunction (query) {  
  const tmp1 = Data.filter(post => {
  if (query === '') { return post; } 
  else if (post.url.toLowerCase().includes(query.toLowerCase())) {
    console.log(query);
    return post; 
  }
  else { return null ; }
  }) ;      
  
  const tmp2 = tmp1.map((post,index) => {
        return <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3" key={index}>
            <hr />
            <p>{post.url}</p>
            <p><a href={post.url}> <img src={post.url} width='200px' /> </a></p>
        </div>
  }) ;
  return tmp2 ; 
} ; 
