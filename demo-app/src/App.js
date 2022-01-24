import React from 'react';
import Data from './data/mock-data.json' ;
import {useState} from 'react';
import './App.css' ;

const App = () => {
  const [query, setQuery] = useState('') ;
  console.log(Data) ; 
  return <div className="container">
    <div className="row"><div className="col-12">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Search here (anchor text or url)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search here" onChange={event => setQuery(event.target.value)} />
      </div>
    </div></div>
    <div className="row">
    {
      Data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.anchorText.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
        }).map((post,index) => {
            return <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3" key={index}>
                <hr />
                <p>{post.anchorText}</p>
                <p>{post.url}</p>
                <p><a href={post.url}>{post.anchorText}</a></p>
            </div>
      })
    }
  </div>
  </div>;
};

export default App;

