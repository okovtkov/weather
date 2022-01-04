/* eslint-disable no-param-reassign */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../icon/icon';
import './small-card.scss';
import { City, Weather } from '../../types';

interface Props {
  city: City;
  weather?: Weather;
  onAddFavourite: (city: City) => void;
}

interface MouseDownInfo {
  startLeft: number;
  startTop: number;
  startX: number;
  startY: number;
}

const SmallCard = (props: Props) => {
  const [draggable, setDraggable] = useState<HTMLElement | null>(null);
  const [mouseDownInfo, setMouseDownInfo] = useState<MouseDownInfo>({
    startLeft: 0,
    startTop: 0,
    startX: 0,
    startY: 0,
  });
  const city = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = useCallback(
    (e) => {
      if (!draggable) return;
      draggable.style.left = `${
        mouseDownInfo.startLeft + (e.pageX - mouseDownInfo.startX)
      }px`;
      draggable.style.top = `${
        mouseDownInfo.startTop + (e.pageY - mouseDownInfo.startY)
      }px`;
    },
    [draggable, mouseDownInfo]
  );

  const mouseDownHandler = useCallback((event) => {
    const obj = city.current;
    if (!obj) return;

    if (document.querySelector('.small-card_active')) return;
    const clone = obj.cloneNode(true) as HTMLElement;
    obj.classList.add('small-card_draggable');
    obj.after(clone);
    clone.classList.add('small-card_active');
    setDraggable(obj);
    setMouseDownInfo({
      startLeft: obj.offsetLeft,
      startTop: obj.offsetTop,
      startX: event.pageX,
      startY: event.pageY,
    });
  }, []);

  useEffect(() => {
    if (draggable) document.addEventListener('mousemove', mouseMoveHandler);
  }, [draggable, mouseMoveHandler]);

  const mouseUpHandler = useCallback(() => {
    const clone = document.querySelector('.small-card_active');
    clone?.remove();

    const draggable = city.current;
    if (!draggable) return;

    draggable.classList.remove('small-card_draggable');
    draggable.style.top = `${mouseDownInfo.startTop}px`;
    draggable.style.left = `${mouseDownInfo.startLeft}px`;
    document.removeEventListener('mousemove', mouseMoveHandler);
  }, [mouseDownInfo.startLeft, mouseDownInfo.startTop, mouseMoveHandler]);

  const temp = useMemo(() => {
    const temperature = props.weather?.temp;
    return temperature && temperature > 0 ? `+${temperature}` : temperature;
  }, [props.weather]);

  return (
    <div className="small-card" ref={city}>
      <span className="small-card__city">{props.city.name}</span>
      <span className="small-card__temperature">{temp}°</span>
      <Icon
        name="strips-small"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      />
    </div>
  );
};

export default SmallCard;
