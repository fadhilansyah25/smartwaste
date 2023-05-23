import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../const/colors';
import {style} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

interface Props extends TextInputProps {
  label?: string;
  isPassword?: boolean;
  initialTime: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  onChangeDate?: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const InputTime = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [initialTime, setInitialTime] = useState(props.initialTime);

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: initialTime,
      mode: 'time',
      onChange(_, date) {
        setInitialTime(date as Date);
        if (props.onChangeDate) {
          props.onChangeDate(_, date);
        }
      },
      minimumDate: props.minimumDate,
      maximumDate: props.maximumDate,
      //   is24Hour: true,
      display: 'spinner',
    });
  };

  return (
    <View style={props.containerStyle}>
      {props.label && (
        <Text style={[style.labelInput, props.labelStyle]}>{props.label}</Text>
      )}
      <TouchableOpacity activeOpacity={1} onPress={showMode}>
        <View
          style={[
            style.textInputContainer,
            {borderColor: isFocus ? colors.B800 : colors.N500},
          ]}>
          <TextInput
            style={[style.input, props.inputStyle]}
            {...props}
            onFocus={() => {
              setIsFocus(!isFocus);
              showMode();
            }}
            editable={false}
            onBlur={() => setIsFocus(!isFocus)}
            underlineColorAndroid="transparent"
            value={dayjs(initialTime).format('HH:mm WIB')}
          />
          <Ionicons name="time" size={24} color={colors.T500} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputTime;
