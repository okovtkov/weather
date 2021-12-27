/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useMemo } from 'react';
import Icon from '../icon/icon';
import './small-card.scss';
import { City, Weather } from '../../types';

interface Props {
  city: City;
  weather?: Weather;
  onAddFavourite: (city: City) => void;
}

const SmallCard = (props: Props) => {
  const clickHandler = useCallback(() => {
    props.onAddFavourite(props.city);
  }, [props]);

  const temp = useMemo(() => {
    const temperature = props.weather?.temp;
    return temperature && temperature > 0 ? `+${temperature}` : temperature;
  }, [props.weather]);

  return (
    <div className="small-card" onClick={clickHandler}>
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">{temp}°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
