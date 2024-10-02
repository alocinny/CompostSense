import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/AppNavigator'; 

type TemperaturaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Temperatura'>;

type Props = {
  navigation: TemperaturaScreenNavigationProp; 
  valorMedio?: number;
  valorMediana?: number;
  valorModa?: number;
  totalAmostras?: number;
};

const TemperaturaScreen = ({
  navigation, 
  valorMedio = 0,
  valorMediana = 0,
  valorModa = 0,
  totalAmostras = 0,
}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Temperatura</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.statItem}>
          <Text style={styles.bold}>Média: </Text>
          {valorMedio.toFixed(1)} °C
        </Text>
        <Text style={styles.statItem}>
          <Text style={styles.bold}>Mediana: </Text>
          {valorMediana.toFixed(1)} °C
        </Text>
        <Text style={styles.statItem}>
          <Text style={styles.bold}>Moda: </Text>
          {valorModa.toFixed(1)} °C
        </Text>
        <Text style={styles.statItem}>
          <Text style={styles.bold}>Total de Amostras: </Text>
          {totalAmostras}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  statItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
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

export default TemperaturaScreen;

