import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type OxigenioSensorRouteProp = RouteProp<RootStackParamList, 'OxigenioSensor'>;

function OxigenioSensorScreen({ route }: { route: OxigenioSensorRouteProp }) {
  const { sensor, value } = route.params;

  return (
    <>
      <Text>Sensor: {sensor}</Text>
      <Text>Nível de Oxigênio: {value}%</Text>
    </>
  );
}

export default OxigenioSensorScreen;
