import { useState, useMemo } from 'react';
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCities = useMemo(() => {
    return mockCities.filter((item) => {
      if (props.favourites.find((city) => city.id === item.id)) return false;
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [props.favourites, searchQuery]);

  return (
    <div className="weather-content">
      <SortForm
        className="weather-content__sort"
        sortType={sortType}
        searchQuery={searchQuery}
        onChangeSortType={setSortType}
        onChangeSearchQuery={setSearchQuery}
      />
      <Cards
        cities={filteredCities}
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
