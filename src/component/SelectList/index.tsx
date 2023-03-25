import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {SelectList, SelectListProps} from 'react-native-dropdown-select-list';

interface Props extends SelectListProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const SelectListDropDown = (props: Props) => {
  return (
    <View style={props.containerStyle}>
      <Text style={{marginBottom: 8}}>{props.label}</Text>
      <SelectList {...props} />
    </View>
  );
};

export default SelectListDropDown;
