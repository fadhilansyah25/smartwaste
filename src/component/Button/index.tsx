import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {colors} from '../../const/colors';

interface Props extends TouchableOpacityProps {
  label: string;
  type: 'fill' | 'outline';
  buttonStyle?: StyleProp<ViewStyle> | any;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        style.button,
        props.type == 'fill' ? style.fill : style.outline,
        props.style,
        props.buttonStyle,
        props.disabled? {backgroundColor: colors.N300} : {}
      ]}>
      <Text
        style={[
          style.label,
          {color: props.type == 'fill' ? colors.white : colors.T500},
          props.textStyle,
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

export const style = StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.T500,
  },
  fill: {
    backgroundColor: colors.T500,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
