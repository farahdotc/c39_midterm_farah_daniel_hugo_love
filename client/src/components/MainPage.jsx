import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtistPage from './ArtistPage';
import { useHistory } from 'react-router-dom';
// import MostLoved from './MostLoved';
import AlbumCard from './AlbumCard';

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
    <div>
      <div
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
        <h1
          style={{
            fontSize: '7rem',
            color: '#CFCECA',
            paddingBottom: '4.8rem',
            fontFamily: 'Montserrat , sanSerif'
          }}
        >
          you love music too?
        </h1>
        <Form
          style={{ width: '40%', margin: '0 20px' }}
          onSubmit={handleSubmit}
        >
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Search for your favorite artist"
            style={{ borderRadius: '23px' }}
          />
        </Form>
        <h1 style={{ color: 'red', fontSize: '1rem', visibility: visible }}>
          Artist NOT found... Try another artist
        </h1>
      </div>
      <div style={{ backgroundColor: '#2b2d42' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#CFCECA',
            paddingTop: '50px',
            textShadow: '4px 4px 0px black'
          }}
        >
          {' '}
          50 Most Loved Albums of All Time{' '}
        </h1>
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
