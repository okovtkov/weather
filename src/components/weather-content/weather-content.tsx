import { useState } from 'react';
import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import './weather-content.scss';

const WeatherContent = () => {
  const [sortParameter, setSortParameter] = useState('asc');

  return (
    <div className="weather-content">
      <SortForm
        className="weather-content__sort"
        sortParameter={sortParameter}
        setSortParameter={(param: string): void => setSortParameter(param)}
      />
      <Cards sortParameter={sortParameter} />
    </div>
  );
};

export default WeatherContent;
