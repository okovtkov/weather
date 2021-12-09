import { useMemo, useState, useCallback } from 'react';
import SmallCard from '../small-card/small-card';
import cities from './cardsData';
import { City, SortType } from '../../types';
import './cards.scss';
import '../weather-content/weather-content.scss';
import BigCard from '../big-card/big-card';

interface Props {
  sortType: SortType;
}

const Cards = (props: Props) => {
  const [favourite, setFavourite] = useState<City[]>([]);
  const [mainCards, setMainCards] = useState<City[]>(cities);

  const changeMainHandler = useCallback(
    (city: City) => {
      const index = mainCards.findIndex((card: City) => city.id === card.id);
      mainCards.splice(index, 1);
      setMainCards(mainCards);
    },
    [mainCards]
  );

  const changeFavouritesHandler = useCallback(
    (city: City) => {
      setFavourite([...favourite, city]);
    },
    [favourite]
  );

  const sortedCities = useMemo((): City[] => {
    if (props.sortType === 'asc') {
      return mainCards.sort((a: City, b: City) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }
    return mainCards.sort((a: City, b: City) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }, [mainCards, props.sortType]);

  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {sortedCities.map((city: City) => (
          <SmallCard
            city={city}
            key={city.name}
            onChangeFavourite={changeFavouritesHandler}
            onChangeMain={changeMainHandler}
          />
        ))}
      </div>
      <div className="cards__big-cards">
        {favourite.length > 0 &&
          favourite.map((card) => <BigCard city={card} />)}
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
