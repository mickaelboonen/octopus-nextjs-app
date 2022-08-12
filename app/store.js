import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/app';
import galerieReducer from './reducer/galerie';
import teamReducer from './reducer/team';
import playReducer from './reducer/play';

import teamMiddleware from '../middlewares/teamMiddleware';
import galerieMiddleware from '../middlewares/galerieMiddleware';
import playMiddleware from '../middlewares/playMiddleware';

export const store = configureStore({
  reducer: {
    app: appReducer,
    team: teamReducer,
    galerie: galerieReducer,
    play: playReducer,
  }, 
  middleware: [galerieMiddleware, teamMiddleware, playMiddleware],
});

export default store;