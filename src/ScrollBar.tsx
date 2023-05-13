import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

type ScrollBarButtonProps = {
  image: any;
  onPress: () => void;
};

const ScrollBarButton = ({ image, onPress }: ScrollBarButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image style={styles.image} source={image} resizeMode="cover" />
  </TouchableOpacity>
);

const buttons = [
  { id: 1, image: require('../assets/test1.png'), onPress: () => console.log('Button 1 pressed') },
  { id: 2, image: require('../assets/test2.png'), onPress: () => console.log('Button 2 pressed') },
  { id: 3, image: require('../assets/test3.png'), onPress: () => console.log('Button 3 pressed') },
];

const ScrollBar = () => {
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
        {buttons.map((button) => (
          <ScrollBarButton key={button.id} image={button.image} onPress={button.onPress} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
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
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default ScrollBar;