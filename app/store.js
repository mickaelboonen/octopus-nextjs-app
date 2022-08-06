import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/app';
import galerieReducer from './reducer/galerie';

import galerieMiddleware from '../middlewares/galerieMiddleware';

export const store = configureStore({
  reducer: {
    galerie: galerieReducer,
    app: appReducer,
  }, 
  middleware: [galerieMiddleware],
});

export default store;