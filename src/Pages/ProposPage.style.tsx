import { StyleSheet, Dimensions } from 'react-native';
import styleReference from '../Components/Style';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: styleReference.Padding24,
  },
  return: {
    position: 'absolute',
    top: 70,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: styleReference.ColorBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: styleReference.ColorWhite,
  },
  titre: {
    fontFamily: styleReference.FontFamily,
    fontSize: styleReference.FontSize20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 70,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  carre: {
    width: windowWidth * 0.95,
    aspectRatio: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleReference.BorderRadius16,
    marginTop: 20,
  },
  text: {
    fontFamily: styleReference.FontFamily,
    fontSize: styleReference.FontSize20,
    fontWeight: 'normal',
    marginTop: 15,
  },
  square: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: styleReference.ColorBackground,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
});

export default styles;
