import InputWrapper from '../input-wrapper/input-wrapper';
import './sort-form.scss';

const SortByWeatherCondition = () => {
  return (
    <div className="sort-form__group">
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="rainy"
        name="weather-conditions"
        value="rainy"
        label="Дождливо"
        iconName="rainy"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="sunny"
        name="weather-conditions"
        value="sunny"
        label="Солнечно"
        iconName="sunny"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="cloudy"
        name="weather-conditions"
        value="cloudy"
        label="Облачно"
        iconName="cloudy"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="snowy"
        name="weather-conditions"
        value="snowy"
        label="Снежно"
        iconName="snowy"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="stormy"
        name="weather-conditions"
        value="stormy"
        label="Торнадо"
        iconName="stormy"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="blizzard"
        name="weather-conditions"
        value="blizzard"
        label="Гроза"
        iconName="blizzard"
      />
      <InputWrapper
        className="sort-form__input-wrapper"
        type="checkbox"
        id="metorite"
        name="weather-conditions"
        value="metorite"
        label="Метеоритный дождь"
        iconName="metorite"
      />
    </div>
  );
};

export default SortByWeatherCondition;
