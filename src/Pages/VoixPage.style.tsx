import { StyleSheet } from 'react-native';
import styleReference from '../Components/Style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: styleReference.Padding24,
  },
  return: {
    position: 'absolute',
    marginTop: 70,
    left: -48,
    top: -7,
  },
  titre: {
    fontFamily: styleReference.FontFamily,
    fontSize: styleReference.FontSize20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 70,
  },
  text: {
    fontFamily: styleReference.FontFamily,
    fontSize: styleReference.FontSize16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: -230,
    marginTop: 20,
  },
  ShadowTop: {
    width: 342,
    height: 49,
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
  title: {
    flex: 1,
    marginLeft: 8,
    textAlign: 'left',
  },
  square: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
    backgroundColor: styleReference.ColorBackground,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  // pickerContainer: {
  //   alignItems: 'center',
  // },
  // pickerWrapper: {
  //   // flex: 1,
  // },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,

    width: 342,
    height: 49,
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    shadowRadius: styleReference.ShadowBlur,
    shadowOpacity: 1,
    margin: styleReference.Margin8,
    backgroundColor: styleReference.ColorBackground,
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 70%)',
    borderRadius: styleReference.BorderRadius8,
  },
  pickerLeft: {
    flex: 1,
    alignItems: 'center', // Pour centrer le texte à gauche
  },
  pickerRight: {
    flex: 1,
    alignItems: 'center', // Pour centrer le Picker à droite
  },
  dropdown: {
    width: 150,
  },
});

export default styles;