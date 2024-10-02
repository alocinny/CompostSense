import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/pages/HomeScreen';
import SensorDetailsScreen from '@/components/pages/TemperaturaScreen';

const Stack = createStackNavigator();

export default function IndexScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SensorDetails" component={SensorDetailsScreen} />
    </Stack.Navigator>
  );
}

