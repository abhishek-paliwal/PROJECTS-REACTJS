import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import NavBar from './components/NavBar';
import MggkImageFinder from './pages/MggkImageFinder';

//
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<MggkImageFinder />} />
            <Route path="mggkimagefinder" element={<MggkImageFinder />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

