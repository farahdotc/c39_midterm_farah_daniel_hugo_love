import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import MainPageTitle from './MainPageTitle';
import { useHistory } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import Anime from 'react-anime';

const MainPage = () => {
  let history = useHistory();
  let artisInfoUpdated;
  const [inputArtist, setInputArtist] = useState('');
  const [artist, setArtist] = useState([]);
  const [visible, setVisible] = useState('hidden');
  const [loved, setLoved] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements.searchbar.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${inputArtist}`
        );
        console.log(response.data.artists[0]);
        setArtist(response.data.artists[0]);
        artisInfoUpdated = response.data;
        history.push({
          pathname: inputArtist && `/artist_page/${inputArtist}`,
          state: { detail: artisInfoUpdated }
        });
        // console.log(inputArtist);
      } catch (e) {
        console.log(e, 'Artist NOT found');
        setVisible('visible');
      }
    };

    getData();

    //console.log(artist);
  }, [inputArtist]);

  useEffect(() => {
    const callOurDbAPI = async () => {
      try {
        const resp = await axios.get(
          `https://theaudiodb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/mostloved.php?format=album`
        );
        setLoved(resp.data.loved);
        // setArtistInfo(resp.data.album[0]);
        console.log('loved', loved);
        console.log('album', resp.data.album);
        // console.log(response);
        // console.log(artistParam);
        console.log('loved', resp.data.loved[0]);
      } catch (e) {}
    };

    callOurDbAPI();
  }, []);

  return (
    <div style={{ backgroundColor: '#2b2d42' }}>
      <div
        id="message"
        style={{
          width: '100vw',
          height: '1000px',
          backgroundColor: '#A8A7A5',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <MainPageTitle />
        <Anime
          easing="linear"
          opacity={[-1, 2]}
          loop={false}
          duration={3000}
          delay={2500}
        >
          <div class="box">
            <div class="container-2">
              <Form
                style={{ width: '40%', margin: '100px' }}
                onSubmit={handleSubmit}
              >
                <input type="search" id="search" placeholder="Search..." />
              </Form>
            </div>
          </div>
          <h1 style={{ color: 'red', fontSize: '1rem', visibility: visible }}>
            Artist NOT found... Try another artist
          </h1>
        </Anime>
      </div>
      <div>
        {/* <h1
          style={{
            textAlign: 'center',
            color: '#CFCECA',
            paddingTop: '50px',
            textShadow: '4px 4px 0px black'
          }}
        >
          {' '}
          50 Most Loved Albums of All Time{' '}
        </h1> */}
        <div
          style={{
            margin: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {loved &&
            loved.map((mostLoved) => {
              return (
                <AlbumCard
                  key={mostLoved.idAlbum}
                  id={mostLoved.idAlbum}
                  image={mostLoved.strAlbumThumb}
                  backImage={mostLoved.strAlbumCDart}
                  name={mostLoved.strArtist}
                  albumTitle={mostLoved.strAlbum}
                  genre={mostLoved.strGenre}
                  year={mostLoved.intYearReleased}
                  label={mostLoved.strLabel}
                  description={mostLoved.strDescription}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

// {loved &&
//   loved.map((mostLoved) => {
//     //console.log();
//     return (
//       <MostLoved
//         key={mostLoved.idAlbum}
//         id={mostLoved.idAlbum}
//         image={mostLoved.strAlbumThumb}
//         backImage={mostLoved.strAlbumCDart}
//         name={mostLoved.strArtist}
//         albumTitle={mostLoved.strAlbum}
//         genre={mostLoved.strGenre}
//         year={mostLoved.intYearReleased}
//         label={mostLoved.strLabel}
//         description={mostLoved.strDescriptionEN}
//       />
//     );
//   })}
