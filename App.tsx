import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterPage from './src/Pages/RegisterPage';
import LoginPage from './src/Pages/LoginPage';
import AdminLoginPage from './src/Pages/AdminLoginPage';
import CguPage from './src/Pages/CguPage';
import HomePage from './src/Pages/HomePage';
import SettingPage from "./src/Pages/SettingPage";
import NavigationPage from './src/Pages/NavigationPage';
import PolitiqueConfidentialite from "./src/Pages/PolitiqueConfidentialite";
import ProposPage from './src/Pages/ProposPage';
import VoixPage from './src/Pages/VoixPages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Cgu" component={CguPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={SettingPage} options={{ headerShown: false }} />
        <Stack.Screen name='Navigation' component={NavigationPage} options={{ headerShown: false }} />
        <Stack.Screen name='Politique' component={PolitiqueConfidentialite} options={{ headerShown: false }} />
        <Stack.Screen name='Propos' component={ProposPage} options={{ headerShown: false }} />
        <Stack.Screen name='Voix' component={VoixPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;