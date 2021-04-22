import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={getHelloWorld}>

        <Image
          source={require('./assets/logo_248_transparent.png')}
          style={{height: 300, width: 300, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

        <Text>Sign In</Text>
        <Text>Sign Up</Text>
      <StatusBar style="auto" />
    </ SafeAreaView>
  );
}

// const logHello = () => {
//   console.log('hello')
// }

const getHelloWorld = () => {
  return fetch('https://twentyfoureight-server.herokuapp.com/')
  .then((response) => {return response.text()})
  .then((responseJson) => {
    console.log(responseJson) 
  })
  .catch((error) => {
    console.error(error);
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
