import BigCard from '../big-card/big-card';
import SmallCard from '../small-card/small-card';
import './cards.scss';
import '../weather-content/weather-content.scss';

const Cards = () => {
  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className="cards__big-cards">
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
        <BigCard />
      </div>
    </section>
  );
};

export default Cards;
