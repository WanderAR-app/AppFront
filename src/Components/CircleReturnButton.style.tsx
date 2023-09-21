import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: styleReference.BorderRadius8,
    paddingVertical: styleReference.Padding12,
    paddingHorizontal: styleReference.Padding64,
    width: '100%',
    flexDirection: 'row',
  },
});

export default styles;