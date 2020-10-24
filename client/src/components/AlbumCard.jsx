import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const AlbumCard = (props) => {
  return (
    <Card style={{ margin: '10px', padding: '10px', width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.albumTitle}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.genre}</ListGroupItem>
        <ListGroupItem>{props.year}</ListGroupItem>
        <ListGroupItem>{props.label}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default AlbumCard;
