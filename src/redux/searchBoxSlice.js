import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchField: '' };

const searchBoxSlice = createSlice({
  name: 'searchBox',
  initialState,
  reducers: {
    searchFieldChange: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { searchFieldChange } = searchBoxSlice.actions;
export default searchBoxSlice.reducer;
