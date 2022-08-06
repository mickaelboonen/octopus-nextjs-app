import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/app';
import galerieReducer from './reducer/galerie';

export const store = configureStore({
  reducer: {
    galerie: galerieReducer,
    app: appReducer,
  },
});

export default store;