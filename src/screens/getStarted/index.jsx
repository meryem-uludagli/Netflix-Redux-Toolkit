import {Image, Text, View} from 'react-native';
import GetStart from '../../styles/getStart';
import Swiper from 'react-native-swiper';
import StartButton from '../../components/Button';
import {colors} from '../../theme/colors';

const StartScreen = () => {
  return (
    <View style={GetStart.container}>
      <Swiper
        loop={true}
        dotColor="rgba(255, 255, 255, 0.3)"
        activeDotColor={colors.textColor}
        autoplay={true}
        autoplayTimeout={4}>
        <View>
          <Image
            style={GetStart.image}
            source={require('../../assets/images/start.jpeg')}
          />
          <View style={GetStart.overlay} />
          <Text style={GetStart.title}>
            Unlimited entertainment, one low price
          </Text>
          <Text style={GetStart.subtitle}>Watch anywhere. Cancel anytime.</Text>
        </View>

        <View>
          <Image
            style={GetStart.image}
            source={require('../../assets/images/Netflix_Multiple_Device.jpg')}
          />
          <View style={GetStart.overlay} />
          <Text style={GetStart.title}>Watch on any device</Text>
          <Text style={GetStart.subtitle}>
            Stream on your phone, tablet, laptop, and TV.
          </Text>
        </View>
      </Swiper>

      <View style={GetStart.buttonContainer}>
        <StartButton GETSTARTED={true} />
      </View>
    </View>
  );
};

export default StartScreen;
