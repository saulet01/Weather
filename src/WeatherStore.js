import {
  configure,
  observable,
  action,
  decorate
} from 'mobx';

const api_unique = '686aeb1eff8cb88780f2fbb1b51b06f8';

configure({ enforceActions: 'observed' });

class WeatherStore{
  weatherData = {};
  inputValue = '';
  loadWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_unique}&units=metric`)
    .then(response => response.json())
    .then(data => {
      this.setWeather(data);
    });
  };

  inputHandler = (event) => {
    this.inputValue = event.target.value;
  }

  setWeather = data => {
    this.weatherData = data;
  }
}

decorate(WeatherStore, {
  weatherData: observable,
  inputValue: observable,
  setWeather: action,
  inputHandler: action
});

const weatherStore = new WeatherStore();

export default weatherStore;
