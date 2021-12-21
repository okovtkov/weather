import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WeatherApp from './components/weather-app/weather-app';

ReactDOM.render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
  document.getElementById('root')
);
