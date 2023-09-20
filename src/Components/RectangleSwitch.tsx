import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import styles from './RectangleSwitch.style';

type Props = {
  title?: string;
  value: boolean;
  titleStyle?: any;
  containerStyle?: any;

  onValueChange: () => void;
};

const titleFunc = (title?: string, titleStyle?: any) => {
  if (title) {
    return <Text style={[styles.title, titleStyle]}>{title}</Text>;
  }
}

const RectangleSwitch = ({ title, value, titleStyle, containerStyle, onValueChange }: Props) => {
  let container = styles.container;
  if (containerStyle)
    container = containerStyle;

  return (
    <View style={{...styles.ShadowTop}} >
      <View style={{...styles.ShadowBottom, ...styles.switchContainer}}>
        <TouchableOpacity style={{...container, flexDirection: 'row', alignItems: 'center'}} onPress={onValueChange}>
          {titleFunc(title, titleStyle)}
          <Switch value={value} onValueChange={onValueChange} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RectangleSwitch;