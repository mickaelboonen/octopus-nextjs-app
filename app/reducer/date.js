import { createSlice } from '@reduxjs/toolkit';
import collect from 'collect.js';

const initialState = {
  shows: [],
  currentButton: 'future',
  yearsArray: [],
  isLoading: false,
};
const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
      fetchAllDates: (state) => {
        state.isLoading = true;
      },
      saveDates: (state, action) => {
        const collection = collect(action.payload);
        const sortedByDatetimeShows = collection.sortByDesc('datetime').all();
        state.shows= sortedByDatetimeShows;
      },

      /**
       * Returns an array of the spectacles years, sorted by desc
       * @param {array} spectacles 
       * @returns array
       */
      setYearsArray: (state, action) => {
        const yearsArray = []
        action.payload.forEach((spec) => {
          const year = new Date(spec.datetime).getFullYear();
          if (yearsArray.indexOf(year) === -1) {
            yearsArray.push(year);
          }
        })
  
        const collection = collect(yearsArray);
        const sortedYearsArray = collection.sortDesc();

        state.yearsArray = sortedYearsArray.all();
      },
      toggleSortingButton: (state, action) => {
        state.currentButton = action.payload;
      },
      sortArray: () => {
      },
    }
});

export const {
  fetchAllDates,
  saveDates,
  setYearsArray,
  toggleSortingButton,
  sortArray
} = dateSlice.actions;

export default dateSlice.reducer;