import {Image, Text, View, Button} from 'react-native';
import GetStart from '../../theme/stylesStart';
import Swiper from 'react-native-swiper';
import StartButton from '../../components/Button';

const StartScreen = () => {
  return (
    <View style={GetStart.container}>
      <Swiper loop={true} dotColor="#fff" activeDotColor="#000">
        <View>
          <Image
            style={GetStart.image}
            source={require('../../assets/images/start.jpeg')}
          />
          <Text style={GetStart.title}>
            Unlimited entertainment, one low price.
          </Text>
          <Text style={GetStart.subtitle}>
            All of Netflix, starting at just $15.
          </Text>
        </View>

        <View>
          <Image
            style={GetStart.image}
            source={require('../../assets/images/Netflix_Multiple_Device.jpg')}
          />
          <Text style={GetStart.title}>Watch anywhere, anytime.</Text>
          <Text style={GetStart.subtitle}>
            Stream on your favorite devices.
          </Text>
        </View>
      </Swiper>

      <View>
        <StartButton />
      </View>
    </View>
  );
};

export default StartScreen;
