import { configureStore } from '@reduxjs/toolkit';
import searchBoxSlice from './searchBoxSlice';

const store = configureStore({
  reducer: {
    searchBox: searchBoxSlice,
  }, //object containing all reducers to be used
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //array of middlewares to be used
  devTools: true, //if true can use browser extension Redux devtools
});

export default store;
