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
          center: props.coord,
          zoom: 8,
        })
      );
    });
  }, [props.coord]);

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
