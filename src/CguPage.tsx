import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

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
              <TouchableOpacity onPress={handleAccept} style={styles.acceptButton}>
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
  square: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: width * 0.9,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titre: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: '2%',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  acceptButton: {
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 15,
    backgroundColor: 'rgba(125, 169, 241, 0.9)',
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  acceptTexte: {
    color: '#ecf0f3',
    fontSize: 20,
    fontStyle: 'italic',
  },
  refuseButton: {
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 15,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  refuseTexte: {
    color: '#638ef1',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default CguPage;