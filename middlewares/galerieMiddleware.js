import { setPhotosArray } from '../app/reducer/galerie';
import api from './api';

const galerieMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'galerie/fetchPhotos':
      api.get(`/api/pictures/${action.payload}`)
          .then((response) => {
          store.dispatch(setPhotosArray(response.data));
        })
      break;
    default:
  }
  next(action);
};

export default galerieMiddleware;