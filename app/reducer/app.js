import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
};
const messageSlice = createSlice({
    name: 'galerie',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.show = true;
            state.options = {
                ...initialState.options,
                ...action.payload
            };
        },
        hideMessage: (state, action) => {
            state.show = false;
        }
    }
});

export const { hideMessage, showMessage } = messageSlice.actions;

export default messageSlice.reducer;