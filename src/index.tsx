import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WeatherContent from './components/weather-content/weather-content';
import WeatherMap from './components/weather-map/weather-map';

ReactDOM.render(
  <StrictMode>
    <div className="weather-app">
      <WeatherContent />
      <WeatherMap />
    </div>
  </StrictMode>,
  document.getElementById('root')
);
