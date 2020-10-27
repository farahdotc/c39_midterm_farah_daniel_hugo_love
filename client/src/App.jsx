import React from 'react';
import MainPage from './components/MainPage';
import ArtistPage from './components/ArtistPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/artist_page/:artistParam"
            component={ArtistPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
