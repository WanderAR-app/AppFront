import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './CguPage.style'

const backgroundImage = require('../../assets/back.svg');
const logoImage = require('../../assets/WanderAR_Cgu.svg');


const CguPage = () => {
  const navigation = useNavigation();

  const handleRefuse = () => {
    BackHandler.exitApp();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <View style={styles.square}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.titre}>
              Condition générales{'\n'}d'utilisation
            </Text>
            <Text style={styles.text}>
              Wander AR est une application de guidage en intérieur disponible dans les bâtiments utilisant nos services.
            </Text>
            <Text style={styles.text}>
              Les conditions générales d’utilisation peuvent être changées à tout moment. Pour les consulter ou être notifié de tout changement, allez à Paramètres/Politique de confidentialité.
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home' as never)} style={styles.acceptButton}>
                <Text style={styles.acceptTexte}>Accepter</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRefuse} style={styles.refuseButton}>
                <Text style={styles.refuseTexte}>Refuser</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CguPage;