import { StyleSheet } from 'react-native';
import styleReference from './Style';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    iconContainer: {
      borderRadius: styleReference.BorderRadius8,
      padding: styleReference.Padding8,
      marginBottom: styleReference.Marging8,
      shadowColor: styleReference.ColorShadow,
      shadowOffset: styleReference.ShadowDarkOffset,
      shadowRadius: styleReference.ShaddowBlur,
      elevation: 2,
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
  });

export default styles;