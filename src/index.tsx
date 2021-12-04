import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SortForm from './components/sort-form/sort-form';
import Cities from './components/cities/cities';

ReactDOM.render(
  <StrictMode>
    <SortForm />
    <Cities />
  </StrictMode>,
  document.getElementById('root')
);
