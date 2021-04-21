import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={console.log(logHello)} >
        <Image
          source={require('./assets/logo_248_transparent.png')}
          style={{height: 300, width: 300, resizeMode: 'contain'}}
        />
      </TouchableHighlight>
        <Text>Sign In</Text>
        <Text>Sign Up</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const logHello = () => {
  console.log('hello')
}

// const getHelloWorld = () => {
//   return fetch('http://localhost:8000')
//   .then((response) => response.json())
//   .then((json) => {
//     return json
//   })
//   .catch((error) => {
//     console.error(error);
//   })
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
