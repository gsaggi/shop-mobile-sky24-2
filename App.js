import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      //<Text>Open up App.js to start working on your app!</Text>

      //<StatusBar style="auto" />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
