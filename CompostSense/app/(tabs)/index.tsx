import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/components/HomeScreen';
import SensorDetailsScreen from '@/components/SensorDetailsScreen'; 

const Stack = createStackNavigator();

export default function IndexScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SensorDetails" component={SensorDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}