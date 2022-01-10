import { City, Weather } from '../types';
import utils from '../utils';

interface WeatherGetterOptions {
  // кол-во мс которые кэш будет хранить ответ
  cacheMs: number;
}

const weatherApi = {
  current(cities: City[], options?: WeatherGetterOptions): Promise<Weather[]> {
    const now = Date.now();
    const cachedAt = localStorage.getItem('date')
      ? Number(localStorage.getItem('date'))
      : 0;
    const timeDiff = now - cachedAt;
    if (options?.cacheMs && timeDiff < options?.cacheMs) {
      const localWeather = localStorage.getItem('weather');
      if (!localWeather) throw new Error('Что-то не то');
      return Promise.resolve(JSON.parse(localWeather));
    }

    // в случае с избранными, получать погоду при каждой загрузке
    if (!options?.cacheMs) {
      return Promise.all(
        cities.map((city) => this.cityWeather(city).then((resp) => resp))
      ).then((resp) => {
        const cachedWeather = localStorage.getItem('weather')
          ? localStorage.getItem('weather')
          : null;
        if (cachedWeather) {
          const weatherParse = JSON.parse(cachedWeather);
          const weather = [...weatherParse, ...resp];
          localStorage.setItem('weather', JSON.stringify(weather));
        }
        return resp;
      });
    }

    return Promise.all(cities.map((city) => this.cityWeather(city))).then(
      (resp) => {
        localStorage.setItem('date', now.toString());
        localStorage.setItem('weather', JSON.stringify(resp));
        return resp;
      }
    );
  },

  cityWeather(city: City) {
    return fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city.lat},${city.lon}`
    )
      .then((response) => response.json())
      .then((response) => {
        const speed = (response.current.wind_kph * 1000) / 3600;
        const windDir = utils.translateWindDir(response.current.wind_dir);

        const item: Weather = {
          name: city.name,
          id: city.id,
          temp: response.current.temp_c,
          condition: response.current.condition.code,
          wind: speed,
          windDir,
        };
        return item;
      });
  },
};

export default weatherApi;
