import { useState } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import { SortType, City } from '../../types';
import './weather-content.scss';

interface Props {
  favourites: City[];
  selectedCity: City | null;
  onChangeFavourites: (cities: City[]) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
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
        onChangeSelectedCity={props.onChangeSelectedCity}
        onWantSelectCity={props.onWantSelectCity}
        sortType={sortType}
        selectedCity={props.selectedCity}
      />
    </div>
  );
};

export default WeatherContent;
