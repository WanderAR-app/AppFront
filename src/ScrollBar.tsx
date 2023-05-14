import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ScrollBarButtonProps = {
  id: number;
  image: any;
  name: string;
  description: string;
  isFavorite: boolean;
  onPress: () => void;
};

type ScrollBarProps = {
  buttons: ScrollBarButtonProps[];
};

const ScrollBar = ({ buttons }: ScrollBarProps) => {
  const [buttonsState, setButtonsState] = useState(buttons);

  const handleButtonPress = (id: number) => {
    console.log(`Button ${id} was pressed`);
  };

  const handleFavoriteIconPress = (id: number) => {
    const updatedButtons = buttonsState.map(button => {
      if (button.id === id) {
        return {
          ...button,
          isFavorite: !button.isFavorite
        };
      }
      return button;
    });
    setButtonsState(updatedButtons);
  };

  const ScrollBarButton = ({ id, image, name, description, isFavorite, onPress }: ScrollBarButtonProps) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.favoriteButton} onPress={() => handleFavoriteIconPress(id)}>
            <Image style={styles.favoriteIcon} source={isFavorite ? require('../assets/like.png') : require('../assets/love.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    setScrollPosition(scrollX);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        snapToInterval={150}
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
      >
        {buttonsState.map((button) => (
          <ScrollBarButton key={button.id} {...button} onPress={() => handleButtonPress(button.id)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '60%',
    marginTop: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  button: {
    width: 150,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    marginTop: -35,
    right: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ScrollBar;