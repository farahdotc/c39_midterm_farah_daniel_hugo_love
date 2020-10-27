import React from 'react';
import Anime from 'react-anime';

export default function MainPageTitle() {
  return (
    <div className="App">
      <Anime
        easing="linear"
        opacity={[-1, 2]}
        loop={false}
        duration={3000}
        delay={100}
      >
        <h1
          id="message"
          style={{
            fontSize: '7rem',
            color: 'white',
            paddingBottom: '4.8rem',
            fontFamily: 'Montserrat , sanSerif'
          }}
        >
          you love music too?
        </h1>
      </Anime>
      <div>
        <Anime
          easing="linear"
          opacity={[-1, 2]}
          loop={false}
          duration={3500}
          delay={1000}
        >
          <h6
            id="message"
            style={{
              fontSize: '2rem',
              color: 'white',
              fontFamily: 'Montserrat , sanSerif'
            }}
          >
            see album info for all your favorite artist or
          </h6>
          <h6
            id="message"
            style={{
              fontSize: '2rem',
              color: 'white',
              fontFamily: 'Montserrat , sanSerif'
            }}
          >
            browse from 50 most loved albums of all time below
          </h6>
        </Anime>
      </div>
    </div>
  );
}
