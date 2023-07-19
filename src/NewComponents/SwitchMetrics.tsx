import React from 'react';
import { View, Text } from 'react-native';
import styles from './SwitchMetrics.style';

type Props = {
    value: Boolean;
    trueValue: String;
    falseValue: String;
    onChange: (value: Boolean) => void;
    style?: any;
};

const SwitchMetrics = ({ }: Props) => {
    return (
        <View>
            <Text>SwitchMetrics</Text>
        </View>
    );
};