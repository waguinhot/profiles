import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Login } from './src/pages/auth/Login';

export default function App() {
  return (
    <View >
        <Login />
    </View>
  );
}

