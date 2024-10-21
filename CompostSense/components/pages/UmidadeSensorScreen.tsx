import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type UmidadeSensorRouteProp = RouteProp<RootStackParamList, 'UmidadeSensor'>;

function UmidadeSensorScreen({ route }: { route: UmidadeSensorRouteProp }) {
  const { sensor, value } = route.params;

  return (
    <>
      <Text>Sensor: {sensor}</Text>
      <Text>Umidade: {value}%</Text>
    </>
  );
}

export default UmidadeSensorScreen;
