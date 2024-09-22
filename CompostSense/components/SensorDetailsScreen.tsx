import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/AppNavigator';


type SensorDetailsRouteProp = RouteProp<RootStackParamList, 'SensorDetails'>;

function SensorDetails({ route }: { route: SensorDetailsRouteProp }) {
  const { sensor } = route.params;

  return <Text>Sensor: {sensor}</Text>;
}

export default SensorDetails;
