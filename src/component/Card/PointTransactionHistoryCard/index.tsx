import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '@src/const/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  title: string;
  desc: string;
  date: string;
  status: 'plus' | 'minus';
  point: number;
};

const PointTransactionHistoryCard = ({
  title,
  date,
  desc,
  status,
  point,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
        backgroundColor: colors.N100,
        marginBottom: 10,
      }}>
      <View>
        <View
          style={{
            backgroundColor: colors.O800,
            borderRadius: 100,
            padding: 6,
          }}>
          <MaterialCommunityIcons
            name={status === 'plus' ? 'cash-plus' : 'cash-minus'}
            color={colors.N100}
            size={18}
          />
        </View>
      </View>
      <View style={{rowGap: 2, flex: 1, paddingHorizontal: 20}}>
        <Text style={{fontWeight: '600', color: colors.N900}}>{title}</Text>
        <Text style={{color: colors.N500}}>{desc}</Text>
        <Text style={{fontSize: 12}}>{date}</Text>
      </View>
      <View>
        <Text style={{fontWeight: '700'}}>
          {status === 'plus' ? '+' : '-'} {point}
        </Text>
      </View>
    </View>
  );
};

export default PointTransactionHistoryCard;
