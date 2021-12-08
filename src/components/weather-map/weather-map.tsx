import './weather-map.scss';

const WeatherMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d949422.0486980503!2d30.108637621644977!3d59.78893689132138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1638901866413!5m2!1sru!2sua"
      width="800"
      height="600"
      // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      className="weather-map"
    />
  );
};

export default WeatherMap;
