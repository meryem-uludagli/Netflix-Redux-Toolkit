import {StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';
import StartButton from '../../components/Button';
import styles from '../../styles/signinStyle';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/pngegg.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        placeholderTextColor="#ccc"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      <Text style={styles.text}> Need Help?</Text>
      <Text style={styles.text}>New to Netflix? Sign up now.</Text>
      <Text style={styles.title}>
        Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        Learn more.
      </Text>

      <View style={styles.buttonContainer}>
        <StartButton GETSTARTED={false} />
      </View>
    </View>
  );
};

export default SigninScreen;
