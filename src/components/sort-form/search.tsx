import { useCallback, ChangeEvent } from 'react';
import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

interface Props {
  query: string;
  onChangeQuery: (param: string) => void;
}

const Search = (props: Props) => {
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      props.onChangeQuery(event.target.value);
    },
    [props]
  );

  return (
    <div className="sort-form__group">
      <InputWrapper
        className="sort-form__input-wrapper"
        type="search"
        name="search-city"
        value={props.query}
        id="search"
        label="Поиск городов"
        placeholder="Название города"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
