/* eslint-disable prettier/prettier */
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
    if (options?.cacheMs && timeDiff < options?.cacheMs) {
      const localWeather = localStorage.getItem('weather');
      if (!localWeather) throw new Error('Что-то не то');
      return Promise.resolve(JSON.parse(localWeather));
    }

    // в случае с избранными, получать погоду при каждой загрузке
    if (!options?.cacheMs) {
      return Promise.all(
        cities.map((city) => this.cityWeather(city).then((resp) => resp))
      );
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
        const windDir = this.translateWindDir(response.current.wind_dir);

        const item: Weather = {
          name: city.name,
          id: city.id,
          temp: response.current.temp_c,
          condition: response.current.condition.code,
          wind: Number(speed.toFixed(1)),
          windDir,
        };
        return item;
      });
  },

  translateWindDir(dir: string) {
    switch (dir) {
      case 'N': return 'С';
      case 'NNE': return 'С-СВ';
      case 'NE': return 'СВ';
      case 'ENE': return 'В-СВ';
      case 'E': return 'В';
      case 'ESE': return 'В-ЮВ';
      case 'SE': return 'ЮВ';
      case 'SSE': return 'Ю-ЮВ';
      case 'S': return 'Ю';
      case 'SSW': return 'Ю-ЮЗ';
      case 'SW': return 'ЮЗ';
      case 'WSW': return 'З-ЮЗ';
      case 'W': return 'З';
      case 'WNW': return 'З-СЗ';
      case 'NW': return 'СЗ';
      case 'NNW': return 'С-СЗ';
      default: return '';
    }
  },
};

export default weatherApi;
