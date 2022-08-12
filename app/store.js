import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/app';
import galerieReducer from './reducer/galerie';
import teamReducer from './reducer/team';

import galerieMiddleware from '../middlewares/galerieMiddleware';
import teamMiddleware from '../middlewares/teamMiddleware';

export const store = configureStore({
  reducer: {
    galerie: galerieReducer,
    team: teamReducer,
    app: appReducer,
  }, 
  middleware: [galerieMiddleware, teamMiddleware],
});

export default store;