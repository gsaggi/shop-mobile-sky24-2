import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
import HelpScreen from '../screens/HelpScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StackScreen1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});