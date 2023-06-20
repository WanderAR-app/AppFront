import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
  container: {
    height: '60%',
  },
  scrollViewContent: {
    paddingHorizontal: styleReference.Padding8,
  },
  button: {
    width: 150,
    height: 100,
    borderRadius: styleReference.BorderRadius8,
    backgroundColor: styleReference.ColorShadow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: styleReference.Margin16,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: styleReference.BorderRadius8,
  },
  textContainer: {
    flex: 1,
    alignContent: 'flex-end',
    padding: styleReference.Padding8,
  },
  name: {
    fontFamily: 'Century Gothic',
    fontWeight: "700",
    fontSize: styleReference.FontSize16,
    color: styleReference.ColorWhite,
    marginTop: -60,
  },
  description: {
    fontFamily: 'Century Gothic',
    fontWeight: "700",
    fontSize: styleReference.FontSize10,
    color: styleReference.ColorWhite,
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

export default styles;