import { useCallback, useEffect, useState } from 'react';
import { City } from '../types';

interface Props {
  city: City;
  favourites: City[];
  onAddFavourite: (cities: City[]) => void;
  card: HTMLElement | null;
}

interface MouseDownInfo {
  startLeft: number;
  startTop: number;
  startX: number;
  startY: number;
}

export default function useDragNDrop(props: Props) {
  const [draggable, setDraggable] = useState<HTMLElement | null>(null);
  const [mouseDownInfo, setMouseDownInfo] = useState<MouseDownInfo>({
    startLeft: 0,
    startTop: 0,
    startX: 0,
    startY: 0,
  });

  const getTarget = useCallback((e) => {
    const target = document.elementFromPoint(
      e.clientX,
      e.clientY
    ) as HTMLElement;
    if (!target) return null;
    return target;
  }, []);

  const createEmptyCard = useCallback((target) => {
    const favourite = target.closest('.big-card');
    const newEmpty = document.createElement('div');
    const oldEmpty = document.querySelector('.big-card--empty');
    newEmpty.classList.add('big-card--empty');

    if (target.closest('.big-card__header')) favourite.before(newEmpty);
    if (target.closest('.big-card__content')) favourite.after(newEmpty);
    if (target.classList.contains('big-card--empty')) return;
    if (
      target.classList.contains('cards__big-cards') ||
      target.classList.contains('cards__help')
    ) {
      const container = document.querySelector('.cards__big-cards');
      container?.append(newEmpty);
    }

    if (oldEmpty) oldEmpty.remove();
  }, []);

  const addFavourite = useCallback(() => {
    const childrens = document.querySelector('.cards__big-cards')?.children;
    const empty = document.querySelector('.big-card--empty');
    if (!childrens || !empty) return;
    const cards = Array.from(childrens);
    const index = cards.findIndex((item) =>
      item.classList.contains('big-card--empty')
    );
    if (props.favourites.length === 0) {
      props.onAddFavourite([props.city]);
    } else {
      const favourites = [...props.favourites];
      favourites.splice(index, 0, props.city);
      props.onAddFavourite(favourites);
    }
    empty?.remove();
  }, [props]);

  const mouseMoveHandler = useCallback(
    (e) => {
      if (!draggable) return;
      draggable.style.left = `${
        mouseDownInfo.startLeft + (e.pageX - mouseDownInfo.startX)
      }px`;
      draggable.style.top = `${
        mouseDownInfo.startTop + (e.pageY - mouseDownInfo.startY)
      }px`;

      draggable.style.visibility = 'hidden';
      const target = getTarget(e);
      if (!target) return;
      createEmptyCard(target);
      draggable.style.visibility = 'visible';
    },
    [draggable, getTarget, mouseDownInfo, createEmptyCard]
  );

  const mouseDownHandler = useCallback(
    (event) => {
      const obj = props.card;
      const container = document.querySelector('.cards__small-cards');
      if (!obj || !container) return;

      const clone = obj.cloneNode(true) as HTMLElement;
      obj.after(clone);
      clone.classList.add('small-card_active');
      obj.classList.add('small-card_draggable');
      obj.style.top = `${clone.getBoundingClientRect().top + window.scrollY}px`;
      obj.style.left = `${
        clone.getBoundingClientRect().left + window.scrollX
      }px`;

      setMouseDownInfo({
        startLeft: obj.offsetLeft,
        startTop: obj.offsetTop,
        startX: event.pageX,
        startY: event.pageY,
      });
      setDraggable(obj);
    },
    [props.card]
  );

  const mouseUpHandler = useCallback(() => {
    const clone = document.querySelector('.small-card_active');
    clone?.remove();

    const draggable = props.card;
    if (!draggable) return;

    draggable.classList.remove('small-card_draggable');
    draggable.style.top = `${mouseDownInfo.startTop}px`;
    draggable.style.left = `${mouseDownInfo.startLeft}px`;
    addFavourite();
    document.removeEventListener('mousemove', mouseMoveHandler);
  }, [
    addFavourite,
    mouseDownInfo.startLeft,
    mouseDownInfo.startTop,
    mouseMoveHandler,
    props.card,
  ]);

  useEffect(() => {
    props.card?.addEventListener('mousedown', mouseDownHandler);
    props.card?.addEventListener('mouseup', mouseUpHandler);

    return () => {
      props.card?.removeEventListener('mousedown', mouseDownHandler);
      props.card?.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [mouseDownHandler, mouseUpHandler, props.card]);

  useEffect(() => {
    if (draggable) document.addEventListener('mousemove', mouseMoveHandler);
  }, [draggable, mouseMoveHandler]);
}