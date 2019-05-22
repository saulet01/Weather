import React from 'react';
import {Card} from 'react-bootstrap';

const Weather = (props) => {
  let city_info = null;
  if(props.weatherData != null){
    city_info = (
      <Card border="danger" style={{ width: '30rem' }}>
        <Card.Body>
          <p>Город: {props.weatherData.name} ({props.weatherData.sys.country})</p>
          <p>Температура: {props.weatherData.main.temp} градусов</p>
          <p>Местоположение: {props.weatherData.coord.lat}, {props.weatherData.coord.lon}</p>
        </Card.Body>
      </Card>
    );
  }
  return(
    <div>
      { city_info }
    </div>

  )
}

export default Weather;
