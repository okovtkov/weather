import SmallCard from '../small-card/small-card';
import './cards.scss';

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
    </section>
  );
};

export default Cards;
