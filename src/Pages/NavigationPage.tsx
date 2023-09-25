import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import RectangleSwitch from '../Components/RectangleSwitch';
import styles from './NavigationPage.style';
import NavigationBar from '../Components/NavigationBar';
import CircleReturnButton from '../Components/CircleReturnButton';

const NavigationPage: React.FC = () => {
  const navigation = useNavigation();
  const [avoidStairs, setAvoidStairs] = useState(false);
  const [avoidEscalators, setAvoidEscalators] = useState(false);
  const [avoidElevators, setAvoidElevators] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.return}>
          <CircleReturnButton navigation={navigation} />
        </View>
      <Text style={styles.titre}>
        Navigation
      </Text>
      <Text style={styles.text}>
        Préférences
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
