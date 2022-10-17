import React from 'react';
import { Route, Routes, BrowserRouter as Router, Switch, BrowserRouter } from "react-router-dom";


import './App.css';

import Landing from './atomic-design/pages/LandingPage/Landing';
import CharacterDetailsPage from './atomic-design/pages/PostDetailPage/CharacterDetailsPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
