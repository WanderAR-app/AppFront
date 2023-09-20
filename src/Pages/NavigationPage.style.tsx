import { StyleSheet } from 'react-native';
import styleReference from '../Components/Style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: styleReference.Padding24,
  },
  titre: {
    fontFamily: styleReference.FontFamily,
    fontSize: styleReference.FontSize20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 70,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
});

export default styles;