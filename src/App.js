import React from 'react';
import './App.css';
import Weather from './Components/Weather';
import City from './Components/City';
import Title from './Components/Title';
import { Container, Row, Col} from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

const App = (props) => {

  const getCityInfo = (city) => {
    props.WeatherStore.loadWeather(city);
  }

  let parse_Data = null;
  if(toJS(props.WeatherStore.weatherData.name)){
    parse_Data = (toJS(props.WeatherStore.weatherData));
  }
  return (
    <div>
      <Title />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <City
              cityInfo = {getCityInfo}
              value = {props.WeatherStore.inputValue}
              changed = {props.WeatherStore.inputHandler}
            />
          </Col>
          <Col xs={12} md={6}>
            <Weather
              weatherData = { parse_Data }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default inject("WeatherStore")(observer(App));
