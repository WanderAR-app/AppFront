import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    setSearchText('');
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.BarVer}>
        <FontAwesome name="search" size={20} color="#ccc" style={styles.zoom} onPress={handleSearch} />
        <TextInput
          style={styles.BarHor}
          placeholder="Recherche..."
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={handleSearch}
          onKeyPress={handleKeyPress}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.buttonMicro}>
        <FontAwesome name="microphone" size={20} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  BarVer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#white',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  zoom: {
    marginHorizontal: 10,
  },
  BarHor: {
    flex: 1,
    height:35,
  },
  buttonMicro: {
    backgroundColor: '#0066CC',
    borderRadius: 50,
    padding: 9,
    fontFamily: 'Roboto',
    fontSize: 16,
    right: 30
  },
});

export default SearchBar;