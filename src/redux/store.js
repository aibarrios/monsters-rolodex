import { configureStore } from '@reduxjs/toolkit';
import searchBoxSlice from './searchBoxSlice';
import monstersReducer from './monstersReducer';
import fetchData from './fetchDataThunk';

const store = configureStore({
  reducer: {
    searchBox: searchBoxSlice,
    monsters: monstersReducer,
  }, //object containing all reducers to be used, use Key to refer to desired state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchData },
      },
    }), //array of middlewares to be used
  devTools: true, //if true can use browser extension Redux devtools
});

export default store;
