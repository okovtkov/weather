import Cards from '../cards/cards';
import SortForm from '../sort-form/sort-form';
import './weather-content.scss';

const WeatherContent = () => {
  return (
    <div className="weather-content">
      <SortForm />
      <Cards />
    </div>
  );
};

export default WeatherContent;
