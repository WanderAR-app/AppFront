import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const backgroundImage = require('../assets/back.png');
const { width, height } = Dimensions.get('window');

const CguPage = () => {
  const handleAccept = () => {
    console.log('Accepter');
  };

  const handleRefuse = () => {
    console.log('Refuser');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/WanderAR.png')} style={styles.logo} />
        <View style={styles.rectangle}>
          <Text style={styles.titre}>Condition générales{'\n'}d'utilisation</Text>
          <Text style={styles.texte}>Wander AR est une application de guidage en intérieur disponible dans les bâtiments utilisant nos services.</Text>
          <Text style={styles.texte}>Les conditions générales d’utilisation peuvent être changées à tout moment. Pour les consulter ou être notifié de tout changement, allez à Paramètres/Politique de confidentialité.</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleAccept} style={[styles.button, styles.acceptButton]}>
              <Text style={styles.acceptTexte}>Accepter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRefuse} style={[styles.button, styles.refuseButton]}>
              <Text style={styles.refuseTexte}>Refuser</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateY: -height * 0.4}, {translateX: -width * 0.25}],
  },
  rectangle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 16,
    position: 'absolute',
    width: '90%',
    aspectRatio: 0.8,
    top: '25%',
    left: '5%',
  },
  titre: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 25,
    marginTop: '5%',
  },
  texte: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
    fontStyle: 'italic',
    marginTop: '2%',
    marginRight: '5%',
    marginLeft: '5%',
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '65%',
    alignSelf: 'center',
    marginTop: '1%',
  },
  button: {
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#0000',
    marginTop: 15,
  },
  acceptButton: {
    backgroundColor: 'rgba(125, 169, 241, 0.9)',
  },
  acceptTexte: {
    color: '#ecf0f3',
    fontSize: 20,
    fontStyle: 'italic',
  },
  refuseButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  refuseTexte: {
    color: '#638ef1',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default CguPage;