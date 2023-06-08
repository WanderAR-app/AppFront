import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTransitionProgress } from 'react-native-screens';

import HomePage from './src/HomePage';
import SettingPage from './src/SettingPage';
import CguPage from './src/CguPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />
        <Stack.Screen name="Cgu" component={CguPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;