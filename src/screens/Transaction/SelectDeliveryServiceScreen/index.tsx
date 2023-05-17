import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import CurrencySvg from '@src/assets/svg/currency.svg';
import {colors} from '@src/const/colors';

const SelectDeliveryServiceScreen = () => {
  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollView}>
        <View style={style.bonusInfoCard}>
          <View style={{flexDirection: 'row', columnGap: 24}}>
            <CurrencySvg />
            <Text style={{fontWeight: '600', color: colors.G700, fontSize: 12}}>
              BONUS
            </Text>
          </View>
          <Text style={{fontSize: 12, color: colors.G700}}>
            Anda akan mendapatkan 1200 poin untuk pengiriman menggunakan kurir
            Instan & Terjadwal
          </Text>
        </View>
        <View style={{rowGap: 12, marginBottom: 14}}>
          <HeaderList
            leftTitle="PENGIRIMAN INSTAN"
            RightTitle="Bayar Langsung Disini"
          />
          <DeliveryServiceCard />
        </View>
        <View style={{rowGap: 12, marginBottom: 14}}>
          <HeaderList
            leftTitle="PENGIRIMAN TERJADWAL"
            RightTitle="Bayar Langsung Disini"
          />
          <DeliveryServiceCard />
          <DeliveryServiceCard />
          <DeliveryServiceCard />
          <DeliveryServiceCard />
          <DeliveryServiceCard />
          <DeliveryServiceCard />
        </View>
        <View style={{rowGap: 12, marginBottom: 14}}>
          <HeaderList leftTitle="JEMPUT LANGSUNG" RightTitle="Minimal 5 Kg" />
          <DeliveryServiceCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderList = ({
  leftTitle,
  RightTitle,
}: {
  leftTitle: string;
  RightTitle: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
      <Text style={{color: colors.T500, fontWeight: '600', fontSize: 12}}>
        {leftTitle}{' '}
      </Text>
      <Text style={{fontSize: 10, color: colors.T500}}>{RightTitle} </Text>
    </View>
  );
};

const DeliveryServiceCard = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: colors.N300,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.N100,
      }}>
      <Text>Gojek</Text>
      <Text style={{fontSize: 10}}>
        Mulai dari{' '}
        <Text style={{fontSize: 12, fontWeight: '600'}}>Rp11,000</Text>
      </Text>
    </View>
  );
};

export default SelectDeliveryServiceScreen;
