import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './ButtonStyle';

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

export default Button;
