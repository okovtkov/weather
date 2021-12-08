import { useCallback } from 'react';
import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

interface Props {
  sortParameter: string;
  setSortParameter: (param: string) => void;
}

const SortByName = (props: Props) => {
  const onChange = useCallback(() => {
    return props.sortParameter === 'asc'
      ? props.setSortParameter('desc')
      : props.setSortParameter('asc');
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
        onChange={onChange}
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
        onChange={onChange}
      />
    </div>
  );
};

export default SortByName;
