import React from 'react';
import { TouchableOpacity, Text, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface CustomButtonProps {
  iconActive: any;
  iconInactive: any;
  label: string;
  onPress: () => void;
  isActive: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  iconStyle?: ImageStyle;
}

const CustomButton = ({ iconActive, iconInactive, label, onPress, isActive, style, labelStyle, iconStyle }: CustomButtonProps) => {
  const iconSource = isActive ? iconActive : iconInactive;
  const buttonStyle = {
    // Appliquer les styles de bouton actifs ou inactifs ici
    backgroundColor: isActive ? 'blue' : 'gray',
    ...(style || {}),
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Image source={iconSource} style={iconStyle} />
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;