import React from 'react';
import MainPage from './components/MainPage';
import ArtistPage from './components/ArtistPage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/artist_page" component={ArtistPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
