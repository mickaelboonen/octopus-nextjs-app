import { savePlays, savePlay } from '../app/reducer/play';
import api from './api';

const playMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'play/fetchPlays':
      api.get(`/api/plays`)
          .then((response) => {
          store.dispatch(savePlays(response.data));
        })
      break;
    case 'play/fetchPlayByName':
      const { play: { currentPlayName } } = store.getState();
      const values = [currentPlayName, action.payload]
      const value = values.find((v) => v !== undefined && v !== '');
      api.get(`/api/play/${value}`)
        .then((response) => {
          store.dispatch(savePlay(response.data));
        })
        .catch((error) => {
          console.error('village roles request', error);
        });
      break;
    default:
  }
  next(action);
};

export default playMiddleware;