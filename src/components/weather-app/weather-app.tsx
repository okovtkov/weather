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
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [wantedCity, setWantedCity] = useState<City | null>(null);

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        selectedCity={selectedCity}
        onChangeFavourites={setFavourites}
        onChangeCoord={setCoord}
        onChangeSelectedCity={setSelectedCity}
        onChangeWantedCity={setWantedCity}
      />
      <WeatherMap
        cities={favourites}
        coord={coord}
        selectedCity={selectedCity}
        wantedCity={wantedCity}
        onChangeSelectedCity={setSelectedCity}
        onChangeWantedCity={setWantedCity}
      />
    </div>
  );
};

export default WeatherApp;
