import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type TemperaturaSensorRouteProp = RouteProp<RootStackParamList, 'TemperaturaSensor'>;

function TemperaturaSensorScreen({ route }: { route: TemperaturaSensorRouteProp }) {
  const { sensor, value } = route.params;

  return (
    <>
      <Text>Sensor: {sensor}</Text>
      <Text>Temperatura: {value}°C</Text>
    </>
  );
}

export default TemperaturaSensorScreen;
