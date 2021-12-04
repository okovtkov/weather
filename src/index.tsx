import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WeatherContent from './components/weather-content/weather-content';

ReactDOM.render(
  <StrictMode>
    <WeatherContent />
  </StrictMode>,
  document.getElementById('root')
);
