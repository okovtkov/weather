/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './big-card.scss';
import { useCallback } from 'react';
import { City } from '../../types';

interface Props {
  city: City;
  onDeleteFavourite: (city: City) => void;
}

const BigCard = (props: Props) => {
  const deleteFavouriteHandler = useCallback(() => {
    props.onDeleteFavourite(props.city);
  }, [props]);

  return (
    <div className="big-card" onClick={deleteFavouriteHandler}>
      <div className="big-card__header">
        <span className="icon icon--strips-big" />
        <span className="big-card__city">{props.city.name}</span>
      </div>
      <div className="big-card__content">
        <div className="big-card__content-wrapper">
          <div className="big-card__weather-conditions">
            <span className="icon icon--rainy" />
            <span className="icon icon--meteor-shower" />
            <span className="icon icon--tornado" />
          </div>
          <div className="big-card__wind">
            <span className="icon icon--wind" />
            <span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
          </div>
        </div>
        <span className="big-card__temperature">+12°</span>
      </div>
    </div>
  );
};

export default BigCard;
