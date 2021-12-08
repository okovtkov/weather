import { useCallback, useState, ChangeEvent } from 'react';
import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

const Search = () => {
  const [text, setText] = useState('');

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  return (
    <div className="sort-form__group">
      <InputWrapper
        className="sort-form__input-wrapper"
        type="search"
        name="search-city"
        value={text}
        id="search"
        label="Поиск городов"
        placeholder="Название города"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
