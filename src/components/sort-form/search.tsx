import { useState } from 'react';
import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

const Search = () => {
  const [text, setText] = useState('');

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
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default Search;
