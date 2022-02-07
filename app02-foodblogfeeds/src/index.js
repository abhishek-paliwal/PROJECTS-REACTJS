import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import MyNewsFeeds from './MyNewsFeeds';

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
    <MyNewsFeeds />
  </React.StrictMode>,
  document.getElementById('root')
);

