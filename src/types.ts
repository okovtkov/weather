export interface City {
  name: string;
  id: string;
  lat: number;
  lon: number;
}

export type SortType = 'asc' | 'desc';

export interface Coord {
  lat: number;
  lng: number;
}

export enum WeatherCondition {
  SUNNY = 1000, // солнечно
  PARTLY_CLOUDY = 1003, // частично облачно
  CLOUDY = 1006, // облачно
  OVERCAST = 1009, // пасмурно
  MIST = 1030, // туманно
  PATCHY_RAIN_POSSIBLE = 1063, // возможен местами дождь
  PATCHY_SNOW_POSSIBLE = 1066, // возможен местами снежок
  PATCHY_SLEET_POSSIBLE = 1069, // возможен местами мокрый снег
  PATCHY_FREEZING_DRIZZLE_POSSIBLE = 1072, // возможна местами слабая морось
  THUNDERY_OUTBREAKS_POSSIBLE = 1087, // возможен гром
  BLOWING_SNOW = 1114, // низовая метель
  BLIZZARD = 1117, // метель
  FOG = 1135, // туман
  FREEZING_FOG = 1147, // ледяной туман
  PATCHY_LIGHT_DRIZZLE = 1150, // местами моросящий дождь
  LIGHT_DRIZZLE = 1153, // моросящий дождь
  FREEZING_DRIZZLE = 1168, // изморозь
  HEAVY_FREEZING_DRIZZLE = 1171, // сильная переохлажденная морось
  PATCHY_LIGHT_RAIN = 1180, // местами небольшой дождь
  LIGHT_RAIN = 1183, // небольшой дождь
  MODERATE_RAIN_AT_TIMES = 1186, // умеренный дождь время от времени
  MODERATE_RAIN = 1189, // умеренный дождь
  HEAVY_RAIN_AT_TIMES = 1192, // сильный дождь время от времени
  HEAVY_RAIN = 1195, // сильный дождь
  LIGHT_FREEZING_RAIN = 1198, // легкий ледяной дождь
  MODERATE_OR_HEAVY_FREEZING_RAIN = 1201, // умеренный или сильный ледяной дождь
  LIGHT_SLEET = 1204, // легкий мокрый снег
  MODERATE_OR_HEAVY_SLEET = 1207, // умеренный или сильный мокрый снег
  PATCHY_LIGHT_SNOW = 1210, // местами легкий снег
  LIGHT_SNOW = 1213, // легкий снег
  PATCHY_MODERATE_SNOW = 1216, // местами умеренный снег
  MODERATE_SNOW = 1219, // умеренный снег
  PATCHY_HEAVY_SNOW = 1222, // местами сильный снег
  HEAVY_SNOW = 1225, // сильный снег
  ICE_PELLETS = 1237, // ледяная крупа
  LIGHT_RAIN_SHOWER = 1240, // небольшой ливень
  MODERATE_OR_HEAVY_RAIN_SHOWER = 1243, // умеренный или сильный ливневый дождь
  TORRENTIAL_RAIN_SHOWER = 1246, // проливной дождь
  LIGHT_SLEET_SHOWERS = 1249, // небольшой дождь с мокрым снегом
  MODERATE_OR_HEAVY_SLEET_SHOWERS = 1252, // умеренный или сильный мокрый снег + дождь
  LIGHT_SNOW_SHOWERS = 1255, // небольшой снегопад
  MODERATE_OR_HEAVY_SNOW_SHOWERS = 1258, // умеренный или сильный снегопад
  LIGHT_SHOWERS_OF_ICE_PELLETS = 1261, // легкий ливень ледяной крупы
  MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS = 1264, // умеренный или сильный ливень ледяной крупы
  PATCHY_LIGHT_RAIN_WITH_THUNDER = 1273, // местами легкий дождь с громом
  MODERATE_OR_HEAVY_RAIN_WITH_THUNDER = 1276, // умеренный или сильный дождь с громом
  PATCHY_LIGHT_SNOW_WITH_THUNDER = 1279, // местами легкий снег с громом
  MODERATE_OR_HEAVY_SNOW_WITH_THUNDER = 1282, // умеренный или сильный снег с громом
}

export interface Weather {
  name: string;
  id: string;
  temp: number;
  condition: WeatherCondition;
}
