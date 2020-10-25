import React, { useEffect, useState } from 'react';
// import AlbumCard from './components/AlbumCard';
import AlbumCard from './AlbumCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Fetch the artist data
//map

const ArtistPage = (props) => {
  const [artist, setArtist] = useState([]);
  const [artistInfo, setArtistInfo] = useState([]);
  let { artistParam } = useParams();
  let artistGeneralInfo;
  artistGeneralInfo = props.location.state.detail.artists[0];
  // console.log(artistGeneralInfo.strArtistThumb)
  useEffect(() => {
    const fetchData = async () => {
    let response = await axios.get(
      `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistParam}`
    );

    setArtist(response.data.album);
    setArtistInfo(response.data.album[0])
    // console.log(response.data.album);
    // console.log(response);
    // console.log(artistParam)
    // console.log(props.location.state.detail.artists[0])
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'gray' }}>
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
          src={artistGeneralInfo.strArtistThumb}
          alt="band"
        />
        <h1 style={{ color: 'white', margin: '6rem' }}>{artistGeneralInfo.strArtist}</h1>
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
