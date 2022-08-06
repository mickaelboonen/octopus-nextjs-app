import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spectacles: [
        {
          id: 'VIOLENTES',
          name: 'VIOLENTES'
        },
        {
          id: 'TEST',
          name: 'TEST'
        },
      ],
      photosArray: [],
};
const galerieSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setPhotosArray: (state, action) => {
            state.photosArray = action.payload;
        },
    }
});

export const { setPhotosArray } = galerieSlice.actions;

export default galerieSlice.reducer;