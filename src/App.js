import React from 'react';
import { Route, Routes, BrowserRouter as Router, Switch, BrowserRouter } from "react-router-dom";


import './App.css';

import Landing from './atomic-design/pages/LandingPage/Landing';
import CharacterDetailsPage from './atomic-design/pages/Characters/CharacterDetailsPage';
import CharactersPage from './atomic-design/pages/Characters/CharactersPage';
import LocationsPage from './atomic-design/pages/Locations/LocationsPage';
import LocationDetailsPage from './atomic-design/pages/Locations/LocationDetailsPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Landing />} />
          <Route exact path="/characters" element={<CharactersPage />} />
          <Route exact path="/characters/:id" element={<CharacterDetailsPage />} />

          <Route exact path="/locations" element={<LocationsPage />} />
          <Route exact path="/locations/:name" element={<LocationDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
