import Icon from '../icon/icon';
import './small-card.scss';
import { City } from '../../types';

interface Props {
  city: City;
}

const SmallCard = (props: Props) => {
  return (
    <div className="small-card">
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">+17°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
