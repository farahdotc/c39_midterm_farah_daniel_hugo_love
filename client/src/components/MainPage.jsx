import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const MainPage = () => {
  const [artist, setArtist] = useState('madonna');
  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        `theaudiodb.com/api/v1/json/1/search.php?s=madonna`
      );
      setArtistInfo(response);
      console.log(artistInfo);
    };

    getData();
  }, []);

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
      <Form.Group style={{ width: '40%', margin: '0 20px' }}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search for your favorite artist"
          style={{ borderRadius: '23px' }}
        />
      </Form.Group>
    </div>
  );
};

export default MainPage;
