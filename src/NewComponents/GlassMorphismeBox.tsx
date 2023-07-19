import React from 'react';
import { View, Text } from 'react-native';
import styles from './GlassMorphismeBox.style';

type Props = {
    containerStyle?: any;
};

//maybe prevent using bg, bordercolor, border radius.

const GlassMorphismeBox = ({ }: Props) => {
    return (
        <View>
            <Text>GlassMorphismeBox</Text>
        </View>
    );
};

export default GlassMorphismeBox;