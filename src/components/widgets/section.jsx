import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {useSelector} from 'react-redux';
import MoviesItem from '../movie/moviesItem';

const Section = ({item}) => {
  const {topRatedMovies} = useSelector(state => state.movies);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={topRatedMovies}
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
    fontSize: 18,
    fontWeight: '500',
  },
});
