import React from 'react';
import { View, Text } from 'react-native';
import styles from './GlassMorphismeBox.style';

const GlassMorphismeBox = ({ children }) => {
    return (
        <View style={styles.glassMorphism}>
            {children}
        </View>
    );
};
export default GlassMorphismeBox;