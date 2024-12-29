import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/urls';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MoviesItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={styles.img}
      />
    </Pressable>
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
