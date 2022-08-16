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
      registerEmail: (state, action) => {
      },
      showRegisterationResponse: (state, action) => {
        if (action.payload.status !== 201) {
          state.errorMessage = action.payload.data;
          state.successMessage = '';
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

export const { registerEmail, showRegisterationResponse, unsubscribe, getId } = messageSlice.actions;

export default messageSlice.reducer;