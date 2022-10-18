import React from 'react';
import { Route, Routes, BrowserRouter as Router, Switch, BrowserRouter } from "react-router-dom";


import './App.css';

import Landing from './atomic-design/pages/LandingPage/Landing';
import CharacterDetailsPage from './atomic-design/pages/Characters/CharacterDetailsPage';
import CharactersPage from './atomic-design/pages/Characters/CharactersPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Landing />} />
          <Route exact path="/characters/:id" element={<CharacterDetailsPage />} />

          <Route exact path="/characters" element={<CharactersPage />} />

          <Route exact path="/characters" element={<CharactersPage />} />
          <Route exact path="/characters/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
