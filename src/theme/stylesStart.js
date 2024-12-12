import {StyleSheet} from 'react-native';
import {colors} from './colors';

const GetStart = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: colors.bgColor,
  },

  image: {
    background: 'black',
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  btn: {
    backgroundColor: 'red',
  },
});

export default GetStart;
