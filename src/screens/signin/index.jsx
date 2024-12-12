import {StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';

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
        <Button title="Sign In" color="#fff" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SigninScreen;

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
    textAlign: 'center',
    maxWidth: 300,
    color: 'gray',
    fontSize: 13,
    padding: 10,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#C60A0A',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
