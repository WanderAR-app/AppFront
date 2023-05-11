import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

type ScrollBarButtonProps = {
  image: number;
  onPress: () => void;
};

const ScrollBarButton = ({ image, onPress }: ScrollBarButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image style={styles.image} source={image} />
  </TouchableOpacity>
);

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
        <ScrollBarButton image={require('../assets/test1.png')} onPress={() => console.log('Button 1 pressed')} />
        <ScrollBarButton image={require('../assets/test2.png')} onPress={() => console.log('Button 2 pressed')} />
        <ScrollBarButton image={require('../assets/test3.png')} onPress={() => console.log('Button 3 pressed')} />
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
    width: 50,
    height: 50,
  },
});

export default ScrollBar;
