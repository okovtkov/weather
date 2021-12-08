import SmallCard from '../small-card/small-card';
import cities from './cardsData';
import { City } from '../../types';
import './cards.scss';
import '../weather-content/weather-content.scss';

interface Props {
  sortParameter: string;
}

const Cards = (props: Props) => {
  const sortedCities = (): City[] => {
    if (props.sortParameter === 'asc') {
      return cities.sort((a: City, b: City) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }
    return cities.sort((a: City, b: City) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  };

  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {sortedCities().map((city: City) => (
          <SmallCard city={city} key={city.name} />
        ))}
      </div>
      <div className="cards__big-cards">
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
