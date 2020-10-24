import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const MainPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A7A5',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1
        style={{
          fontSize: '10rem',
          color: '#CFCECA',
          paddingBottom: '4.8rem',
          fontFamily: 'Montserrat'
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
