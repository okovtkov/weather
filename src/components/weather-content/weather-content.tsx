import { useState, useMemo, useEffect } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import mockCities from '../cards/cardsData';
import { SortType, City } from '../../types';
import './weather-content.scss';

interface Props {
  favourites: City[];
  selectedCity: City | null;
  desiredCity: City | null;
  onChangeFavourites: (cities: City[]) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
}

const WeatherContent = (props: Props) => {
  const [sortType, setSortType] = useState<SortType>('asc');
  const [text, setText] = useState<string>('');
  const [cities, setCities] = useState<City[]>(() => {
    return mockCities.filter(
      (city) => !props.favourites.find((item) => city.id === item.id)
    );
  });
  const smallCards = useMemo(() => {
    return cities.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [cities, text]);

  useEffect(() => {
    const newCities = mockCities.filter(
      (city) => !props.favourites.find((item) => city.id === item.id)
    );
    setCities(newCities);
  }, [props.favourites]);

  return (
    <div className="weather-content">
      <SortForm
        className="weather-content__sort"
        sortType={sortType}
        text={text}
        onChangeSortType={setSortType}
        onChangeText={setText}
      />
      <Cards
        cities={smallCards}
        favourites={props.favourites}
        onChangeFavourites={props.onChangeFavourites}
        onChangeSelectedCity={props.onChangeSelectedCity}
        onWantSelectCity={props.onWantSelectCity}
        sortType={sortType}
        selectedCity={props.selectedCity}
        desiredCity={props.desiredCity}
      />
    </div>
  );
};

export default WeatherContent;
