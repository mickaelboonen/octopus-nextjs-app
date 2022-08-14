import { showRegisterationResponse  } from '../app/reducer/app';
import api from './api';

const newsletterMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'app/registerEmail':
      api.post(`/api/newsletter/subscribe`, {email: action.payload.email} )
        .then((response) => {
          store.dispatch(showRegisterationResponse(response))
        })
        .catch((error) => {
          store.dispatch(showRegisterationResponse(error.response))
        });
      
      break;
    default:
  }
  next(action);
};

export default newsletterMiddleware;