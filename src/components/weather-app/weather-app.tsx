import { useState } from 'react';
import { City } from '../../types';
import WeatherContent from '../weather-content/weather-content';
import WeatherMap from '../weather-map';

const WeatherApp = () => {
  const [favourites, setFavourites] = useState<City[]>([]);
  const [coord, setCoord] = useState({
    lat: 59.97665957310762,
    lng: 30.42978408718145,
  });

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        onChangeFavourites={setFavourites}
        onChangeCoord={setCoord}
      />
      <WeatherMap cities={favourites} coord={coord} />
    </div>
  );
};

export default WeatherApp;