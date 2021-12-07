import SmallCard from '../small-card/small-card';
import cities, { City } from './cardsData';
import './cards.scss';
import '../weather-content/weather-content.scss';

const sortedCities = (): City[] => {
  return cities.sort((a: City, b: City) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

const Cards = () => {
  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {sortedCities().map((item: City) => (
          <SmallCard
            name={item.name}
            temperature={item.temperature}
            key={item.name}
          />
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
