import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

type Props = {
  icon: any;
  label: string;
  onPress?: () => void;
};

const Button = ({ icon, label, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    shadowColor: '#D1D9E6',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: '#black'
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
});

export default Button;
