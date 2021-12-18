import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './weather-map.scss';
import { MapProps } from './types';
import { Coord, City } from '../../types';
import WeatherMap from './weather-map';

interface Props extends MapProps {
  coord: Coord;
  wantedCity: City | null;
  onChangeWantedCity: (city: City | null) => void;
}

const MapLoader = (props: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_MAP_KEY}`,
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

  return (
    <>
      <div id="map" />
      {map && (
        <WeatherMap
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...props}
          map={map}
        />
      )}
    </>
  );
};

export default MapLoader;
