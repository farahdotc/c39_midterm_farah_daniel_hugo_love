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
  const [visible, setVisible] = useState('hidden');
  const [loved, setLoved] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements.search.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${inputArtist}`
        );
        artisInfoUpdated = response.data;
        history.push(inputArtist && `/artist_page/${inputArtist}`);
      } catch (e) {
        setVisible('visible');
      }
    };
    getData();
  }, [inputArtist]);

  useEffect(() => {
    const callOurDbAPI = async () => {
      try {
        const resp = await axios.get(
          `https://theaudiodb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/mostloved.php?format=album`
        );
        setLoved(resp.data.loved);
      } catch (e) {
        console.log(e);
      }
    };

    callOurDbAPI();
  }, []);

  return (
    <div >
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
          <div className="box">
            <div className="container-2">
              <Form 
                style={{ width: '40%' }}
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