import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Circle } from 'react-native-progress'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  temperatura?: number;
  umidade?: number;
  historicoTemperatura: () => void;
  historicoUmidade: () => void;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ temperatura = 0, umidade = 0, historicoTemperatura, historicoUmidade, navigation }: Props) => {
  const validTemperatura = isNaN(temperatura) ? 0 : temperatura;
  const validUmidade = isNaN(umidade) ? 0 : umidade;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.circleContainer}>
        <Circle
          size={100}
          progress={validTemperatura / 100}
          showsText={true}
          formatText={() => `${validTemperatura}%`}
          color="#3b5998"
        />
        <Text style={styles.subtitle}>Temperatura</Text>
      </View>

      <View style={styles.circleContainer}>
        <Circle
          size={100}
          progress={validUmidade / 100}
          showsText={true}
          formatText={() => `${validUmidade}%`}
          color="#3b5998"
        />
        <Text style={styles.subtitle}>Umidade</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Temperatura')} 
        >
        <Text style={styles.buttonText}>Histórico de Temperatura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={historicoUmidade}>
        <Text style={styles.buttonText}>Histórico de Umidade</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  circleContainer: {
    margin: 20,
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;


