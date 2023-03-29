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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';

interface Props extends TextInputProps {
  label?: string;
  isPassword?: boolean;
  warningText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputText = React.forwardRef(
  (props: Props, ref: React.LegacyRef<TextInput>) => {
    const [isFocus, setIsFocus] = useState(false);
    const [hidePass, setHidePass] = useState(true);

    return (
      <View style={props.containerStyle}>
        <Text style={style.labelInput}>{props.label}</Text>
        <View
          style={{
            ...style.textInputContainer,
            borderColor: isFocus ? colors.B800 : colors.N500,
          }}>
          <TextInput
            style={style.input}
            {...props}
            onFocus={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(!isFocus)}
            underlineColorAndroid="transparent"
            secureTextEntry={props.isPassword && hidePass}
            ref={ref}
          />
          {props.isPassword ? (
            <Ionicons
              name={hidePass ? 'eye-off' : 'eye'}
              size={24}
              color={hidePass ? colors.N300 : colors.N500}
              onPress={() => setHidePass(!hidePass)}
            />
          ) : null}
        </View>
        <Text style={style.textWarning}>{props.warningText}</Text>
      </View>
    );
  },
);

export default InputText;
