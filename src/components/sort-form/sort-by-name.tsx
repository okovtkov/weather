import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

const SortByName = () => {
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
      />
    </div>
  );
};

export default SortByName;
