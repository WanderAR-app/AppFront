import React from 'react';
import { View, Text } from 'react-native';
import styles from './SwitchOnOff.style';

type Props = {
    value: Boolean;
    onChange: (value: Boolean) => void;
    style?: any;
};

const SwitchOnOff = ({ }: Props) => {
    return (
        <View>
            <Text>SwitchOnOff</Text>
        </View>
    );
};