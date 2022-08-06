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
    }
});

export const { setPhotosArray, fetchPhotos } = galerieSlice.actions;

export default galerieSlice.reducer;