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
    borderRadius: styleReference.BorderRadius32,
    paddingHorizontal: styleReference.Padding12,
    marginHorizontal: styleReference.Margin12,
    marginVertical: styleReference.Margin12,
    borderWidth: 0,
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    ShadowBlur: styleReference.ShadowBlur,
  },
  zoom: {
    margin: styleReference.Margin8,
  },
  BarHor: {
    flex: 1,
    height: 35,
  },
  buttonMicro: {
    backgroundColor: styleReference.ColorDarkBlue,
    borderRadius: styleReference.BorderRadius32,
    padding: styleReference.Padding8,
    fontFamily: styleReference.FontFamily,
    fontSize:  styleReference.FontSize16,
  },
});

export default styles;