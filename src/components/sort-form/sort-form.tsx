import classNames from 'classnames';
import SortByName from './sort-by-name';
import Search from './search';
import './sort-form.scss';

const SortForm = () => {
  return (
    <section className={classNames('sort-form', 'weather-content__sort')}>
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET">
        <SortByName />
        <Search />
      </form>
    </section>
  );
};

export default SortForm;
