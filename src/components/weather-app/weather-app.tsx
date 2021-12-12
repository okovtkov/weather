import { useState } from 'react';
import { City } from '../../types';
import WeatherContent from '../weather-content/weather-content';
import WeatherMap from '../weather-map';

const WeatherApp = () => {
  const [favourites, setFavourites] = useState<City[]>([]);

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        onChangeFavourites={setFavourites}
      />
      <WeatherMap cities={favourites} />
    </div>
  );
};

export default WeatherApp;
