/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useCallback, useMemo, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon/icon';
import { City, Weather } from '../../types';
import utils from '../../utils';
import './big-card.scss';
import useDragNDrop from '../../hooks/dragNdrop';

interface Props {
  city: City;
  weather?: Weather;
  favourites: City[];
  selectedCity: City | null;
  desiredCity: City | null;
  draggable: HTMLElement | null;
  onChangeFavourites: (params: City[]) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
  onChangeDraggable: (param: HTMLElement | null) => void;
}

const BigCard = (props: Props) => {
  const card = useRef(null);
  useDragNDrop({
    draggable: props.draggable,
    onChangeDraggable: props.onChangeDraggable,
    onChangeFavourites: props.onChangeFavourites,
    city: props.city,
    card: card.current,
    favourites: props.favourites,
    type: 'big-card',
  });

  const removeWantedCityHandler = useCallback(() => {
    props.onWantSelectCity(null);
  }, [props]);

  const changeWantedCityHandler = useCallback(() => {
    props.onWantSelectCity(props.city);
  }, [props]);

  const changeSelectedCityHandler = useCallback(() => {
    props.onChangeSelectedCity(props.city);
  }, [props]);

  const temp = useMemo(() => {
    const temperature = props.weather?.temp;
    return temperature && temperature > 0 ? `+${temperature}` : temperature;
  }, [props.weather?.temp]);

  return (
    <div
      ref={card}
      className={classNames('big-card', {
        'big-card_selected': props.selectedCity?.id === props.city.id,
        'big-card_desired': props.desiredCity?.id === props.city.id,
        'big-card_draggable':
          props.draggable === card.current && props.draggable !== null,
      })}
      onMouseEnter={changeWantedCityHandler}
      onMouseLeave={removeWantedCityHandler}
      onClick={changeSelectedCityHandler}
    >
      <div className="big-card__header">
        <span className="icon icon--strips-big" />
        <span className="big-card__city">{props.city.name}</span>
      </div>
      <div className="big-card__content">
        <div className="big-card__content-wrapper">
          <div className="big-card__weather-conditions">
            {props.weather && (
              <Icon name={utils.getConditionText(props.weather?.condition)} />
            )}
          </div>
          {props.weather?.windDir && (
            <div className="big-card__wind">
              <span className="icon icon--wind" />
              <span className="big-card__info">
                Ветер {props.weather.windDir},{' '}
                {props.weather.wind % 1 === 0
                  ? props.weather.wind
                  : Number(props.weather.wind.toFixed(1))}{' '}
                м/с
              </span>
            </div>
          )}
        </div>
        <span className="big-card__temperature">{temp}°</span>
      </div>
    </div>
  );
};

export default BigCard;
