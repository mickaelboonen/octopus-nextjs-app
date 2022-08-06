import axios from 'axios';
import { setPhotosArray } from '../app/reducer/galerie'

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

const galerieMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'galerie/fetchPhotos':
    //   const { galerie } = store.getState();
    //   console.log(action.payload, galerie.spectacles);
    //   const { id } = galerie.spectacles.find((spec) => spec.name === action.payload);
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