import { useMemo, useState, useCallback } from 'react';
import SmallCard from '../small-card/small-card';
import mockCities from './cardsData';
import { City, SortType } from '../../types';
import './cards.scss';
import '../weather-content/weather-content.scss';
import BigCard from '../big-card/big-card';

interface Props {
  sortType: SortType;
}

const Cards = (props: Props) => {
  const [favourites, setFavourites] = useState<City[]>([]);

  const addFavouriteHandler = useCallback(
    (city: City) => {
      setFavourites([...favourites, city]);
    },
    [favourites]
  );

  const ascCompare = useCallback((a: City, b: City) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }, []);

  const descCompare = useCallback((a: City, b: City) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }, []);

  const cities = useMemo((): City[] => {
    const compare = props.sortType === 'asc' ? ascCompare : descCompare;
    return mockCities
      .filter((city) => !favourites.some((item) => city.id === item.id))
      .sort(compare);
  }, [ascCompare, descCompare, favourites, props.sortType]);

  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {cities.map((city: City) => (
          <SmallCard
            city={city}
            key={city.id}
            onAddFavourite={addFavouriteHandler}
          />
        ))}
      </div>
      <div className="cards__big-cards">
        {favourites.length > 0 &&
          favourites.map((card) => <BigCard city={card} />)}
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
