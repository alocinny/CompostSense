import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type CO2SensorRouteProp = RouteProp<RootStackParamList, 'CO2Sensor'>;

function CO2SensorScreen({ route }: { route: CO2SensorRouteProp }) {
  const { sensor, value } = route.params;

  return (
    <>
      <Text>Sensor: {sensor}</Text>
      <Text>CO2: {value}</Text>
    </>
  );
}

export default CO2SensorScreen;
