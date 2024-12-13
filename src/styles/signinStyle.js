import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    padding: 10,
  },
  title: {
    textAlign: '',
    maxWidth: 300,
    color: 'gray',
    fontSize: 13,
    padding: 10,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.btnColor,
    color: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
export default styles;
