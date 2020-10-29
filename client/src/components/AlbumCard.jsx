import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import AlbumDescription from './AlbumDescription';

const AlbumCard = (props) => {
  const [image, setImage] = useState(props.image);
  return (
    <Card style={{ margin: '10px', padding: '10px', width: '18rem' }}>
      <Card.Img
        variant="top"
        src={image}
        onMouseEnter={() => {
          setImage(props.backImage);
        }}
        onMouseOut={() => {
          setImage(props.image);
        }}
      />
      <Card.Body>
        <Card.Title id="albumtext">{props.albumTitle}</Card.Title>
        <AlbumDescription
          id="albumtext"
          description={props.description}
          title={props.albumTitle}
          name={props.name}
        />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem id="albumtext">{props.genre}</ListGroupItem>
        <ListGroupItem id="albumtext">{props.year}</ListGroupItem>
        <ListGroupItem id="albumtext">{props.label}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default AlbumCard;
