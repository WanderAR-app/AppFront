import { StyleSheet } from 'react-native';

import styleReference from './Style';

const styles = StyleSheet.create({
    glassMorphism: {
        backgroundImage: styleReference.ColorWhite,
        borderWidth: 1,
        borderColor: styleReference.ColorWhite,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: styleReference.BorderRadius16,
      }
});

export default styles;