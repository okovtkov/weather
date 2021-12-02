import classNames from 'classnames';
import SortByName from './sort-by-name';
import Search from './search';
import './sort-form.scss';
import SortByWeatherCondition from './sort-by-weather-condition';

const SortForm = () => {
  return (
    <section className={classNames('sort-form', 'weather-content__sort')}>
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET">
        <SortByName />
        <Search />
        <SortByWeatherCondition />
      </form>
    </section>
  );
};

export default SortForm;
