import { saveDates, setYearsArray } from '../app/reducer/date';
import api from './api';

const dateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'date/fetchAllDates':
      api.get('/api/date')
        .then((response) => {
          store.dispatch(setYearsArray(response.data));
          store.dispatch(saveDates(response.data));
          // Stores the data in the session storage
          sessionStorage.setItem('dates', JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error('shows datetime error', error);
        });
      break;
    case 'date/sortArray':
      // Retrieves the data from the session storage
      const shows = JSON.parse(sessionStorage.getItem('dates'));

      let filteredSpectacles = shows;
      if (action.payload === 'past') {
        filteredSpectacles = shows.filter((show) => {
          const date = new Date(show.datetime).getTime();
          if (date < Date.now()) {
            return show;
          };
        })
      }
      else if (action.payload === 'future') {
        filteredSpectacles = shows.filter((show) => {
          const date = new Date(show.datetime).getTime();
          if (date > Date.now()) {
            return show;
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