import React from 'react';
/* ========================== */

function openLinks1() {
  window.open('https://news.google.com/','_blank') ;
  window.open('https://slashdot.org/','_blank') ;
  window.open('https://www.hindustantimes.com/','_blank') ;
  window.open('https://timesofindia.indiatimes.com/','_blank') ;
  window.open('https://www.bbc.com/','_blank') ;
  window.open('https://www.nytimes.com/','_blank') ;
  window.open('https://yle.fi/news','_blank') ;
}

function displayLinks1() {
  return <div className="card">
    <div className="card-body">
      <h5 className="card-title">News Websites</h5>
        <button type="button" className="btn btn-primary" onClick={openLinks1}>Open All News Websites</button>
    </div>
  </div>
}

/* ========================== */
function App() {
  const displayLinks1results = displayLinks1() ;
  return (
      <div className="section">
        <div className="row m-2">
          <h1 className="display-5">Open Multiple Websites (in tabs) - App</h1>
          {displayLinks1results}
        </div>
    </div>
  );
}

export default App;
