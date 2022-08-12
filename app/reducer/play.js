import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  currentPlay: null,
  currentPlayName: '',
  plays: [],
};
const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
      fetchPlays: (state) => {
        state.isLoading = true;
      },
      savePlays: (state, action) => {
        state.isLoading = false;
        state.plays = action.payload;
      },
      fetchPlayByName: (state) => {
        state.isLoading = true;
      },
      savePlay: (state, action) => {
        state.currentPlay = action.payload[0];
        state.isLoading = false;
      },
      setWantedPlay: (state, action) => {
        sessionStorage.setItem('play', action.payload);
        state.currentPlayName = action.payload;
      },
    }
});

export const { fetchPlays, savePlays, fetchPlayByName, savePlay, setWantedPlay } = playSlice.actions;

export default playSlice.reducer;