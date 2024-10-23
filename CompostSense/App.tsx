import React, { useEffect, useState } from 'react';
import { Platform, View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/components/navigation/AppNavigator';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configurações do Firebase
const firebaseConfigAndroid = {
  apiKey: "API_KEY_ANDROID",
  authDomain: "compostsense.firebaseapp.com", 
  projectId: "compostsense",
  storageBucket: "compostsense.appspot.com",
  messagingSenderId: "26527154196",
  appId: "1:26527154196:android:b0c5be20ea1829bd732701", 
  measurementId: "G-XYZ123"
};

const firebaseConfigIOS = {
  apiKey: "API_KEY_IOS",
  authDomain: "compostsense.firebaseapp.com",
  projectId: "compostsense",
  storageBucket: "compostsense.appspot.com",
  messagingSenderId: "26527154196",
  appId: "1:26527154196:ios:6e56ccb7c8c96cfb732701", 
  measurementId: "G-XYZ123"
};

export default function App() {
  const [webSocketMessage, setWebSocketMessage] = useState(''); 

  useEffect(() => {
    // Inicializa o Firebase
    const firebaseConfig = Platform.OS === 'ios' ? firebaseConfigIOS : firebaseConfigAndroid;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Configuração do WebSocket
    const ws = new WebSocket('ws://localhost:8085'); 

    ws.onopen = () => {
      console.log('Conectado ao WebSocket');
      ws.send('Olá, servidor!'); 
    };

    ws.onmessage = (event) => {
      console.log('Mensagem recebida:', event.data);
      setWebSocketMessage(event.data); 
    };

    ws.onerror = (error) => {
      console.log('Erro no WebSocket:', error);
    };

    ws.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    return () => { ws.close(); };
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      {webSocketMessage ? (
        <View style={{ padding: 20 }}>
          <Text>Mensagem do WebSocket: {webSocketMessage}</Text>
        </View>
      ) : null}
    </NavigationContainer>
  );
}




