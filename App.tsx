import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './src/LoginPage';
import RegisterPage from './src/RegisterPage';
import AdminLoginPage from './src/AdminLoginPage';
import CguPage from './src/CguPage';
import HomePage from './src/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Cgu" component={CguPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;