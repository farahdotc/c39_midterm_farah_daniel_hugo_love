import React, { useEffect, useState } from 'react';
// import AlbumCard from './components/AlbumCard';
import AlbumCard from './AlbumCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

//Fetch the artist data
//map

const ArtistPage = () => {
  const [artist, setArtist] = useState([]);
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistPicName, setArtistPicName] = useState({});
  let { artistParam } = useParams();
  // let artistGeneralInfo;
  // artistGeneralInfo = props.location.state.detail.artists[0];
  // console.log(artistGeneralInfo.strArtistThumb)
  useEffect(() => {
    const fetchDataMainArtist = async () => {
      try{
      let response = await axios.get(
        `https://theaudiodb.com/api/v1/json/1/search.php?s=${artistParam}`
      );
      setArtistPicName(response.data.artists[0]);
      console.log(artistParam);
      console.log('firstFetch', response.data.artists[0]);
      } catch(e){
        console.log(e, 'artist not found');
      }
    };

    const fetchData = async () => {
      try{
        let response = await axios.get(
          `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistParam}`
        );

        setArtist(response.data.album);
        setArtistInfo(response.data.album[0]);
        // console.log(response.data.album);
        // console.log(response);
        console.log(artistParam);
        // console.log(props.location.state.detail.artists[0])
      } catch(e){

        console.log(e, 'artist not found');
      }
    };

    fetchDataMainArtist();
    fetchData();
  }, [artistParam]);

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: 'gray' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '6rem'
          }}
        >
          <img
            style={{ width: '400px', height: '400px', borderRadius: '50%' }}
            src={artistPicName.strArtistThumb}
            alt="band"
          />
          <h1 style={{ color: 'white', margin: '6rem' }}>
            {artistPicName.strArtist}
          </h1>
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
                  backImage={album.strAlbumCDart}
                  name={album.strArtist}
                  albumTitle={album.strAlbum}
                  genre={album.strGenre}
                  year={album.intYearReleased}
                  label={album.strLabel}
                  description={album.strDescriptionEN}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
