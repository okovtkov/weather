/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { City } from '../types';

type cardType = 'big-card' | 'small-card';

interface Props {
  city: City;
  favourites: City[];
  onChangeFavourites: (cities: City[]) => void;
  card: HTMLElement | null;
  draggable: HTMLElement | null;
  onChangeDraggable: (param: HTMLElement | null) => void;
  type: cardType;
}

interface MouseDownInfo {
  startLeft: number;
  startTop: number;
  startX: number;
  startY: number;
}

export default function useDragNDrop(props: Props) {
  const [favouritesContainer, setFavouritesContainer] =
    useState<HTMLElement | null>(null);
  const [mouseDownInfo, setMouseDownInfo] = useState<MouseDownInfo>({
    startLeft: 0,
    startTop: 0,
    startX: 0,
    startY: 0,
  });

  const createEmptyCard = useCallback((target) => {
    if (!target) return;
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

  const addToArray = useCallback(
    (index) => {
      if (props.favourites?.length === 0) {
        props.onChangeFavourites([props.city]);
      } else {
        const favourites = [...props.favourites];
        favourites.splice(index, 0, props.city);
        props.onChangeFavourites(favourites);
      }
    },
    [props]
  );

  const deleteFavourite = useCallback(() => {
    const { favourites } = props;
    const index = favourites.findIndex((i) => i.id === props.city.id);
    favourites.splice(index, 1);
    props.onChangeFavourites(favourites);
  }, [props]);

  const changeArray = useCallback(
    (index) => {
      const favourites = [...props.favourites];
      const indexCurrentCity = favourites.findIndex(
        (i) => i.id === props.city.id
      );
      const i =
        indexCurrentCity > index ? indexCurrentCity + 1 : indexCurrentCity;
      favourites.splice(index, 0, props.city);
      favourites.splice(i, 1);
      props.onChangeFavourites(favourites);
    },
    [props]
  );

  const changeFavourite = useCallback(() => {
    const childrens = document.querySelector('.cards__big-cards')?.children;
    const empty = document.querySelector('.big-card--empty');
    if (!childrens) return;
    const cards = Array.from(childrens);
    const index = cards.findIndex((item) =>
      item.classList.contains('big-card--empty')
    );

    if (!empty) return;
    if (props.type === 'small-card') addToArray(index);
    else changeArray(index);
    empty?.remove();
  }, [addToArray, changeArray, props.type]);

  const checkElementFromPoint = useCallback((e) => {
    const { card } = props;
    if (!card) return null;
    card.style.visibility = 'hidden';
    const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
    card.style.visibility = 'visible';
    return target;
  }, [props]);

  const wheelHandler = useCallback((e) => {
    const container = document.querySelector('.cards__big-cards');
    if (!container) return;
    container.scrollTop += e.deltaY;
  }, []);

  const mouseMoveHandler = useCallback(
    (e) => {
      const { card } = props;
      if (!card || card !== props.draggable || !favouritesContainer) return;

      card.style.left = `${mouseDownInfo.startLeft + (e.clientX - mouseDownInfo.startX)}px`;
      card.style.top = `${mouseDownInfo.startTop + (e.clientY - mouseDownInfo.startY)}px`;
      const target = checkElementFromPoint(e);
      if (target?.closest('.cards__big-cards')) {
        document.addEventListener('wheel', wheelHandler);
      } else {
        document.removeEventListener('wheel', wheelHandler);
      }
      createEmptyCard(target);
    },
    [props, favouritesContainer, mouseDownInfo.startLeft, mouseDownInfo.startX, mouseDownInfo.startTop, mouseDownInfo.startY, checkElementFromPoint, createEmptyCard, wheelHandler]
  );

  const deleteActive = useCallback(
    () => {
      const clone = document.querySelector('.small-card_active');
      clone?.remove();
  }, []);

  const mouseDownHandler = useCallback(
    (event) => {
      deleteActive();
      const obj = props.card;
      if (!favouritesContainer || !obj) return;

      if (props.type === 'small-card') {
        const clone = obj.cloneNode(true) as HTMLElement;
        obj.after(clone);
        clone.classList.add(`${props.type}_active`);
      }

      const y = obj.getBoundingClientRect().top;
      const x = obj.getBoundingClientRect().left;
      obj.classList.add(`${props.type}_draggable`);
      obj.style.top = `${y}px`;
      obj.style.left = `${x}px`;

      if (props.type === 'big-card') {
        const target = checkElementFromPoint(event);
        createEmptyCard(target);
      }

      setMouseDownInfo({
        startLeft: obj.getBoundingClientRect().left,
        startTop: obj.getBoundingClientRect().top,
        startX: event.clientX,
        startY: event.clientY,
      });
      props.onChangeDraggable(obj);
    },
    [checkElementFromPoint, createEmptyCard, deleteActive, favouritesContainer, props]
  );

  const mouseUpHandler = useCallback(
    (event) => {
      deleteActive();
      const draggable = props.card;
      if (!draggable) return;

      draggable.classList.remove(`${props.type}_draggable`);
      draggable.style.top = `${mouseDownInfo.startTop}px`;
      draggable.style.left = `${mouseDownInfo.startLeft}px`;
      changeFavourite();
      props.onChangeDraggable(null);
      document.removeEventListener('wheel', wheelHandler);

      if (props.type === 'small-card') return;
      const target = checkElementFromPoint(event);
      if (!target) return;
      if (target.closest('.cards__small-cards')) deleteFavourite();
    },
    [
      changeFavourite,
      checkElementFromPoint,
      deleteActive,
      deleteFavourite,
      mouseDownInfo.startLeft,
      mouseDownInfo.startTop,
      props,
      wheelHandler
    ]
  );

  useEffect(() => {
    const { card } = props;
    const draggableElem = props.type === 'big-card' ? card?.querySelector('.big-card__header') : card;
    draggableElem?.addEventListener('mousedown', mouseDownHandler);
    draggableElem?.addEventListener('mouseup', mouseUpHandler);
    if (props.draggable === props.card)
      document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      draggableElem?.removeEventListener('mousedown', mouseDownHandler);
      draggableElem?.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseDownHandler, mouseMoveHandler, mouseUpHandler, props, wheelHandler]);

  useLayoutEffect(() => {
    const container = document.querySelector('.cards__big-cards') as HTMLElement;
    setFavouritesContainer(container);
  }, []);
}
