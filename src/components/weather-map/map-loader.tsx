import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './weather-map.scss';
import { MapProps } from './types';
import { Coord } from '../../types';
import WeatherMap from './weather-map';

interface Props extends MapProps {
  coord: Coord;
  selectedCity: string;
}

const MapLoader = (props: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyClBiMqRBD5c8F24E3pHI4BK6RDxgF-hpQ',
      version: 'weekly',
    });

    loader.load().then(() => {
      setMap(
        new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: { lat: 59.97665957310762, lng: 30.42978408718145 },
          zoom: 8,
        })
      );
    });
  }, []);

  useEffect(() => {
    if (props.selectedCity) {
      map?.setCenter(props.coord);
      map?.panBy(props.coord.lat, props.coord.lng);
    }
  }, [map, props.coord, props.selectedCity]);

  return (
    <>
      <div id="map" />
      {map && (
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        <WeatherMap {...props} map={map} selectedCity={props.selectedCity} />
      )}
    </>
  );
};

export default MapLoader;
