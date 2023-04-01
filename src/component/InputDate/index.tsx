import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
  ViewStyle,
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
  initialDate: Date;
  onChangeDate?: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const InputDate = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [initialDate, setInitialDate] = useState(props.initialDate);

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: initialDate,
      mode: 'date',
      onChange(_, date) {
        setInitialDate(date as Date);
        if (props.onChangeDate) {
          props.onChangeDate(_, date);
        }
      },
      maximumDate: initialDate,
    });
  };

  return (
    <View style={props.containerStyle}>
      <Text style={style.labelInput}>{props.label}</Text>
      <TouchableOpacity activeOpacity={1} onPress={showMode}>
        <View
          style={{
            ...style.textInputContainer,
            borderColor: isFocus ? colors.B800 : colors.N500,
          }}>
          <TextInput
            style={style.input}
            {...props}
            onFocus={() => {
              setIsFocus(!isFocus);
              showMode();
            }}
            onBlur={() => setIsFocus(!isFocus)}
            underlineColorAndroid="transparent"
            value={dayjs(initialDate).format('DD/MM/YYYY')}
          />
          <Ionicons name="calendar" size={24} color={colors.T500} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputDate;
