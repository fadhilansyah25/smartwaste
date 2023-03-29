import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from '../../const/colors';
import {style} from './style';

interface Props extends TextInputProps {
  label?: string;
  warningText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputPhoneNumber = React.forwardRef(
  (props: Props, ref: React.LegacyRef<TextInput>) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={props.containerStyle}>
        <Text style={style.labelInput}>{props.label}</Text>
        <View
          style={{
            ...style.textInputContainer,
            borderColor: isFocus ? colors.B800 : colors.N500,
          }}>
          <Text>+62 </Text>
          <TextInput
            style={style.input}
            {...props}
            onFocus={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(!isFocus)}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            ref={ref}
          />
        </View>
        <Text style={style.textWarning}>{props.warningText}</Text>
      </View>
    );
  },
);

export default InputPhoneNumber;
