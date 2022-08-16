import { showRegisterationResponse, unsubscribe  } from '../app/reducer/app';
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
    case 'app/getId':
      api.post(`/api/newsletter/get_id`, {email: action.payload.email} )
        .then((response) => {
          store.dispatch(unsubscribe(response.data[0].id))
        })
        .catch((error) => {
          // store.dispatch(showRegisterationResponse(error.response))
        });
      
      break;
    case 'app/unsubscribe':
      console.log(action.payload);
      api.delete(`/api/newsletter/unsubscribe/${action.payload}`)
        .then((response) => {
          console.log(response);
          // store.dispatch(showRegisterationResponse(response))
        })
        .catch((error) => {
          console.error(error);
          // store.dispatch(showRegisterationResponse(error.response))
        });
      
      break;
    default:
  }
  next(action);
};

export default newsletterMiddleware;