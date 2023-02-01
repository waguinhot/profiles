import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

import { Login  } from './src/pages/auth/Login';
import { Register } from './src/pages/auth/Register';
import Profile from './src/pages/profile/Profile';

import Route from './src/routes/Index';
export default function App() {
  return (
   <Route />
  );
}

