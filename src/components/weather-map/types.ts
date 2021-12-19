import { City } from '../../types';

export interface MapProps {
  cities: City[];
  desiredCity: City | null;
  selectedCity: City | null;
  onChangeSelectedCity: (city: City | null) => void;
  onWantSelectCity: (city: City | null) => void;
}
