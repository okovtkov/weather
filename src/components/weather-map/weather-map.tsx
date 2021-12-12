import { useEffect, useState } from 'react';
import { MapProps } from './types';
import './weather-map.scss';

interface Props extends MapProps {
  map: google.maps.Map;
  selectedCity: string;
  onChangeSelectedCity: (id: string) => void;
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
      marker.addListener('mouseover', () => props.onChangeSelectedCity(city.id));
      marker.addListener('mouseout', () => props.onChangeSelectedCity(''));
      if (city.id === props.selectedCity) {
        const icon =
          'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/source/marker_blue.png';
        marker.setIcon(icon);
      }
      return marker;
    });
    setMarkers((current) => {
      current.forEach((marker) => marker.setMap(null));
      return newMarkers;
    });
  }, [props, props.cities, props.map, props.selectedCity]);

  return null;
};

export default WeatherMap;
