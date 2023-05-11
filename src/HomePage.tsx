import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import SearchBar from './SearchBar';
import ScrollBar from './ScrollBar';

const backgroundImage = require('../assets/back.png');

const HomePage = () => {
  const handleSearch = (searchText: string) => {
    console.log(`Vous recherchez "${searchText}"`);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
      <View style={styles.rectangleWel}>
          <Text style={styles.welcome}>Bienvenue{'\n'}à</Text>
          <Text style={styles.place}>Epitech</Text>
      </View>
        <View style={styles.square}>
          <View style={styles.searchBarContainer}>
            <SearchBar onSearch={handleSearch} />
            <ScrollBar></ScrollBar>
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
    paddingBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  square: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  rectangleWel: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    background: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7) 5.38%, rgba(255, 255, 255, 0.1) 94.4%)',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
    top: -180,
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
});

export default HomePage;