import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '@src/const/colors';

type Props = {
  placeName: string;
  adress: string;
};

const AddressCard = ({placeName, adress}: Props) => {
  return (
    <View style={{rowGap: 8}}>
      <Text style={{color: colors.T500, fontWeight: '600'}}>{placeName}</Text>
      <Text style={{color: colors.N500, fontSize: 12}}>{adress}</Text>
    </View>
  );
};

export default AddressCard;
