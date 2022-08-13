import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spectacles: [
        {
          id: 4,
          name: 'VIOLENTES'
        },
        {
          id: 5,
          name: 'TEST'
        },
      ],
      photosArray: [],
      photoToDisplay: null,
      isLoading: false,
};
const galerieSlice = createSlice({
    name: 'galerie',
    initialState,
    reducers: {
      setPhotosArray: (state, action) => {
          state.photosArray = action.payload;
          state.isLoading = false;
      },
      fetchPhotos: (state, action) => {
          state.isLoading = true;
      },
      displayPicture: (state, action) => {
        state.photoToDisplay = state.photosArray.find((photo) => photo.id === action.payload);
      },
      setNextPhoto: (state, action) => {
        const { photosArray } = state;
        photosArray.forEach((photo) => {
          if (action.payload.pictureId === photo.id) {
            if (action.payload.chevronId === 'right') {
              if (photosArray.indexOf(photo) === photosArray.length - 1) {
                state.photoToDisplay = photosArray[0]
              }
              else {
                state.photoToDisplay = photosArray[photosArray.indexOf(photo) + 1]
              }
            }
            else {
              if (photosArray.indexOf(photo) === 0) {
                state.photoToDisplay = photosArray[photosArray.length - 1]
              }
              else {
                state.photoToDisplay = photosArray[photosArray.indexOf(photo) - 1]
              }
            }
          }
        })
      },
      leaveShowroom: (state) => {
        state.photoToDisplay = null;
      },
    }
});

export const { setPhotosArray, fetchPhotos, displayPicture, setNextPhoto, leaveShowroom } = galerieSlice.actions;

export default galerieSlice.reducer;