import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  MOVIE_URL,
  POPULAR_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_MOVIE_URL,
  SEARCH_URL,
} from '../../service/urls';

const getTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.results;
  },
);

const getPopularMovies = createAsyncThunk(
  'movie/getPopularMovies',
  async params => {
    const response = await getRequest(POPULAR_URL, params);
    return response.data.results;
  },
);

const getUpcomingMovies = createAsyncThunk(
  'movie/getUpcomingMovies',
  async params => {
    const response = await getRequest(UPCOMING_MOVIE_URL, params);
    return response.data.results;
  },
);

const getMovieData = createAsyncThunk('movie/getMovieData', async params => {
  const response = await getRequest(MOVIE_URL + params.movieId, params);
  return response.data;
});

const getCategories = createAsyncThunk('movie/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);
  return response.data.genres;
});

const searchMovies = createAsyncThunk('movie/searchMovies', async query => {
  const response = await getRequest(`${SEARCH_URL}?query=${query}`);
  return response.data.results;
});

export {
  getTopRatedMovies,
  getCategories,
  getPopularMovies,
  getUpcomingMovies,
  getMovieData,
  searchMovies,
};
