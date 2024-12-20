import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {useSelector} from 'react-redux';
import MoviesItem from '../movie/moviesItem';

const Section = ({item}) => {
  const {topRatedMovies, popularMovies, upcomingMovies} = useSelector(
    state => state.movies,
  );
  const setData = () => {
    switch (item.id) {
      case 1:
        return popularMovies;
      case 2:
        return topRatedMovies;
      case 3:
        return upcomingMovies;
      default:
        return topRatedMovies;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MoviesItem item={item} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: colors.textColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});
