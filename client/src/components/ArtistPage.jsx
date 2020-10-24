import React, { useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
// import AlbumCard from './components/AlbumCard';
import AlbumCard from './AlbumCard';

const ArtistPage = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '8rem'
        }}
      >
        <img
          style={{ width: '400px', height: '400px', borderRadius: '50%' }}
          src="https://images.unsplash.com/photo-1597355403769-eda9f5c3d2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="band image"
        />
        <h1 style={{ margin: '6rem' }}>Artist name goes here.</h1>
      </div>
      <div
        style={{
          margin: '3rem',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </div>
  );
};

export default ArtistPage;
