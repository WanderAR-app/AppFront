import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ScrollBarButtonProps = {
  id: number;
  image: any;
  name: string;
  description: string;
  isFavorite: boolean;
  onPress?: () => void;
};

type ScrollBarProps = {
  buttons: ScrollBarButtonProps[];
};

const ScrollBar = ({ buttons }: ScrollBarProps) => {
  const [buttonsState, setButtonsState] = useState(buttons);

  const handleButtonPress = (id: number, name: string) => {
    console.log(`Button ${id} ${name} was pressed`);
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

  const ScrollBarButton = ({ id, image, name, description, isFavorite, onPress = () => {} }: ScrollBarButtonProps) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.likeButton} onPress={() => handleFavoriteIconPress(id)}>
            <Image style={styles.likeIcon} source={isFavorite ? require('../assets/like.svg') : require('../assets/love.svg')} />
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
        scrollEventThrottle={16}
      >
        {buttonsState.map((button) => (
          <ScrollBarButton key={button.id} {...button} onPress={() => handleButtonPress(button.id, button.name)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '60%',
  },
  scrollViewContent: {
    paddingHorizontal: 8,
  },
  button: {
    width: 150,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#D1D9E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    alignContent: 'flex-end',
    padding: 8,
  },
  name: {
    fontFamily: 'Century Gothic',
    fontWeight: "700",
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: -60,
  },
  description: {
    fontFamily: 'Century Gothic',
    fontWeight: "700",
    fontSize: 12,
    color: '#FFFFFF',
    height: 30,
  },
  likeButton: {
    position: 'absolute',
    marginTop: -100,
    width: 30,
    height: 30,
    right: 5,
  },
  likeIcon: {
    width: '100%',
    height: '100%',
  },
});

export default ScrollBar;