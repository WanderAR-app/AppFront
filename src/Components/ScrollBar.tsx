import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

import styles from './ScrollBar.style';

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
            <Image style={styles.likeIcon} source={isFavorite ? require('../../assets/like.svg') : require('../../assets/love.svg')} />
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

export default ScrollBar;