import React from 'react';
import { Image, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/AppNavigator';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

//import styles
import styles from '../styles/HOmeScreenStyles';

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
        <ThemedText type="subtitle">Sensor 3: Nível de CO2</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('CO2Sensor', { sensor: 'Sensor de CO2', value: 33 })}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sensor 4: Nível de Amonia</ThemedText>
        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('AmoniaSensor', { sensor: 'Sensor de Amonia', value: 3 })}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}