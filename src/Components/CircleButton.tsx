import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './CircleButton.style';

type Props = {
  icon?: string;
  iconStyle?: any;
  containerStyle?: any;

  onPress?: () => void;
};

const iconFunc = (icon?: any, iconStyle?: any ) => {
  let style = styles.icon;
  if (iconStyle)
    style = iconStyle;

  if (icon) {
    return <Image source={icon} style={style}/>;
  }
};

const CircleButton = ({ icon, iconStyle, containerStyle, onPress }: Props) => {
  let container = styles.container;
  if (containerStyle)
    container = containerStyle;

  return (
    <View style={{...styles.ShadowTop}} >
      <View style={{...styles.ShadowBottom}}>
      <TouchableOpacity style={{...container, flexDirection: 'row', alignItems: 'center'}} onPress={onPress}>
        {iconFunc(icon, iconStyle)}
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CircleButton;