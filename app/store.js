import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/app';
import galerieReducer from './reducer/galerie';
import teamReducer from './reducer/team';
import playReducer from './reducer/play';
import dateReducer from './reducer/date';

import teamMiddleware from '../middlewares/teamMiddleware';
import playMiddleware from '../middlewares/playMiddleware';
import dateMiddleware from '../middlewares/dateMiddleware';
import galerieMiddleware from '../middlewares/galerieMiddleware';
import newsletterMiddleware from '../middlewares/newsletterMiddleware';

export const store = configureStore({
  reducer: {
    app: appReducer,
    date: dateReducer,
    team: teamReducer,
    play: playReducer,
    galerie: galerieReducer,
  }, 
  middleware: [galerieMiddleware, teamMiddleware, playMiddleware, dateMiddleware, newsletterMiddleware],
});

export default store;