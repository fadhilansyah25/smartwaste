import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface Props {
  borderWidth: number;
  borderColor: string;
  style?: StyleProp<ViewStyle>;
}

const HorizontalRule = ({borderWidth, borderColor, style}: Props) => {
  return (
    <View
      style={[
        style,
        {
          borderBottomColor: borderColor,
          borderBottomWidth: borderWidth,
        },
      ]}
    />
  );
};

export default HorizontalRule;
