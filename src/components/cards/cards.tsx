import { useMemo, useCallback } from 'react';
import SmallCard from '../small-card/small-card';
import mockCities from './cardsData';
import { City, SortType } from '../../types';
import './cards.scss';
import '../weather-content/weather-content.scss';
import BigCard from '../big-card/big-card';

interface Props {
  sortType: SortType;
  favourites: City[];
  onChangeFavourites: (cities: City[]) => void;
}

const Cards = (props: Props) => {
  const addFavouriteHandler = useCallback(
    (city: City) => {
      props.onChangeFavourites([...props.favourites, city]);
    },
    [props]
  );

  const deleteFavouriteHandler = useCallback(
    (city: City) => {
      const cities = [...props.favourites];
      const index = props.favourites.findIndex((card) => card.id === city.id);
      cities.splice(index, 1);
      props.onChangeFavourites(cities);
    },
    [props]
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
      .filter((city) => !props.favourites.find((item) => city.id === item.id))
      .sort(compare);
  }, [ascCompare, descCompare, props.favourites, props.sortType]);

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
        {props.favourites.length > 0 &&
          props.favourites.map((card) => (
            <BigCard
              city={card}
              key={card.id}
              onDeleteFavourite={deleteFavouriteHandler}
            />
          ))}
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
