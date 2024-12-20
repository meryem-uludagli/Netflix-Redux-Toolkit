import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/urls';

const MoviesItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={styles.img}
      />
    </View>
  );
};

export default MoviesItem;

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 150,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
