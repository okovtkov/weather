import { useMemo, useCallback, useEffect, useState } from 'react';
import SmallCard from '../small-card/small-card';
import { City, SortType, Weather } from '../../types';
import weatherApi from '../../api/weather';
import './cards.scss';
import '../weather-content/weather-content.scss';
import BigCard from '../big-card/big-card';
import utils from '../../utils';
import mockCities from './cardsData';

interface Props {
  selectedCity: City | null;
  desiredCity: City | null;
  sortType: SortType;
  favourites: City[];
  cities: City[];
  conditions: string[];
  onChangeFavourites: (cities: City[]) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
}

interface FavouritesData {
  city: City;
  weather: Weather;
  condition: string;
}

const Cards = (props: Props) => {
  const [draggable, setDraggable] = useState<HTMLElement | null>(null);
  const [weatherData, setWeatherData] = useState<Weather[]>([]);

  const addFavouriteHandler = useCallback(
    (cities: City[]) => {
      props.onChangeFavourites([...cities]);
    },
    [props]
  );

  const ascCompare = useCallback((a: City, b: City) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }, []);

  const descCompare = useCallback((a: City, b: City) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  }, []);

  const cities = useMemo((): City[] => {
    const compare = props.sortType === 'asc' ? ascCompare : descCompare;
    return props.cities.sort(compare);
  }, [ascCompare, descCompare, props.cities, props.sortType]);

  const favouritesData = useMemo((): FavouritesData[] => {
    if (weatherData.length < props.cities.length + 1) return [];
    return props.favourites.map((city) => {
      const weather = weatherData.find((item) => item.id === city.id);
      if (!weather) throw new Error('что-то не то');

      const condition = utils.getConditionText(weather.condition);
      return { city, weather, condition };
    });
  }, [props.cities.length, props.favourites, weatherData]);

  useEffect(() => {
    const time = 1000 * 3600;

    weatherApi.current(cities, { cacheMs: time }).then((weather) => {
      setWeatherData((old) => {
        if (old.length === 0) return weather;
        if (old.length === mockCities.length) {
          return old.map((item) => {
            const newWeather = weather.find((i) => i.id === item.id);
            if (newWeather) return newWeather;
            return item;
          });
        }
        return old.concat(weather);
      });
    });

    weatherApi.current(props.favourites).then((weather) => {
      setWeatherData((old) => {
        if (old.length === 0) return weather;
        if (old.length === mockCities.length) {
          return old.map((item) => {
            const newWeather = weather.find((i) => i.id === item.id);
            if (newWeather) return newWeather;
            return item;
          });
        }
        return old.concat(weather);
      });
    });
  }, [cities, props.favourites]);

  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {cities.map((city: City) => (
          <SmallCard
            draggable={draggable}
            onChangeDraggable={setDraggable}
            city={city}
            weather={weatherData.find((item) => city.id === item.id)}
            favourites={props.favourites}
            key={city.id}
            onAddFavourite={addFavouriteHandler}
          />
        ))}
      </div>
      <div className="cards__big-cards">
        {favouritesData?.map(
          (item) =>
            (props.conditions.includes(item.condition) ||
              props.conditions.length === 0) && (
              <BigCard
                city={item.city}
                weather={item.weather}
                key={item.city.id}
                onChangeSelectedCity={props.onChangeSelectedCity}
                onWantSelectCity={props.onWantSelectCity}
                selectedCity={props.selectedCity}
                desiredCity={props.desiredCity}
              />
            )
        )}
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
