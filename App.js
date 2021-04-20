import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./assets/logo_248_transparent.png')}
        style={{height: 300, width: 300, resizeMode: 'contain'}}
      ></Image>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
