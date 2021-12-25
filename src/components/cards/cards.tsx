import { useMemo, useCallback, useEffect, useState } from 'react';
import SmallCard from '../small-card/small-card';
import mockCities from './cardsData';
import { City, SortType, Weather } from '../../types';
import './cards.scss';
import '../weather-content/weather-content.scss';
import BigCard from '../big-card/big-card';

interface Props {
  selectedCity: City | null;
  sortType: SortType;
  favourites: City[];
  onChangeFavourites: (cities: City[]) => void;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
}

const Cards = (props: Props) => {
  const [weatherData, setWeatherData] = useState<Weather[]>([]);

  const addFavouriteHandler = useCallback(
    (city: City) => {
      props.onChangeFavourites([...props.favourites, city]);
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
    return mockCities
      .filter((city) => !props.favourites.find((item) => city.id === item.id))
      .sort(compare);
  }, [ascCompare, descCompare, props.favourites, props.sortType]);

  const getWeatherData = useCallback((city: City) => {
    return fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city.lat},${city.lon}`
    )
      .then((response) => response.json())
      .then((response) => {
        const item: Weather = {
          name: city.name,
          id: city.id,
          temp: response.current.temp_c,
          condition: response.current.condition.text,
        };
        return item;
      });
  }, []);

  useEffect(() => {
    const day = new Date().getDate().toString();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = `${year} ${month} ${day}`;

    if (localStorage.getItem('date') !== date) {
      Promise.all(cities.map((city) => getWeatherData(city))).then((resp) => {
        localStorage.setItem('date', date);
        localStorage.setItem('weather', JSON.stringify(resp));
        setWeatherData(resp);
      });
    } else {
      const stringWeather = localStorage.getItem('weather');
      const weatherArray: Weather[] =
        stringWeather !== null ? JSON.parse(stringWeather) : null;
      Promise.all(
        weatherArray?.map((city) => {
          const cityCard = props.favourites.find((item) => item.id === city.id);
          if (!cityCard) return city;

          const cityData = mockCities.find((item) => item.id === cityCard.id);
          if (!cityData) throw new Error('Такого города не существует');
          return getWeatherData(cityData);
        })
      ).then((resp) => setWeatherData(resp));
    }
  }, [cities, getWeatherData, props.favourites]);

  return (
    <section className="cards">
      <h2 className="visually-hidden">Результаты сортировки</h2>
      <div className="cards__small-cards">
        {cities.map((city: City) => (
          <SmallCard
            city={city}
            weather={weatherData.find((item) => city.id === item.id) || null}
            key={city.id}
            onAddFavourite={addFavouriteHandler}
          />
        ))}
      </div>
      <div className="cards__big-cards">
        {props.favourites.length > 0 &&
          props.favourites.map((card) => (
            <BigCard
              city={card}
              weather={weatherData.find((item) => card.id === item.id) || null}
              key={card.id}
              onChangeSelectedCity={props.onChangeSelectedCity}
              onWantSelectCity={props.onWantSelectCity}
              selectedCity={props.selectedCity}
            />
          ))}
        <div className="cards__help">
          Перетащите сюда города, погода в которых вам интересна
        </div>
      </div>
    </section>
  );
};

export default Cards;
