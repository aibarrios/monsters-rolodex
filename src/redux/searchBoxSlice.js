import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const [searchField, setSearchField] = useState('');
const initialState = { searchField: '' };

const searchBoxSlice = createSlice({
  name: 'searchBox',
  initialState,
  reducers: {
    onInputChange(event) {
      setSearchField(event.target.value);
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  searchBoxSlice.actions;
export default searchBoxSlice.reducer;
