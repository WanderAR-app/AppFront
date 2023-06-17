import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
    paddingHorizontal: 64,
    paddingVertical: 24,
    top: '-28%',
    borderRadius: 16,
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7) 10%, rgba(255, 255, 255, 0.1) 70%)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Century Gothic',
  },
  companyName: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Century Gothic',
  },
});

export default HelloScare;