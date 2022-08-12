import { saveArtists } from '../app/reducer/team';
import api from './api';

const teamMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'team/fetchArtists':
      api.get('/api/artists')
      .then((response) => {

        let artistsArray = response.data.filter((artist) => !artist.isFormer );

        artistsArray = artistsArray.map((artist) => {
          artist.theaterRoles = artist.theaterRoles.split(',');
          return artist;
        })
        store.dispatch(saveArtists(artistsArray));
      })
      break;
    case 'team/getFormerArtists':
      api.get('/api/artists/is_former')
      .then((response) => {
        store.dispatch(saveArtists(response.data));
      })
      break;
    default:
  }
  next(action);
};

export default teamMiddleware;