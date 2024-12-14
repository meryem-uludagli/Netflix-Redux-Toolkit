import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HomePage from '../../styles/homePage';
import {getRequest} from '../../service/verbs';
import {TOP_RATED_MOVIE_URL} from '../../service/urls';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/movieActions';

const Home = () => {
  const topRatedMovies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={HomePage.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => <Text>{item.original_title}</Text>}
      />
    </View>
  );
};

export default Home;
