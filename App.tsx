import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Login  } from './src/pages/auth/Login';
import { Register } from './src/pages/auth/Register';

export default function App() {
  return (
    <View style={{ flex: 1 , justifyContent: 'center' }}>
        <Login />
    </View>
  );
}

