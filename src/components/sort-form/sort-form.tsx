import classNames from 'classnames';
import SortByName from './sort-by-name';
import Search from './search';
import './sort-form.scss';
import SortByWeatherCondition from './sort-by-weather-condition';

interface Props {
  className: string;
}

const SortForm = (props: Props) => {
  return (
    <section className={classNames('sort-form', props.className)}>
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
