import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const CategoryItem = ({item}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: colors.textColor,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '400',
  },
});
