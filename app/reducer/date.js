import { createSlice } from '@reduxjs/toolkit';
import collect from 'collect.js';

const initialState = {
  shows: [
    {
      id: 1,
      year: 2021,
      datetime: '11/12/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 2,
      year: 2021,
      datetime: '11/17/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'PARIS',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 3,
      year: 2021,
      datetime: '12/18/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'NIMES',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 4,
      year: 2021,
      datetime: '12/30/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MONTPELLIER',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 5,
      year: 2022,
      datetime: '01/05/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'BORDEAUX',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 6,
      year: 2022,
      datetime: '01/18/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'STRASBOURG',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 7,
      year: 2022,
      datetime: '02/01/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MULHOUSE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 8,
      year: 2022,
      datetime: '02/06/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'NICE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 9,
      year: 2022,
      datetime: '02/07/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MARSEILLE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 10,
      year: 2022,
      datetime: '02/14/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
  ],
  spectacles: [
    {
      id: 1,
      year: 2021,
      datetime: '11/12/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 2,
      year: 2021,
      datetime: '11/17/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'PARIS',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 3,
      year: 2021,
      datetime: '12/18/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'NIMES',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 4,
      year: 2021,
      datetime: '12/30/2021',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MONTPELLIER',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 5,
      year: 2022,
      datetime: '01/05/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'BORDEAUX',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 6,
      year: 2022,
      datetime: '01/18/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'STRASBOURG',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 7,
      year: 2022,
      datetime: '02/01/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MULHOUSE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 8,
      year: 2022,
      datetime: '02/06/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'NICE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 9,
      year: 2022,
      datetime: '02/07/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'MARSEILLE',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
    {
      id: 10,
      year: 2022,
      datetime: '02/14/2022',
      show: 'VIOLENTES',
      placeUrl: '#',
      placeName: 'LYON',
      placeWebsite: '#',
      description: 'Lien vers la salle pour réserver les tickets',
    },
  ],
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
        state.shows= action.payload;
      },

      /**
       * Returns an array of the spectacles years, sorted by desc
       * @param {array} spectacles 
       * @returns array
       */
      setYearsArray: (state, action) => {
        const yearsArray = []
        action.payload.forEach((spec) => {
          if (yearsArray.indexOf(spec.year) === -1) {
            const year = new Date(spec.datetime).getFullYear();
            yearsArray.push(year);
          }
        })
  
        const collection = collect(yearsArray);
        const sortedYearsArray = collection.sortByDesc('year');
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