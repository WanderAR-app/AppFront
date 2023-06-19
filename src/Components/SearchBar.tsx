import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styleReference from '../Components/Style';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const textInputRef = useRef<TextInput>(null);

  const handleSearch = () => {
    if (searchText.trim().length > 0) {
      onSearch(searchText);
      setSearchText('');
    } else {
      alert('La barre de recherche ne peut pas être vide.');
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleBlurOnKeyboardHide = () => {
      textInputRef.current?.blur();
    };

    const keyboardHideEvent = 'keyboardDidHide';
    Keyboard.addListener(keyboardHideEvent, handleBlurOnKeyboardHide);

    return () => {
      Keyboard.removeAllListeners(keyboardHideEvent);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.BarVer}>
        <FontAwesome name="search" size={20} color="#ccc" style={styles.zoom} onPress={handleSearch} />
        <TextInput
          ref={textInputRef}
          style={styles.BarHor}
          placeholder="Rechercher ..."
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BarVer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0,
    shadowColor: '#D1D9E6',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  zoom: {
    marginHorizontal: 10,
  },
  BarHor: {
    flex: 1,
    height: 35,
  },
  buttonMicro: {
    backgroundColor: '#0066CC',
    borderRadius: 50,
    padding: 9,
    fontFamily: styleReference.FontFamily,
    fontSize: 16,
    right: 0
  },
});

export default SearchBar;