import React from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import styles from './SwitchOnOff.style';

type Props = {
};

const SwitchOnOff = ({ }: Props) => {

    const tast: any;

    const off = () => {
        console.log("off");
        tast = get
    }

    return (
        <View>
            <SwitchToggle id={"switch"} switchOn={true} onPress={() => off()}/>
        </View>
    );
};

export default SwitchOnOff;