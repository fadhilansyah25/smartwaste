import {View, Text} from 'react-native';
import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '@src/const/colors';

type Props = {
  label: string;
};

const FilterButtonBadge = ({label}: Props) => {
  return (
    <View
      style={{
        borderRadius: 100,
        borderColor: colors.T500,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 8,
        paddingVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}>
      <Text style={{color: colors.T500}}>{label}</Text>
      <IonicIcons name="chevron-down-sharp" size={20} color={colors.T500} />
    </View>
  );
};

export default FilterButtonBadge;
