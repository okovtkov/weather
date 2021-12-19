import { useEffect, useState } from 'react';
import { MapProps } from './types';
import { City } from '../../types';
import icon from '../icon/icons/marker_blue.png';
import './weather-map.scss';

interface Props extends MapProps {
  desiredCity: City | null;
  map: google.maps.Map;
  onWantSelectCity: (city: City | null) => void;
}

const WeatherMap = (props: Props) => {
  const [, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const newMarkers: google.maps.Marker[] = props.cities.map((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lon },
        map: props.map,
      });
      marker.addListener('mouseover', () => props.onWantSelectCity(city));
      marker.addListener('mouseout', () =>
        props.onWantSelectCity(props.selectedCity)
      );
      if (city.id === props.desiredCity?.id) {
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
    const lat = props.selectedCity?.lat || 0;
    const lng = props.selectedCity?.lon || 0;
    props.map?.setCenter({ lat, lng });
    props.map.panBy(lat, lng);
  }, [props.map, props.selectedCity]);

  return null;
};

export default WeatherMap;
