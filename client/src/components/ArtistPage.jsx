import React, { useEffect, useState } from 'react';
// import AlbumCard from './components/AlbumCard';
import AlbumCard from './AlbumCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Fetch the artist data
//map

const ArtistPage = () => {
  const [artist, setArtist] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=madonna`
      );

      setArtist(response.data.album);

      console.log(response.data.album);
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
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
          src={artist.strArtistThumb}
          alt="band"
        />
        <h1 style={{ margin: '6rem' }}>{artist.strArtist}</h1>
      </div>
      <div
        style={{
          margin: '3rem',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {artist &&
          artist.map((album) => {
            //console.log(meal);
            return (
              <AlbumCard
                key={album.idAlbum}
                id={album.idAlbum}
                image={album.strAlbumThumb}
                name={album.strArtist}
                albumTitle={album.strAlbum}
                genre={album.strGenre}
                year={album.intYearReleased}
                label={album.strLabel}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ArtistPage;
