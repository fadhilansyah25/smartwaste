import React from 'react';
import {TextInput, View, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {useInputNumber} from './hook';

interface NumberInputProps {
  minimumValue?: number;
  maximumValue?: number;
  onChange?: (value: string) => void;
  inputStyle?: StyleProp<TextStyle>;
}

const InputNumber: React.FC<NumberInputProps> = ({
  minimumValue,
  maximumValue,
  onChange,
  inputStyle,
}) => {
  const {value, handleInputChange} = useInputNumber({
    minimumValue,
    maximumValue,
    onChange,
  });

  return (
    <TextInput
      style={inputStyle}
      keyboardType="numeric"
      value={value}
      onChangeText={handleInputChange}
    />
  );
};

export default InputNumber;
