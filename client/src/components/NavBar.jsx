import React, { useState, useEffect } from 'react';
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
  const [visible, setVisible] = useState('hidden');
  // let { artistParam } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputArtist(e.target.elements);
    console.dir(e);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${inputArtist}`
        );
        console.log(response);
        setArtist(response);
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

    console.log(artist);
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
          <FormControl
            id="searchbar"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-info" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
