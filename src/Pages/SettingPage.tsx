import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './SettingPage.style'
import RectangleNavigation from '../Components/RectangleNavigation';
import NavigationBar from '../Components/NavigationBar';

const SettingPage = () => {

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.titre}>
            Paramètres
        </Text>
          <RectangleNavigation navigation={navigation} />
          <View style={styles.square}>
            <NavigationBar navigation={navigation} />
          </View>
      </View>
  );
};

export default SettingPage;