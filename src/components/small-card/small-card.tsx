/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import Icon from '../icon/icon';
import './small-card.scss';
import { City } from '../../types';

interface Props {
  city: City;
  onAddFavourite: (city: City) => void;
}

const SmallCard = (props: Props) => {
  const clickHandler = useCallback(() => {
    props.onAddFavourite(props.city);
  }, [props]);

  return (
    <div className="small-card" onClick={clickHandler}>
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">+17°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
