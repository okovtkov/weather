import { useMemo } from 'react';
import Icon from '../icon/icon';
import './small-card.scss';
import { City } from '../../types';

interface Props {
  city: City;
}

const SmallCard = (props: Props) => {
  const temperature = useMemo((): string => {
    const sign = props.city.temperature > 0 ? '+' : '';
    return `${sign}${props.city.temperature}`;
  }, [props.city.temperature]);

  return (
    <div className="small-card">
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">{temperature}°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
