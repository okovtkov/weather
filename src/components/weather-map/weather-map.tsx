import { useEffect, useState } from 'react';
import { MapProps } from './types';
import './weather-map.scss';

interface Props extends MapProps {
  map: google.maps.Map;
  selectedCity: string;
}

const WeatherMap = (props: Props) => {
  const [, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const newMarkers: google.maps.Marker[] = props.cities.map((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lon },
        map: props.map,
      });
      if (city.id === props.selectedCity) {
        const icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
        marker.setIcon(icon);
      }
      return marker;
    });
    setMarkers((current) => {
      current.forEach((marker) => marker.setMap(null));
      return newMarkers;
    });
  }, [props.cities, props.map, props.selectedCity]);

  return null;
};

export default WeatherMap;
