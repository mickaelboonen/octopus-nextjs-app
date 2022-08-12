import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabs: [
    {
      name: 'Collectif',
      id: 'collectif',
    },
    {
      name: 'Équipe artistique',
      id: 'team',
    },
  ],
  artists: [],
  memberToDisplay : null,
  isLoading: false,
  isFormer: false,
  currentTab: 'collectif',
};
const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
      fetchArtists: (state) => {
        state.isLoading = true;
        state.isFormer = false;
      },
      saveArtists: (state, action) => {
        state.artists = action.payload;
        state.isLoading = false;
      },
      toggleTab: (state, action) => {
        state.currentTab = action.payload;
      },
      displayMember: (state, action) => {
        const newMemberToDisplay = state.artists.find((member) => {
          if (member.id === Number(action.payload)) {
            return member;
          }
        });
        state.memberToDisplay = newMemberToDisplay;
      },
      getFormerArtists: (state) => {
        state.isFormer = !state.isFormer;
      },
    }
});

export const { fetchArtists, saveArtists, toggleTab, displayMember, getFormerArtists } = teamSlice.actions;

export default teamSlice.reducer;