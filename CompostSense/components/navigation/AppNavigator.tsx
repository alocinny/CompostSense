import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/components/pages/HomeScreen';
import TemperaturaSensorScreen from '@/components/pages/TemperaturaSensorScreen';
import UmidadeSensorScreen from '@/components/pages/UmidadeSensorScreen';
import CO2SensorScreen from '@/components/pages/CO2SensorScreen';
import OxigenioSensorScreen from '@/components/pages/OxigenioSensorScreen';

export type RootStackParamList = {
  Home: undefined;
  TemperaturaSensor: { sensor: string; value: number };
  UmidadeSensor: { sensor: string; value: number };
  CO2Sensor: { sensor: string; value: number };
  OxigenioSensor: { sensor: string; value: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TemperaturaSensor" component={TemperaturaSensorScreen} />
        <Stack.Screen name="UmidadeSensor" component={UmidadeSensorScreen} />
        <Stack.Screen name="CO2Sensor" component={CO2SensorScreen} />
        <Stack.Screen name="OxigenioSensor" component={OxigenioSensorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
