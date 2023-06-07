import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '@src/const/colors';

type Props = {
  uniqueCode: string;
};

const UniqueCodeCard = ({uniqueCode}: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 5,
        elevation: 5,
      }}>
      <LinearGradient
        colors={['#4CB8C4', '#3CD3AD']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{borderTopRightRadius: 5, borderTopLeftRadius: 5}}>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: 'transparent',
            }}>
            Kode Unik Send Your Waste
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: 'transparent',
            }}>
            {uniqueCode}
          </Text>
        </View>
      </LinearGradient>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          padding: 16,
          paddingBottom: 24,
        }}>
        Tulis Kode Unik {uniqueCode} atau Cetak Label dan tempelkan pada paket
        yang akan Anda kirimkan
      </Text>
    </View>
  );
};

export default UniqueCodeCard;
