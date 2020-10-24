import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import MainPage from './components/MainPage';
import './App.css';

const App = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

export default App;
