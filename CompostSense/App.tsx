import React, { useEffect } from 'react';
import { Platform } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/components/navigation/AppNavigator';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//Configuração do Firebase para Android
const firebaseConfigAndroid = {
  apiKey: "AIzaSyAP8Me8yK8uYr835-HLwYkexEEsjsL_0Fo",
  authDomain: "compostsense.firebaseapp.com", 
  projectId: "compostsense",
  storageBucket: "compostsense.appspot.com",
  messagingSenderId: "26527154196",
  appId: "1:26527154196:android:b0c5be20ea1829bd732701", 
  measurementId: "G-XYZ123"
};

//Configuração do Firebase para iOS
const firebaseConfigIOS = {
  apiKey: "AIzaSyAP8Me8yK8uYr835-HLwYkexEEsjsL_0Fo",
  authDomain: "compostsense.firebaseapp.com",
  projectId: "compostsense",
  storageBucket: "compostsense.appspot.com",
  messagingSenderId: "26527154196",
  appId: "1:26527154196:ios:6e56ccb7c8c96cfb732701", 
  measurementId: "G-XYZ123"
};

export default function App() {
  useEffect(() => {
    //Inicializa o Firebase com base na plataforma
    const firebaseConfig = Platform.OS === 'ios' ? firebaseConfigIOS : firebaseConfigAndroid;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

