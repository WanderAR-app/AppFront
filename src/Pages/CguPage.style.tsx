import { StyleSheet, Dimensions } from 'react-native';

import styleReference from '../Components/Style';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    marginTop: -600,
    width: 300,
    height: 100,
  },
  square: {
    borderWidth: 1,
    borderColor: styleReference.ColorWhite,
    width: windowWidth * 0.9,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleReference.BorderRadius16,
    backgroundColor: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1))',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: styleReference.Padding24,
  },
  titre: {
    fontSize: styleReference.FontSize20,
    textAlign: 'center',
    fontFamily: styleReference.FontFamily,
    fontWeight: '700',
    marginBottom: styleReference.Margin16,
  },
  text: {
    fontSize: styleReference.FontSize14,
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: '2%',
    marginBottom: styleReference.Margin12,
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    marginTop: styleReference.Margin12,
  },
  acceptButton: {
    borderRadius: styleReference.BorderRadius16,
    paddingVertical: styleReference.Padding12,
    alignItems: 'center',
    marginVertical: styleReference.Margin8,
    marginTop: styleReference.Margin16,
    backgroundColor: styleReference.ColorSkyBlue,
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    ShadowBlur: styleReference.ShadowBlur,
  },
  acceptTexte: {
    color: styleReference.ColorBackground,
    fontSize: styleReference.FontSize20,
    fontStyle: 'italic',
  },
  refuseButton: {
    borderRadius: styleReference.BorderRadius16,
    paddingVertical: styleReference.Padding12,
    alignItems: 'center',
    marginVertical: styleReference.Margin8,
    marginTop: styleReference.Margin12,
    backgroundColor: styleReference.ColorBackground,
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    ShadowBlur: styleReference.ShadowBlur,
  },
  refuseTexte: {
    color: '#7da9f1',
    fontSize: styleReference.FontSize20,
    fontStyle: 'italic',
  },
});

export default styles;