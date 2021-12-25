import { City, Weather } from '../types';

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
    if (options?.cacheMs && timeDiff < options.cacheMs) {
      const localWeather = localStorage.getItem('weather');
      if (!localWeather) throw new Error('Что-то не то');
      return Promise.resolve(JSON.parse(localWeather));
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
  },
};

export default weatherApi;
