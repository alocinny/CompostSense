import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/pages/HomeScreen';
import TemperaturaScreen from '@/components/pages/TemperaturaScreen';

export type RootStackParamList = {
  Home: undefined;
  Temperatura: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Temperatura" component={TemperaturaScreen} /> 
    </Stack.Navigator>
  );
}


