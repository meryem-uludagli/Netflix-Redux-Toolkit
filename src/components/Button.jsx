import {Button} from 'react-native';
import React from 'react';
import {SIGNIN, WATCHLIST} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import DefaultStyle from '../styles/defaultStyles';

const StartButton = ({GETSTARTED}) => {
  const navigation = useNavigation();
  return (
    <Button
      style={DefaultStyle.btn}
      title={GETSTARTED ? 'GET START' : 'Sign In'}
      onPress={() => {
        GETSTARTED
          ? navigation.navigate(SIGNIN)
          : navigation.navigate(WATCHLIST);
      }}
    />
  );
};

export default StartButton;
