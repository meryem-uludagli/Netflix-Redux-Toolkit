import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {TOP_RATED_MOVIE_URL} from '../../service/urls';

const getTopRatedMovies = createAsyncThunk(
  'movie/getTopRatedMovies',

  async params => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.results;
  },
);
export {getTopRatedMovies};
