import { useCallback } from 'react';
import { SortType } from '../../types';
import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

interface Props {
  sortType: SortType;
  onChangeSortType: (param: SortType) => void;
}

const SortByName = (props: Props) => {
  const changeHandler = useCallback(() => {
    const invertedType = props.sortType === 'asc' ? 'desc' : 'asc';
    props.onChangeSortType(invertedType);
  }, [props]);

  return (
    <div className="sort-form__group">
      <InputWrapper
        className="sort-form__input-wrapper"
        type="radio"
        id="alphabet-sort"
        name="alphabet-sort"
        value="alphabet-sort"
        label="Сортировка по алфавиту"
        iconName="arrow-down"
        onChange={changeHandler}
        checked
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="radio"
        id="alphabet-sort-reverse"
        name="alphabet-sort"
        value="alphabet-sort-reverse"
        label="Сортировка по алфавиту в обратном направлении"
        iconName="arrow-up"
        onChange={changeHandler}
      />
    </div>
  );
};

export default SortByName;
