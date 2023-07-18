import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './SearchBar.style';

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

export default SearchBar;