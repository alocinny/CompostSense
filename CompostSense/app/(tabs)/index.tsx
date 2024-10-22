import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/pages/HomeScreen';
import TemperaturaSensorScreen from '@/components/pages/TemperaturaSensorScreen';
import UmidadeSensorScreen from '@/components/pages/UmidadeSensorScreen';
import CO2SensorScreen from '@/components/pages/CO2SensorScreen';
import AmoniaSensorScreen from '@/components/pages/AmoniaSensorScreen';

const Stack = createStackNavigator();

export default function IndexScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TemperaturaSensor" component={TemperaturaSensorScreen} />
      <Stack.Screen name="UmidadeSensor" component={UmidadeSensorScreen} />
      <Stack.Screen name="CO2Sensor" component={CO2SensorScreen} />
      <Stack.Screen name="AmoniaSensor" component={AmoniaSensorScreen} />
    </Stack.Navigator>
  );
}

