import React from 'react';
import './App.css';
import Weather from './Components/Weather';
import City from './Components/City';
import Title from './Components/Title';
import { Container, Row, Col} from 'react-bootstrap';

const api_unique = '686aeb1eff8cb88780f2fbb1b51b06f8';

class App extends React.Component {
  state = {
    userInput: '',
    temperature: undefined,
    city: undefined,
    country: undefined,
    lon: undefined,
    lat: undefined,
    error: undefined,
  }

  inputHandlerValue = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  getWeatherInfo = async(e) => {
    const city = e.target.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_unique}&units=metric`);
    const api_response = await api_call.json();
    console.log(api_response);
    if(city){
      this.setState({
        temperature: api_response.main.temp,
        city: api_response.name,
        country: api_response.sys.country,
        lon: api_response.coord.lon,
        lat: api_response.coord.lat
      })
    }else{
      this.setState({
        error: "Input Search Values"
      })
    }
  }

  render(){
    return (
      <div>
        <Title />
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <City
                loadWeather = {this.getWeatherInfo}
                value = {this.state.userInput}
                changed = {this.inputHandlerValue}
              />
            </Col>
            <Col xs={12} md={6}>
              <Weather
                temperature = {this.state.temperature}
                city = {this.state.city}
                country = {this.state.country}
                lat = {this.state.lat}
                lon = {this.state.lon}
                error = {this.state.error}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
