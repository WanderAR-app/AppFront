import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styleReference from '../Components/Style';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    alignItems: 'center',
    paddingHorizontal: styleReference.Padding64,
    paddingVertical: styleReference.Padding24,
    top: '-28%',
    borderRadius: styleReference.BorderRadius16,
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7) 10%, rgba(255, 255, 255, 0.1) 70%)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
  },
  text: {
    fontSize: styleReference.FontSize16,
    textAlign: 'center',
    fontFamily: styleReference.FontFamily,
  },
  companyName: {
    fontSize: styleReference.FontSize20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: styleReference.FontFamily,
  },
});

export default HelloScare;