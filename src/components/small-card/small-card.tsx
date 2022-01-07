import { useMemo, useRef } from 'react';
import useDragNDrop from '../../hooks/dragNdrop';
import Icon from '../icon/icon';
import './small-card.scss';
import { City, Weather } from '../../types';

interface Props {
  city: City;
  favourites: City[];
  weather?: Weather;
  onAddFavourite: (cities: City[]) => void;
}

const SmallCard = (props: Props) => {
  const card = useRef<HTMLDivElement>(null);
  useDragNDrop({
    city: props.city,
    favourites: props.favourites,
    onAddFavourite: props.onAddFavourite,
    card: card.current,
  });

  const temp = useMemo(() => {
    const temperature = props.weather?.temp;
    return temperature && temperature > 0 ? `+${temperature}` : temperature;
  }, [props.weather]);

  return (
    <div className="small-card" ref={card}>
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">{temp}°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
