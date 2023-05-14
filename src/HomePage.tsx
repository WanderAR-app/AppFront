import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTransitionProgress } from 'react-native-screens';

import SearchBar from './SearchBar';
import ScrollBar from './ScrollBar';
import Button from './Button';

const backgroundImage = require('../assets/back.png');
const iconFav = require('../assets/favoris.png');
const iconHist = require('../assets/historique.png');

const HomePage = () => {

  const navigation = useNavigation();

  const handleSearch = (searchText: string) => {
    console.log(`Vous recherchez "${searchText}"`);
  };

  const buttons = [
    { id: 1, name: "Button 1", description: "This is button 1", image: require("../assets/test1.png"), isFavorite: false, onPress: () => console.log("Button 1 pressed"), },
    { id: 2, name: "Button 2", description: "This is button 2", image: require("../assets/test2.png"), isFavorite: false, onPress: () => console.log("Button 2 pressed"), },
    { id: 3, name: "Button 3", description: "This is button 3", image: require("../assets/test3.png"), isFavorite: false, onPress: () => console.log("Button 3 pressed"), },
  ];

  const renderScroll = (title: string, icon: any) => (
    <View style={[styles.scroll]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titre}>{title}</Text>
        <Image source={icon} style={styles.icon} />
      </View>
      <ScrollBar buttons={buttons} />
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.rectangleWelcome}>
          <Text style={styles.welcome}>Bienvenue{'\n'}à</Text>
          <Text style={styles.place}>Epitech</Text>
        </View>
        <View style={styles.square}>
          <View style={styles.searchBarContainer}>
            <SearchBar onSearch={handleSearch} />
          </View>
          <View style={[styles.scrollContainer, { marginBottom: '2%' }]}>
            {renderScroll("Favoris", iconFav)}
            {renderScroll("Historique", iconHist)}
          </View>
          <View style={styles.buttonContainer}>
          <View style={styles.scan}>
              <Button icon={require('../assets/scan.png')} label="Scan QR" onPress={() => navigation.navigate('Scan' as never)} />
            </View>
            <View style={styles.home}>
              <Button icon={require('../assets/home.png')} label="Home" onPress={() => navigation.navigate('Home' as never)} />
            </View>
            <View style={styles.setting}>
              <Button icon={require('../assets/parametre.png')} label="Setting" onPress={() => navigation.navigate('CguPage' as never)} />
            </View>
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
    height: 462,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  rectangleWelcome: {
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  place: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  square: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#ECF0F3',
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  scroll: {
    height: 165,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  icon: {
    marginLeft: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECF0F3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  scan: {
    marginLeft: 10,
  },
  home: {
    marginLeft: 10,
  },
  setting: {
    marginLeft: 10,
  }
});

export default HomePage;