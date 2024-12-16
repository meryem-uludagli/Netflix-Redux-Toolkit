import {StyleSheet} from 'react-native';

const HomePage = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 500,
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  iconGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 30,
    marginBottom: 5,
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  playicon: {
    color: 'black',
    marginRight: 5,
  },
  playtext: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomePage;
