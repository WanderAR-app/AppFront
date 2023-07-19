import React from 'react';
import { View, Text } from 'react-native';
import styles from './DirectionPopup.style';
import image from './Images'
import GlassMorphismeBox from './GlassMorphismeBox';

type Props = {
    icon?: String;
    distance?: String;
    instruction?: String;
    iconStyle?: any;
    distanceStyle?: any;
    instructionStyle?: any;
    containerStyle?: any;
};

const DirectionPopup = ({ }: Props) => {
    return (
        <View>
            <Text>DirectionPopup</Text>
        </View>
    );
};

export default DirectionPopup;