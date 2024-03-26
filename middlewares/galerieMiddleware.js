import { setPhotosArray } from '../app/reducer/galerie';
import api from './api';

const galerieMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'galerie/fetchPhotos':
      console.log(action.payload);
      api.get(`/api/pictures/${action.payload}`)
          .then((response) => {
            console.log(response.data);
          store.dispatch(setPhotosArray(response.data));
        })
      break;
    default:
  }
  next(action);
};

export default galerieMiddleware;