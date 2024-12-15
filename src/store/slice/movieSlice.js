import {createSlice} from '@reduxjs/toolkit';
import {getCategories, getTopRatedMovies} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  categories: [],
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
      })

      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.pending = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export default moviesSlice.reducer;
