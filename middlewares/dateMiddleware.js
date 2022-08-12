import { saveDates, setYearsArray } from '../app/reducer/date';
import api from './api';

const dateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'date/fetchAllDates':
      api.get('/api/date')
      .then((response) => {
        store.dispatch(saveDates(response.data));
        sessionStorage.setItem('dates', JSON.stringify(response.data));
        store.dispatch(setYearsArray(response.data));
      })
      break;
    case 'date/sortArray':
      // const { date: { shows } } = store.getState();
      const shows = JSON.parse(sessionStorage.getItem('dates'));

      let filteredSpectacles = shows;
      if (action.payload === 'past') {
        filteredSpectacles = shows.filter((spec) => {
          const date = new Date(spec.datetime).getTime();
          if (date < Date.now()) {
            return spec;
          };
        })
      }
      else if (action.payload === 'future') {
        filteredSpectacles = shows.filter((spec) => {
          const date = new Date(spec.datetime).getTime();
          if (date > Date.now()) {
            return spec;
          };
        })
      }
      store.dispatch(saveDates(filteredSpectacles));

      break;
    default:
  }
  next(action);
};

export default dateMiddleware;