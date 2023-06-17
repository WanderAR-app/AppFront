import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchBar from './SearchBar';
import ScrollBar from './ScrollBar';
// import Button from './Button';
import HelloScare from './HelloScare';
import NavigationBar from './NavigationBar';

const backgroundImage = require('../assets/back.png');
const iconFav = require('../assets/favoris.png');
const iconHist = require('../assets/historique.png');

const HomePage = () => {

  const navigation = useNavigation();

  const handleSearch = (searchText: string) => {
    console.log(`Vous recherchez "${searchText}"`);
  };

  const favoris = [
    { id: 1, name: "Lounge", description: "607", image: require("../assets/test1.png"), isFavorite: true },
    { id: 2, name: "Pédago Room", description: "602", image: require("../assets/test2.png"), isFavorite: true },
    { id: 3, name: "C++ Room", description: "704", image: require("../assets/test3.png"), isFavorite: true },
  ];

  const historique = [
    { id: 1, name: "Meet Room", description: "605", image: require("../assets/test4.png"), isFavorite: false },
    { id: 2, name: "C++ Room", description: "704", image: require("../assets/test3.png"), isFavorite: true },
    { id: 3, name: "Amphi", description: "RDC", image: require("../assets/test5.png"), isFavorite: false },
  ];

  const renderScroll = (title: string, icon: any) => (
    <View style={[styles.scroll]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titre}>{title}</Text>
        <Image source={icon} style={styles.icon} />
      </View>
      <ScrollBar buttons={title === "Favoris" ? favoris : historique} />
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <HelloScare />
        <View style={styles.square}>
          <View style={styles.searchBarContainer}>
            <SearchBar onSearch={handleSearch} />
          </View>
          <View style={styles.scrollContainer}>
            {renderScroll("Favoris", iconFav)}
            <View style={{ marginTop: -30 }}>
              {renderScroll("Historique", iconHist)}
            </View>
          </View>
          <NavigationBar navigation={navigation} />
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
  square: {
    position: 'absolute',
    bottom: -10,
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
    top: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 2,
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
    fontFamily: 'Century Gothic',
  },
  icon: {
    marginLeft: 5,
  },
});

export default HomePage;