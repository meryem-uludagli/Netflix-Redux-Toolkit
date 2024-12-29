import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MovieDetStyle from '../../styles/movieDetailStyle';
import {useDispatch} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);

  return (
    <View style={MovieDetStyle.container}>
      <ScrollView></ScrollView>
    </View>
  );
};

export default MovieDetail;
