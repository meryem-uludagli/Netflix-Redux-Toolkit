import {StyleSheet} from 'react-native';

const watchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    color: 'white',
    position: 'absolute',
    top: 60,
    right: 10,
    zIndex: 1,
  },

  image: {
    width: 180,
    height: 140,
    left: 20,
    top: 70,
  },
  text: {
    color: 'white',
    fontSize: 24,
    top: 70,
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  gridContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    top: 90,
  },
  profileContainer: {
    width: 100,
    height: 130,
    margin: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  profileText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default watchStyle;
