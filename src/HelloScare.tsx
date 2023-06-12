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
    marginVertical: '2%',
    paddingHorizontal: '15%',
    paddingVertical: '3%',
    top: '-28%',
    padding: '2%',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7) 5.38%, rgba(255, 255, 255, 0.1) 94.4%)',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  companyName: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});

export default HelloScare;