import React from 'react';
import { View } from 'react-native';

import Button from './Button';
import styles from './NavigationBar.style';

const NavigationBar = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/scan.svg')} label="Scan QR" onPress={() => console.log('Scan button')} />
      </View>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/home.svg')} label="Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/parametre.svg')} label="Setting" onPress={() => console.log('Setting button')} />
      </View>
    </View>
  );
};

export default NavigationBar;