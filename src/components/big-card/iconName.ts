import { WeatherCondition } from '../../types';

const getIconName = (weatherCondition: WeatherCondition): string => {
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
};

export default getIconName;
