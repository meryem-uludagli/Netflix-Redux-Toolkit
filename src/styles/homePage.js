import {StyleSheet} from 'react-native';

const HomePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    objectFit: 'contain',
    width: 400,
    height: 500,
    bottom: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    bottom: 120,
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
    width: 'auto',
    justifyContent: 'flex-start',
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
