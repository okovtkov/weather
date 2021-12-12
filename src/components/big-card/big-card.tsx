/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import './big-card.scss';
import classNames from 'classnames';
import { City, Coord } from '../../types';

interface Props {
  city: City;
  selectedCity: string;
  onChangeCoord: (coord: Coord) => void;
  onChangeSelectedCity: (id: string) => void;
}

const BigCard = (props: Props) => {
  const changeSelectedCityHandler = useCallback(() => {
    props.onChangeCoord({ lat: props.city.lat, lng: props.city.lon });
    props.onChangeSelectedCity(props.city.id);
  }, [props]);

  return (
    <div
      className={classNames('big-card', {
        'big-card__selected': props.selectedCity === props.city.id,
      })}
      onClick={changeSelectedCityHandler}
    >
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
            <span className="big-card__info">Ветер ЮВ, 0-1 м/с</span>
          </div>
        </div>
        <span className="big-card__temperature">+12°</span>
      </div>
    </div>
  );
};

export default BigCard;
