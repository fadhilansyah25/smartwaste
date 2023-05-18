import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import CurrencySvg from '@src/assets/svg/currency.svg';
import {colors} from '@src/const/colors';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackProps} from '@src/navigation/StackNavigation/TransactionsStackScreen';
import {DeliveryServiceCard} from '@src/component';

const SelectDeliveryServiceScreen = () => {
  const navigation = useNavigation<TransactionStackProps['navigation']>();

  const handlePressCardDeliveryService = () => {
    navigation.navigate('DetailsDeliveryService');
  };

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
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
        </View>
        <View style={{rowGap: 12, marginBottom: 14}}>
          <HeaderList
            leftTitle="PENGIRIMAN TERJADWAL"
            RightTitle="Bayar Langsung Disini"
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
        </View>
        <View style={{rowGap: 12, marginBottom: 14}}>
          <HeaderList leftTitle="JEMPUT LANGSUNG" RightTitle="Minimal 5 Kg" />
          <DeliveryServiceCard
            startingPrice="Rp 10.000"
            serviceName="Gojek"
            handlePress={handlePressCardDeliveryService}
          />
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

export default SelectDeliveryServiceScreen;
