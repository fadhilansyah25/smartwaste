import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../../const/colors';

interface Props extends TouchableOpacityProps {
  label: string;
  type: 'fill' | 'outline';
}

export const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[style.button, props.type == 'fill' ? style.fill : style.outline, props.style]}>
      <Text
        style={[
          style.label,
          {color: props.type == 'fill' ? colors.white : colors.T500},
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export const style = StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: 2,
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
