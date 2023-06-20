import React from 'react';
import { Text, View } from 'react-native';

import styles from './HelloScare.style';

const HelloScare = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Bienvenue{'\n'}à</Text>
        <Text style={styles.companyName}>Epitech</Text>
      </View>
    </View>
  );
};

export default HelloScare;