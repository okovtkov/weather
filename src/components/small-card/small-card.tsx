import Icon from '../icon/icon';
import './small-card.scss';

const SmallCard = () => {
  return (
    <div className="small-card">
      <span className="small-card__city">Чебоксары</span>
      <span className="small-card__temperature">+17°</span>
      <Icon name="strips-small" />
    </div>
  );
};

export default SmallCard;
