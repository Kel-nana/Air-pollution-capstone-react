import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Details from './components/details';
import './App.scss';

const App = () => (
  <Router>
    <main className="primaryColor">
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/detail/:cityId" element={<Details />} />
      </Routes>
    </main>
  </Router>
);
export default App;
