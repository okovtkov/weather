import { useState } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import { SortType } from '../../types';
import './weather-content.scss';

const WeatherContent = () => {
  const [sortType, setSortType] = useState<SortType>('asc');

  return (
    <div className="weather-content">
      <SortForm
        className="weather-content__sort"
        sortType={sortType}
        onChangeSortType={setSortType}
      />
      <Cards sortType={sortType} />
    </div>
  );
};

export default WeatherContent;
