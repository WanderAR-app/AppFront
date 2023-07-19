import React from 'react';
import { View, Text } from 'react-native';
import styles from './DestinationButton.style';
import image from './Images'v

type Props = {
    bgimage?: String;
    liked: Boolean;
    title?: String;
    description?: String;
    bgimageStyle?: any;
    titleStyle?: any;
    descriptionStyle?: any;
    containerStyle?: any;
};

const DestinationButton = ({ }: Props) => {
    return (
        <View>
            <Text>DestinationButton</Text>
        </View>
    );
};

export default DestinationButton;