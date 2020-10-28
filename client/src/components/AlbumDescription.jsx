import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AlbumDescription({ description, title, name }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        id="albumtext"
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{ borderRadius: '25px', backgroundColor: '#2b2d42' }}
      >
        Album Info
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        description={description}
        title={title}
        name={name}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AlbumDescription;
