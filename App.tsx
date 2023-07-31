import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterPage from './src/Pages/RegisterPage';
import LoginPage from './src/Pages/LoginPage';
import AdminLoginPage from './src/Pages/AdminLoginPage';
import CguPage from './src/Pages/CguPage';
import HomePage from './src/Pages/HomePage';
import TestPage from './src/Pages/TestPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test" component={TestPage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Cgu" component={CguPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;