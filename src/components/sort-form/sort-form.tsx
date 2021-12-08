import classNames from 'classnames';
import SortByName from './sort-by-name';
import Search from './search';
import './sort-form.scss';
import SortByWeatherCondition from './sort-by-weather-condition';

interface Props {
  className: string;
  sortParameter: string;
  setSortParameter: (param: string) => void;
}

const SortForm = (props: Props) => {
  return (
    <section className={classNames('sort-form', props.className)}>
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET">
        <SortByName
          sortParameter={props.sortParameter}
          setSortParameter={props.setSortParameter}
        />
        <Search />
        <SortByWeatherCondition />
      </form>
    </section>
  );
};

export default SortForm;
