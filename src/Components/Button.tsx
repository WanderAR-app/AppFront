import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from './Button.style';

type Props = {
  icon?: string;
  label?: string;
  title?: string;
  iconStyle?: any;
  labelStyle?: any;
  titleStyle?: any;
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

const labelFunc = (label?: string, labelStyle?: any) => {
  let style = styles.label;
  if (labelStyle)
    style = labelStyle;

  if (label) {
    return <Text style={style}>{label}</Text>;
  }
}

const titleFunc = (title?: string, titleStyle?: any) => {
  if (title) {
    return <Text style={titleStyle}>{title}</Text>;
  }
}

const Button = ({ icon, label, title, iconStyle, labelStyle, titleStyle, containerStyle, onPress }: Props) => {
  let container = styles.container;
  if (containerStyle)
    container = containerStyle;

  return (
    <View>
      <View style={{...styles.ShadowTop, borderRadius: container.borderRadius, backgroundColor: container.backgroundColor}} >
        <View style={{...styles.ShadowBottom, borderRadius: container.borderRadius, backgroundColor: container.backgroundColor, backgroundImage: container.backgroundImage}}>
          <TouchableOpacity style={{...container, backgroundImage: '', backgroundColor: ''}} onPress={onPress}>
            {titleFunc(title, titleStyle)}
            {iconFunc(icon, iconStyle)}
          </TouchableOpacity>
        </View>
      </View>
      {labelFunc(label, labelStyle)}
    </View>
  );
};

export default Button;
