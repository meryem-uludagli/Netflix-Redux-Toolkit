import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  pending: false,
  error: '',
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export default moviesSlice.reducer;
