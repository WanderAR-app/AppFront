import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: styleReference.ColorBackground,
    borderRadius: styleReference.BorderRadius8,
    paddingVertical: styleReference.Padding12,
    paddingHorizontal: styleReference.Padding64,
    width: '100%',
    flexDirection: 'row',
    marginTop: -10,
  },
  spaceButton: {
    marginLeft: 10,
  }
});

export default styles;