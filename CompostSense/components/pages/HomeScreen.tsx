import React from 'react';
import { Image, StyleSheet, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/AppNavigator';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const windowWidth = Dimensions.get('window').width;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fundo_verde.jpg')}
          style={[styles.reactLogo, { width: windowWidth }]} 
          resizeMode="cover" 
          />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Monitore sua Composteira</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 1: Temperatura</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('TemperaturaSensor', { sensor: 'Sensor de Temperatura', value: 23 })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 2: Umidade</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('UmidadeSensor', { sensor: 'Sensor de Umidade', value: 65 })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 3: CO2</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('CO2Sensor', { sensor: 'Sensor de CO2', value: 7 })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 4: Nível de Oxigênio</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('OxigenioSensor', { sensor: 'Sensor de Oxigênio', value: 21 })}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16, 
  },
  reactLogo: {
    height: 250, 
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
