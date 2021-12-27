import { useState, useCallback } from 'react';
import { City } from '../../types';
import WeatherContent from '../weather-content/weather-content';
import WeatherMap from '../weather-map';

const WeatherApp = () => {
  const [favourites, setFavourites] = useState<City[]>(() => {
    const cards = localStorage.getItem('favourites');
    if (cards) return JSON.parse(cards);
    return [];
  });
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [desiredCity, setDesiredCity] = useState<City | null>(null);

  const changeFavouritesHandler = useCallback((newFavouriteArray) => {
    setFavourites(newFavouriteArray);
    localStorage.setItem('favourites', JSON.stringify(newFavouriteArray));
  }, []);

  return (
    <div className="weather-app">
      <WeatherContent
        favourites={favourites}
        selectedCity={selectedCity}
        onChangeFavourites={changeFavouritesHandler}
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
