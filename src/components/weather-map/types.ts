import { City } from '../../types';

export interface MapProps {
  cities: City[];
  selectedCity: City | null;
  onChangeSelectedCity: (city: City | null) => void;
}
