import { StyleSheet } from 'react-native';
import styleReference from './Style';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderRadius: styleReference.BorderRadius8,
      margin: styleReference.Margin8,
      backgroundColor: styleReference.ColorBackground,
      backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 70%)',
    },
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    label: {
      fontSize: styleReference.FontSize14,
      fontFamily: styleReference.FontFamily,
      textAlign: 'center',
    },
    ShadowTop: {
      shadowColor: styleReference.ColorShadow,
      shadowOffset: styleReference.ShadowDarkOffset,
      shadowRadius: styleReference.ShadowBlur,
      shadowOpacity: 1,
      margin: styleReference.Margin8,
      backgroundColor: styleReference.ColorBackground,
      backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 70%)',
    },
    ShadowBottom: {
      shadowColor: styleReference.ColorWhite,
      shadowOffset: styleReference.ShadowLightOffset,
      shadowRadius: styleReference.ShadowBlur,
      shadowOpacity: 1,
    },
  });

export default styles;