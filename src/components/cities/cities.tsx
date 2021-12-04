import SmallCard from '../small-card/small-card';
import './cities.scss';

const Cities = () => {
  return (
    <section className="cities">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cities__small-cards">
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

export default Cities;
