import { showTicketCreationResponse } from '../app/reducer/contact';
import api from './api';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'contact/createTicket':
      api.post('/api/ticket/create', action.payload)
        .then((response) => {
            store.dispatch(showTicketCreationResponse(response))
            
        })
        .catch((error) => {
          console.error('createTicket error', error);
          store.dispatch(showTicketCreationResponse(error.response))
        });
      break;

    default:
  }
  next(action);
};

export default contactMiddleware;