import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
    onPress: () => void;
    title?: string;
    styleButton?: object;
    styleText?: object;
    disabled?: boolean;
    children?: any;
};

export default function Button(props: ButtonProps) {

  if (!props.title)
    props.title = '';

  return (
    <Pressable
      style={props.styleButton ? props.styleButton : styles.button}
      onPress={props.onPress} 
      disabled={props.disabled}
    >
      <Text style={props.styleText ? props.styleText : styles.text}>{props.title}</Text>
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: "5%",
    borderRadius: 16,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 200,
    marginBottom: "5%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});