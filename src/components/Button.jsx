import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SIGNIN, WATCHLIST} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme/colors';

const StartButton = ({GETSTARTED, small}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.button, small && styles.smallButton]}
      onPress={() => {
        GETSTARTED
          ? navigation.navigate(SIGNIN)
          : navigation.navigate(WATCHLIST);
      }}>
      <Text style={[styles.buttonText, small && styles.smallButtonText]}>
        {GETSTARTED ? 'GET STARTED' : 'Sign In'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.btnColor,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  smallButton: {
    padding: 10,
    width: '40%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButtonText: {
    fontSize: 14,
  },
});

export default StartButton;
