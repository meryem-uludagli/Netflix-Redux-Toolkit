import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import moviesSlice from '../store/slice/movieSlice';

const store = configureStore({
  reducer: {
    profiles: profileReducer,
    movies: moviesSlice,
  },
});

export default store;
