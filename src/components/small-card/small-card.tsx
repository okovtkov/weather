import Icon from '../icon/icon';
import './small-card.scss';

interface Props {
  city: string;
  temperature: number;
}

const SmallCard = (props: Props) => {
  const getTemerature = (): string => {
    if (props.temperature > 0) return `+${props.temperature}`;
    if (props.temperature < 0) return `${props.temperature}`;
    return '0';
  };

  return (
    <div className="small-card">
      <span className="small-card__city">{props.city}</span>
      <span className="small-card__temperature">{getTemerature()}°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
