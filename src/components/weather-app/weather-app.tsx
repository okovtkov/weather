import { useState } from 'react';
import { City } from '../../types';
import WeatherContent from '../weather-content/weather-content';
import WeatherMap from '../weather-map';

const WeatherApp = () => {
  const [favourites, setFavourites] = useState<City[]>([]);
  const [coord, setCoord] = useState({
    lat: 0,
    lng: 0,
  });
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        selectedCity={selectedCity}
        onChangeFavourites={setFavourites}
        onChangeCoord={setCoord}
        onChangeSelectedCity={setSelectedCity}
      />
      <WeatherMap
        cities={favourites}
        coord={coord}
        selectedCity={selectedCity}
      />
    </div>
  );
};

export default WeatherApp;
