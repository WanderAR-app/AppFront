import React from 'react';
import { ImageBackground, StyleSheet, } from 'react-native';

const backgroundImage = require('../assets/back.svg');

const SettingPage = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 462,
  },
});

export default SettingPage;