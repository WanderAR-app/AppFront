import React from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import styles from './SwitchOnOff.style';

type Props = {
};

const SwitchOnOff = ({ }: Props) => {

    return (
        <View>
            <SwitchToggle switchOn={on} onPress={() => off(!on)} />
        </View>
    );
};

export default SwitchOnOff;