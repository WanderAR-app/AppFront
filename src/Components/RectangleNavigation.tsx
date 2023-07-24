import React from 'react';
import { View } from 'react-native';

import Rectangle from './Rectangle';
import styles from './RectangleNavigation.style';

const RectangleNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.spaceButton}>
        <Rectangle icon={require('../../assets/general.svg')} title='Général' onPress={() => console.log('Général')} />
      </View>
      <View style={styles.spaceButton}>
        <Rectangle icon={require('../../assets/voix.svg')} title="Voix et sons" onPress={() => console.log('Voix et sons')} />
      </View>
      <View style={styles.spaceButton}>
        <Rectangle icon={require('../../assets/navigation.svg')} title="Navigation" onPress={() => console.log('Navigation')} />
      </View>
      <View style={styles.spaceButton}>
        <Rectangle icon={require('../../assets/politique.svg')} title="Politique de confidentialité" onPress={() => navigation.navigate('Politique')} />
      </View>
      <View style={styles.spaceButton}>
        <Rectangle icon={require('../../assets/propos.svg')} title="A propos" onPress={() => navigation.navigate('Propos')} />
      </View>
    </View>
  );
};

export default RectangleNavigation;