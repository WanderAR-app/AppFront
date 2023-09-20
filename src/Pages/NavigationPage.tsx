import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


import RectangleSwitch from '../Components/RectangleSwitch';
import styles from './NavigationPage.style';
import NavigationBar from '../Components/NavigationBar';

const NavigationPage: React.FC = () => {
  const navigation = useNavigation();
  const [avoidStairs, setAvoidStairs] = useState(false);
  const [avoidEscalators, setAvoidEscalators] = useState(false);
  const [avoidElevators, setAvoidElevators] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>
        Navigation
      </Text>
      <RectangleSwitch title='Éviter les escaliers' value={avoidStairs} onValueChange={() => setAvoidStairs(!avoidStairs)} />
      <RectangleSwitch title='Éviter les escalators' value={avoidEscalators} onValueChange={() => setAvoidEscalators(!avoidEscalators)} />
      <RectangleSwitch title='Éviter les ascenseurs' value={avoidElevators} onValueChange={() => setAvoidElevators(!avoidElevators)} />
      <View style={styles.square}>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  );
};

export default NavigationPage;
