import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
//import MyApp from './MyApp';
//import MyNewsFeeds from './MyNewsFeeds';

import FeedFoodBlogs from './pages/FeedFoodBlogs';
import FeedWorldNews from './pages/FeedWorldNews';
import FeedTechnologyNews from './pages/FeedTechnologyNews';

//
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<FeedWorldNews />} />
            <Route path="feedfoodblogs" element={<FeedFoodBlogs />} />
            <Route path="feedworldnews" element={<FeedWorldNews />} />
            <Route path="feedtechnologynews" element={<FeedTechnologyNews />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

