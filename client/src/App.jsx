import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import MainPage from './components/MainPage';
import ArtistPage from './components/ArtistPage';
import './App.css';

const App = () => {
  return (
    <div>
      <MainPage />
      <ArtistPage />
    </div>
  );
};

export default App;
