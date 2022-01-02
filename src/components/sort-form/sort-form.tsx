import classNames from 'classnames';
import SortByName from './sort-by-name';
import Search from './search';
import './sort-form.scss';
import SortByWeatherCondition from './sort-by-weather-condition';
import { SortType } from '../../types';

interface Props {
  searchQuery: string;
  className: string;
  sortType: SortType;
  conditions: string[];
  onChangeSortType: (param: SortType) => void;
  onChangeSearchQuery: (param: string) => void;
  onChangeCondition: (param: string[]) => void;
}

const SortForm = (props: Props) => {
  return (
    <section className={classNames('sort-form', props.className)}>
      <h2 className="visually-hidden">Форма сортировки</h2>
      <form action="#" method="GET">
        <SortByName
          sortType={props.sortType}
          onChangeSortType={props.onChangeSortType}
        />
        <Search
          query={props.searchQuery}
          onChangeQuery={props.onChangeSearchQuery}
        />
        <SortByWeatherCondition
          onChangeCondition={props.onChangeCondition}
          conditions={props.conditions}
        />
      </form>
    </section>
  );
};

export default SortForm;
