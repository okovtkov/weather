import { useEffect, useState } from 'react';
import { MapProps } from './types';
import './weather-map.scss';

interface Props extends MapProps {
  map: google.maps.Map;
}

const WeatherMap = (props: Props) => {
  const [, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const newMarkers: google.maps.Marker[] = props.cities.map((city) => {
      return new google.maps.Marker({
        position: { lat: city.lat, lng: city.lon },
        map: props.map,
      });
    });
    setMarkers((current) => {
      current.forEach((marker) => marker.setMap(null));
      return newMarkers;
    });
  }, [props.cities, props.map]);

  return null;
};

export default WeatherMap;
