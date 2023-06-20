import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './HomePage.style'
import SearchBar from '../Components/SearchBar';
import ScrollBar from '../Components/ScrollBar';
import HelloScare from '../Components/HelloScare';
import NavigationBar from '../Components/NavigationBar';

const backgroundImage = require('../../assets/back.svg');
const iconFav = require('../../assets/favoris.svg');
const iconHist = require('../../assets/historique.svg');

const HomePage = () => {

  const navigation = useNavigation();

  const handleSearch = (searchText: string) => {
    console.log(`Vous recherchez "${searchText}"`);
  };

  const favoris = [
    { id: 1, name: "Lounge", description: "607", image: require("../../assets/test1.png"), isFavorite: true },
    { id: 2, name: "Pédago Room", description: "602", image: require("../../assets/test2.png"), isFavorite: true },
    { id: 3, name: "C++ Room", description: "704", image: require("../../assets/test3.png"), isFavorite: true },
  ];

  const historique = [
    { id: 1, name: "Meet Room", description: "605", image: require("../../assets/test4.png"), isFavorite: false },
    { id: 2, name: "C++ Room", description: "704", image: require("../../assets/test3.png"), isFavorite: true },
    { id: 3, name: "Amphi", description: "RDC", image: require("../../assets/test5.png"), isFavorite: false },
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

export default HomePage;