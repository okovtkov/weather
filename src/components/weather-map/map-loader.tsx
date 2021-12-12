import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './weather-map.scss';
import { MapProps } from './types';
import { Coord } from '../../types';
import WeatherMap from './weather-map';

interface Props extends MapProps {
  coord: Coord;
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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {map && <WeatherMap {...props} map={map} />}
    </>
  );
};

export default MapLoader;
