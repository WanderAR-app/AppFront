import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
  container: {
    width: 1,
    height: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
  },
  ShadowTop: {
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    shadowRadius: styleReference.ShadowBlur,
    shadowOpacity: 1,
    margin: styleReference.Margin8,
    backgroundColor: styleReference.ColorBackground,
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 70%)',
    borderRadius: styleReference.BorderRadius8,
  },
  ShadowBottom: {
    shadowColor: styleReference.ColorWhite,
    shadowOffset: styleReference.ShadowLightOffset,
    shadowRadius: styleReference.ShadowBlur,
    shadowOpacity: 1,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default styles;