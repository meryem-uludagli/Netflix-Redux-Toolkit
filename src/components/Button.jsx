import {Button, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {SIGNIN} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';

const StartButton = () => {
  const navigation = useNavigation();
  return (
    <Button title="GET START" onPress={() => navigation.navigate(SIGNIN)} />
  );
};

export default StartButton;
