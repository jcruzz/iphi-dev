import React from 'react';
import '../styles/Home.css';
import bg from '../images/home-photo.jpg';
import svg from '../images/apo-logo.svg';
import About from './About';

const bgStyles = {
  background: `url("${bg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  width: '100%',
};

const Home = props => (
  <div style={bgStyles} className="Home">

    <div className="center-circle-container">
      <img className="svg" src={svg} />
      <div className="center-circle" />
    </div>
  </div>
);


export default Home;
