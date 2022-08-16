import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    successMessage: '',
    errorMessage: '',
};
const messageSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      registerEmail: () => {
      },
      showNewsletterApiResponse: (state, action) => {
        if (action.payload.status === 200) {
          state.errorMessage = '';
          state.successMessage = action.payload.data;
        }
        else if (action.payload.status !== 201) {
          state.errorMessage = action.payload.data;
          state.successMessage = '';
        }
        else {
          state.successMessage = action.payload.data;
          state.errorMessage = '';
        }
      },
      unsubscribe: () => {

      },
      getId: () => {

      },
    },
});

export const { registerEmail, showNewsletterApiResponse, unsubscribe, getId } = messageSlice.actions;

export default messageSlice.reducer;