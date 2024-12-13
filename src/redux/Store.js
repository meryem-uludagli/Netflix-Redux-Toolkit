import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    profiles: profileReducer,
  },
});

export default store;
