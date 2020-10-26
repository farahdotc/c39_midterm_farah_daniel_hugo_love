import React, { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
  let history = useHistory();
  let artisInfoUpdated;
  const [inputArtist, setInputArtist] = useState('');
  const [artist, setArtist] = useState([]);
  // let { artistParam } = useParams();
  const isInitialMount = useRef(true);
  const [visible, setVisible] = useState('hidden');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements.searchbar.value);
    console.dir(e.target.elements.searchbar.value);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const getData = async () => {
        try {
          let response = await axios.get(
            `https://theaudiodb.com/api/v1/json/1/search.php?s=${inputArtist}`
          );
          console.log('response:', response.data.artists);
          if (response.data.artists === null) {
            setVisible('visible');
            throw 'I got it';
          }
          setVisible('hidden');
          setArtist(response);
          artisInfoUpdated = response.data;
          history.push({
            pathname: inputArtist && `/artist_page/${inputArtist}`,
            state: { detail: artisInfoUpdated }
          });
          // console.log(inputArtist);
        } catch (e) {
          console.log(e, 'Artist NOT found in the search');
        }
      };
      getData();
      console.log(artist);
    }
  }, [inputArtist]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">TOP1</Nav.Link>
          <Nav.Link href="#pricing">TOP2</Nav.Link>
        </Nav>
        <Form onSubmit={handleSubmit} inline>
          <h3
            style={{
              color: 'red',
              fontSize: '1rem',
              paddingRight: '10px',
              paddingTop: '10px',
              visibility: visible
            }}
          >
            Artist NOT found, try again
          </h3>
          <FormControl
            id="searchbar"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          {/* <Button variant="outline-info" type='submit'>
            Search
          </Button> */}
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
