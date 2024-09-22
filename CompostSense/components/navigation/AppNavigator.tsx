import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/HomeScreen';
import SensorDetailsScreen from '@/components/SensorDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  SensorDetails: { sensor: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SensorDetails" component={SensorDetailsScreen} />
    </Stack.Navigator>
  );
}

