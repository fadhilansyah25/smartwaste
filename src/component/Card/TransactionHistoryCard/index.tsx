import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '@src/const/colors';
import dayjs from 'dayjs';

interface Props {
  status: string;
  packageCode: string;
  userName: string;
  transactionDate: string;
  mitraName: string;
}

const TransactionHistoryCard = ({
  status,
  mitraName,
  packageCode,
  transactionDate,
  userName,
}: Props) => {
  return (
    <View
      style={{
        borderWidth: 1.5,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 18,
        gap: 16,
        borderColor:
          status === 'process'
            ? colors.O800
            : status === 'canceled'
            ? colors.R500
            : colors.B800,
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor:
            status === 'process'
              ? colors.O800
              : status === 'canceled'
              ? colors.R500
              : colors.B800,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
        }}>
        <Text style={{color: colors.N100, fontWeight: '500'}}>{status}</Text>
      </View>
      <View>
        <Text style={{fontSize: 12}}>Kode Pengiriman</Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: colors.T500}}>
          {packageCode}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 12}}>Pengirim</Text>
          <Text style={{fontWeight: '500', color: colors.N700}}>
            {userName}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 12}}>Tanggal Setoran</Text>
          <Text style={{fontWeight: '500', color: colors.N700}}>
            {dayjs(transactionDate).format('DD MMMM YYYY')}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 12}}>Mitra</Text>
        <Text style={{fontWeight: '500', color: colors.N700}}>{mitraName}</Text>
      </View>
    </View>
  );
};

export default TransactionHistoryCard;
