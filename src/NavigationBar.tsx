import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';

const NavigationBar = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.scan}>
        <Button icon={require('../assets/scan.png')} label="Scan QR" onPress={() => navigation.navigate('Scan')} />
      </View>
      <View style={styles.home}>
        <Button icon={require('../assets/home.png')} label="Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.setting}>
        <Button icon={require('../assets/parametre.png')} label="Setting" onPress={() => navigation.navigate('SettingPage')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECF0F3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    marginTop: -10,
  },
  scan: {
    marginLeft: 10,
  },
  home: {
    marginLeft: 10,
  },
  setting: {
    marginLeft: 10,
  }
});

export default NavigationBar;