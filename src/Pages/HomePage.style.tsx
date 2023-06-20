import { StyleSheet, Dimensions } from 'react-native';

import styleReference from '../Components/Style';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 462,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: styleReference.Padding24,
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: styleReference.Padding12,
    top: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
    marginHorizontal: styleReference.Margin8,
    marginVertical: styleReference.Margin8,
  },
  scroll: {
    height: 165,
    marginTop: styleReference.Margin8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: styleReference.Padding24,
    marginVertical: styleReference.Margin8,
  },
  titre: {
    fontSize: styleReference.FontSize20,
    fontWeight: 'bold',
    fontFamily: styleReference.FontFamily,
  },
  icon: {
    marginLeft: styleReference.Margin8,
    width: 22,
    height: 20,
  },
});

export default styles;