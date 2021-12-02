import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

const Search = () => {
  return (
    <InputWrapper
      className="sort-form__input-wrapper"
      type="search"
      name="search-city"
      value=""
      id="search"
      label="Поиск городов"
      placeholder="Название города"
    />
  );
};

export default Search;
