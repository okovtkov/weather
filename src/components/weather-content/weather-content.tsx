import { useState } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import { SortType, City, Coord } from '../../types';
import './weather-content.scss';

interface Props {
  favourites: City[];
  selectedCity: City | null;
  onChangeFavourites: (cities: City[]) => void;
  onChangeCoord: (coord: Coord) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onChangeWantedCity: (city: City | null) => void;
}

const WeatherContent = (props: Props) => {
  const [sortType, setSortType] = useState<SortType>('asc');

  return (
    <div className="weather-content">
      <SortForm
        className="weather-content__sort"
        sortType={sortType}
        onChangeSortType={setSortType}
      />
      <Cards
        favourites={props.favourites}
        onChangeFavourites={props.onChangeFavourites}
        onChangeCoord={props.onChangeCoord}
        onChangeSelectedCity={props.onChangeSelectedCity}
        onChangeWantedCity={props.onChangeWantedCity}
        sortType={sortType}
        selectedCity={props.selectedCity}
      />
    </div>
  );
};

export default WeatherContent;
