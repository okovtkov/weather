import { useState, useEffect } from 'react';
import { City } from '../../types';
import WeatherContent from '../weather-content/weather-content';
import WeatherMap from '../weather-map';

const WeatherApp = () => {
  const [favourites, setFavourites] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [desiredCity, setDesiredCity] = useState<City | null>(null);

  useEffect(() => {
    const cards = localStorage.getItem('favourites');
    if (cards) setFavourites(JSON.parse(cards));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        selectedCity={selectedCity}
        onChangeFavourites={setFavourites}
        onChangeSelectedCity={setSelectedCity}
        onWantSelectCity={setDesiredCity}
      />
      <WeatherMap
        cities={favourites}
        selectedCity={selectedCity}
        desiredCity={desiredCity}
        onChangeSelectedCity={setSelectedCity}
        onWantSelectCity={setDesiredCity}
      />
    </div>
  );
};

export default WeatherApp;
