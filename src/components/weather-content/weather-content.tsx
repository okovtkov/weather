import { useState } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import { SortType, City, Coord } from '../../types';
import './weather-content.scss';

interface Props {
  favourites: City[];
  onChangeFavourites: (cities: City[]) => void;
  onChangeCoord: (coord: Coord) => void;
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
        sortType={sortType}
      />
    </div>
  );
};

export default WeatherContent;
