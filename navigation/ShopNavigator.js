import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StackScreen1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="ShopView"
        component={ShopViewScreen}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name="ProductView"
        component={ProductViewScreen}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name="ProductEdit"
        component={ProductEditScreen}
        options={{ title: "View Shop" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});