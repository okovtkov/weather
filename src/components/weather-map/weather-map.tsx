import { useEffect, useState } from 'react';
import { MapProps } from './types';
import { Coord, City } from '../../types';
import icon from '../icon/icons/marker_blue.png';
import './weather-map.scss';

interface Props extends MapProps {
  coord: Coord;
  wantedCity: City | null;
  map: google.maps.Map;
  onChangeWantedCity: (city: City | null) => void;
}

const WeatherMap = (props: Props) => {
  const [, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const newMarkers: google.maps.Marker[] = props.cities.map((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lon },
        map: props.map,
      });
      // eslint-disable-next-line prettier/prettier
      marker.addListener('mouseover', () => props.onChangeWantedCity(city));
      marker.addListener('mouseout', () => props.onChangeWantedCity(props.selectedCity));
      if (city === props.wantedCity) {
        marker.setIcon(icon);
      }
      return marker;
    });
    setMarkers((current) => {
      current.forEach((marker) => marker.setMap(null));
      return newMarkers;
    });
  }, [props, props.cities, props.map, props.selectedCity]);

  useEffect(() => {
    props.map?.setCenter(props.coord);
    props.map?.panBy(props.coord.lat, props.coord.lng);
  }, [props.map, props.coord]);

  return null;
};

export default WeatherMap;
