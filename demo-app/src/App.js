import React from 'react';
import Data from './data/data_out/mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv.json' ;
import {useState} from 'react';
import './App.css' ;

const App = () => {
  const [query, setQuery] = useState('') ;
  // Getting array elements and slicing it to only show N elements
  const finalData = calcFunction(query) ; 
  const slicedArray = finalData.slice(0, 20);
  console.log(Data.length) ; 
  return <div className="container">
    <h1>MGGK IMAGE FINDER APP</h1>
    <div className="row"><div className="col-12">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search here (anchor text or url)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search here" onChange={event => setQuery(event.target.value)} />
      </div>
    </div></div>
    <div className="row">
      <div className="col-12">
        <h4>Results found = {finalData.length}</h4>
        {displayCollapsedDetails()}
      </div>
      {slicedArray}
    </div>
  </div>;
};

export default App;

/* =============================================== */
function displayCollapsedDetails () {
  return  <div>
            <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Dispaly all image URLs (toggle)</a>
          </div>
} ;

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
        return <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2" key={index}>
            <hr />
            <p><a href={post.url}> <img src={post.url} width='100%;' /> </a></p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                {post.url}
              </div>
            </div>
        </div>
  }) ;
  return tmp2 ; 
} ; 

