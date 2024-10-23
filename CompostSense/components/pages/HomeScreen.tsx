import React, { useEffect, useState } from 'react';
import { Image, Button, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/AppNavigator';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

//Import styles
import styles from '../styles/HOmeScreenStyles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const windowWidth = Dimensions.get('window').width;

  //armazenar os dados dos sensores
  const [sensorData, setSensorData] = useState({
    temperatura: 0,
    umidade: 0,
    co2: 0,
    amonia: 0,
  });

  useEffect(() => {
    // Conexão com o WebSocket
    const ws = new WebSocket('ws://localhost:8085'); 

    ws.onopen = () => {
      console.log('Conectado ao WebSocket');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSensorData(data); 
    };

    ws.onerror = (error) => {
      console.log('Erro no WebSocket:', error);
    };

    ws.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };


    return () => {
      ws.close();
    };
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fundo_verde.jpg')}
          style={[styles.reactLogo, { width: windowWidth }]} 
          resizeMode="cover" 
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Monitore sua Composteira</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 1: Temperatura</ThemedText>
        <Text>{sensorData.temperatura} °C</Text>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('TemperaturaSensor', { sensor: 'Sensor de Temperatura', value: sensorData.temperatura })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 2: Umidade</ThemedText>
        <Text>{sensorData.umidade} %</Text>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('UmidadeSensor', { sensor: 'Sensor de Umidade', value: sensorData.umidade })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 3: Nível de CO2</ThemedText>
        <Text>{sensorData.co2} ppm</Text>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('CO2Sensor', { sensor: 'Sensor de CO2', value: sensorData.co2 })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 4: Nível de Amônia</ThemedText>
        <Text>{sensorData.amonia} ppm</Text>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('AmoniaSensor', { sensor: 'Sensor de Amônia', value: sensorData.amonia })}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}



