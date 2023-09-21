import React from 'react';
import { View } from 'react-native';

import CircleButton from './CircleButton';
import styles from './CircleReturnButton.style';

const CircleReturnButton = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <CircleButton icon={require('../../assets/circle-button.svg')} onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default CircleReturnButton;