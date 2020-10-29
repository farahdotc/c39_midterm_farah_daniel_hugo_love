import React, { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Logo from "../Assets/headphones.png";

const NavBar = () => {
  let history = useHistory();
  let artisInfoUpdated;
  const [inputArtist, setInputArtist] = useState('');
  const isInitialMount = useRef(true);
  const [visible, setVisible] = useState('hidden');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements.searchbar.value);
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

          if (response.data.artists === null) {
            setVisible('visible');
            throw 'I got it';
          }
          setVisible('hidden');
          artisInfoUpdated = response.data;
          history.push({
            pathname: inputArtist && `/artist_page/${inputArtist}`,
            state: { detail: artisInfoUpdated }
          });
        } catch (e) {
          console.log(e, 'Artist NOT found in the search');
        }
      };
      getData();
    }
  }, [inputArtist]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Link to="/">
              <img
                src={Logo}
                alt="headphones logo"
                width="40px"
                height="40px"
              />
            </Link>
        </Nav>
        <Form onSubmit={handleSubmit} inline id="albumtext">
          <h3
            style={{
              color: 'red',
              fontSize: '1rem',
              paddingRight: '10px',
              paddingTop: '10px',
              visibility: visible
            }}
            id="albumtext"
          >
            Artist NOT found, try again
          </h3>

          <FormControl
            style={{ borderRadius: '25px' }}
            id="searchbar"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
