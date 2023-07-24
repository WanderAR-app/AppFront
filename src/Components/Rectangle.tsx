import React from 'react';
import { TouchableOpacity, View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './Rectangle.style';

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

const titleFunc = (title?: string, titleStyle?: any) => {
  if (title) {
    return <Text style={[styles.title, titleStyle]}>{title}</Text>;
  }
}

const Rectangle = ({ icon, title, iconStyle, titleStyle, containerStyle, onPress }: Props) => {
  let container = styles.container;
  if (containerStyle)
    container = containerStyle;

  return (
    <View style={{...styles.ShadowTop, borderRadius: container.borderRadius, backgroundColor: container.backgroundColor}} >
      <View style={{...styles.ShadowBottom, borderRadius: container.borderRadius, backgroundColor: container.backgroundColor, backgroundImage: container.backgroundImage}}>
      <TouchableOpacity style={{...container, flexDirection: 'row', alignItems: 'center'}} onPress={onPress}>
        {iconFunc(icon, iconStyle)}
        {titleFunc(title, titleStyle)}
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rectangle;
