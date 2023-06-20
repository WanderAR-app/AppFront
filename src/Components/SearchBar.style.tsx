import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BarVer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0,
    shadowColor: '#D1D9E6',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  zoom: {
    marginHorizontal: 10,
  },
  BarHor: {
    flex: 1,
    height: 35,
  },
  buttonMicro: {
    backgroundColor: '#0066CC',
    borderRadius: 50,
    padding: 9,
    fontFamily: styleReference.FontFamily,
    fontSize: 16,
    right: 0
  },
});

export default styles;