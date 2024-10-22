import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type AmoniaSensorRouteProp = RouteProp<RootStackParamList, 'AmoniaSensor'>;

function AmoniaSensorScreen({ route }: { route: AmoniaSensorRouteProp }) {
  const { sensor, value } = route.params;

  return (
    <>
      <Text>Sensor: {sensor}</Text>
      <Text>Nível de Amonia: {value}%</Text>
    </>
  );
}

export default AmoniaSensorScreen;

