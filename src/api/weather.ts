/* eslint-disable prettier/prettier */
import { City, Weather, WeatherCondition } from '../types';

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
          wind: speed,
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

  getConditionText(weatherCondition: WeatherCondition) {
    const rainy = [
      WeatherCondition.PATCHY_RAIN_POSSIBLE,
      WeatherCondition.PATCHY_LIGHT_DRIZZLE,
      WeatherCondition.LIGHT_DRIZZLE,
      WeatherCondition.PATCHY_LIGHT_RAIN,
      WeatherCondition.LIGHT_RAIN,
      WeatherCondition.MODERATE_RAIN_AT_TIMES,
      WeatherCondition.MODERATE_RAIN,
      WeatherCondition.HEAVY_RAIN_AT_TIMES,
      WeatherCondition.HEAVY_RAIN,
      WeatherCondition.LIGHT_FREEZING_RAIN,
      WeatherCondition.MODERATE_OR_HEAVY_FREEZING_RAIN,
      WeatherCondition.LIGHT_RAIN_SHOWER,
      WeatherCondition.MODERATE_OR_HEAVY_RAIN_SHOWER,
      WeatherCondition.TORRENTIAL_RAIN_SHOWER,
      WeatherCondition.LIGHT_SLEET_SHOWERS,
      WeatherCondition.MODERATE_OR_HEAVY_SLEET_SHOWERS,
      WeatherCondition.PATCHY_LIGHT_RAIN_WITH_THUNDER,
      WeatherCondition.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER,
    ];
    const sunny = [WeatherCondition.SUNNY];
    const cloudy = [
      WeatherCondition.PARTLY_CLOUDY,
      WeatherCondition.CLOUDY,
      WeatherCondition.OVERCAST,
    ];
    const snowy = [
      WeatherCondition.PATCHY_SLEET_POSSIBLE,
      WeatherCondition.BLOWING_SNOW,
      WeatherCondition.LIGHT_SLEET,
      WeatherCondition.MODERATE_OR_HEAVY_SLEET,
      WeatherCondition.PATCHY_LIGHT_SNOW,
      WeatherCondition.LIGHT_SNOW,
      WeatherCondition.PATCHY_MODERATE_SNOW,
      WeatherCondition.MODERATE_SNOW,
      WeatherCondition.PATCHY_HEAVY_SNOW,
      WeatherCondition.HEAVY_SNOW,
      WeatherCondition.ICE_PELLETS,
      WeatherCondition.LIGHT_SNOW_SHOWERS,
      WeatherCondition.MODERATE_OR_HEAVY_SNOW_SHOWERS,
      WeatherCondition.PATCHY_LIGHT_SNOW_WITH_THUNDER,
      WeatherCondition.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER,
    ];
    const blizzard = [WeatherCondition.BLIZZARD];
  
    if (rainy.includes(weatherCondition)) return 'rainy';
    if (sunny.includes(weatherCondition)) return 'sunny';
    if (cloudy.includes(weatherCondition)) return 'cloudy';
    if (snowy.includes(weatherCondition)) return 'snowy';
    if (blizzard.includes(weatherCondition)) return 'blizzard';
    return 'none';
  }
};

export default weatherApi;
