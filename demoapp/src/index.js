import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import NavBar from './components/NavBar';
import MggkImageFinder from './pages/MggkImageFinder';
import UnitsCalculator from './pages/UnitsCalculator';
import MggkRandomImageDisplay from './pages/MggkRandomImageDisplay';

//
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<UnitsCalculator />} />
            <Route path="unitscalculator" element={<UnitsCalculator />} />
            <Route path="mggkimagefinder" element={<MggkImageFinder />} />
            <Route path="mggkrandomimagedisplay" element={<MggkRandomImageDisplay />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

