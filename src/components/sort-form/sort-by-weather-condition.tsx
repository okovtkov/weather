import { useCallback } from 'react';
import InputWrapper from '../input-wrapper/input-wrapper';
import conditions from './conditions';
import './sort-form.scss';

interface Props {
  onChangeCondition: (param: string[]) => void;
  conditions: string[];
}

const SortByWeatherCondition = (props: Props) => {
  const changeConditionQueryHandler = useCallback(
    (event) => {
      const condition = event.target.value;
      const conditions = new Set(props.conditions);

      if (conditions.has(condition)) {
        conditions.delete(condition);
      } else {
        conditions.add(condition);
      }

      props.onChangeCondition(Array.from(conditions));
    },
    [props]
  );

  return (
    <div className="sort-form__group">
      {conditions.map((item) => (
        <InputWrapper
          className="sort-form__input-wrapper"
          type="checkbox"
          key={item.name}
          id={item.name}
          name="weather-conditions"
          value={item.name}
          label={item.desc}
          iconName={item.name}
          onChange={changeConditionQueryHandler}
        />
      ))}
    </div>
  );
};

export default SortByWeatherCondition;
