import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtistPage from './ArtistPage';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
  let history = useHistory();
  let artisInfoUpdated;
  const [inputArtist, setInputArtist] = useState('');
  const [artist, setArtist] = useState([]);
  const [visible, setVisible] = useState('hidden');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements.searchbar.value);
  };

  useEffect(() => {
    const getData = async () => {
      try{
        let response = await axios.get(
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${inputArtist}`
        );
        console.log(response.data.artists[0]);
        setArtist(response.data.artists[0]);
        artisInfoUpdated = response.data;
        history.push({pathname: inputArtist && `/artist_page/${inputArtist}`, state: {detail: artisInfoUpdated}});
        // console.log(inputArtist);
      } catch(e){
        console.log(e, 'Artist NOT found')
        setVisible('visible')
      }
    };

    getData();
    
    //console.log(artist);
  }, [inputArtist]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A7A5',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      {/* <h1>{artist.strArtist}</h1>
      <h1>{artist.idArtist}</h1>
      <h1>{artist.strGenre}</h1>
      <h1>{artist.strArtistThumb}</h1>
      <h1>{inputArtist}</h1> */}
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
      <Form style={{ width: '40%', margin: '0 20px' }} onSubmit={handleSubmit}>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search for your favorite artist"
          style={{ borderRadius: '23px' }}
        />
      </Form>
      <h1 style={{color: 'red', fontSize: '1rem', visibility: visible}}>Artist NOT found... Try another artist</h1>
    </div>
  );
};

export default MainPage;
