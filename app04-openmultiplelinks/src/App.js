import React from 'react';

function openTheseLinks0() {
  window.open('https://www.hindustantimes.com/','_blank') ;
  window.open('https://timesofindia.indiatimes.com/','_blank') ;
  window.open('https://www.bbc.com/','_blank') ;
  window.open('https://yle.fi/news','_blank') ;
  window.open('https://slashdot.org/','_blank') ;
}

function App() {
  return (
    <div className="container">
      <h1 className="display-5">App - Open Multiple Websites (in tabs)</h1>
      <hr />
      <button type="button" className="btn btn-primary" onClick={openTheseLinks0}>Open All News Websites</button>
    </div>
  );
}

export default App;
