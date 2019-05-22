import React from 'react';
import weatherLogo from '../umbrella.svg';
import {Jumbotron} from 'react-bootstrap';

const Title = () => {
  return(
    <Jumbotron fluid className="text-center" style={{ backgroundColor: '#fc5296', backgroundImage: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)' }}>
      <h1 className="display-3 text-white d-inline">Simple Weather App <img src={weatherLogo} alt="logo" width="70"/></h1>
      <p className="lead">
        Инструкция: Введите город и нажмите "Enter"
      </p>

    </Jumbotron>
  );
}

export default Title;
