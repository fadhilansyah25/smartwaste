import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {style} from './style';
import {
  AddressCard,
  CustomButton,
  DeliveryServiceCard,
  UniqueCodeCard,
} from '@src/component';
import {useSuccesTransactionScreen} from './hook';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {colors} from '@src/const/colors';
import TruckSvg from '@src/assets/svg/delivery-car.svg';
import {formatterIDR} from '@src/utils/formatter';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
dayjs.locale('id');
import {useFocusEffect} from '@react-navigation/native';

const SuccessTransactionScreen = () => {
  const {transactionData, handleBackToMenu} = useSuccesTransactionScreen();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <SafeAreaView style={style.screenContainer}>
      <ScrollView
        contentContainerStyle={style.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        {transactionData != undefined ? (
          <>
            <UniqueCodeCard uniqueCode={transactionData.package_code} />

            <View style={{marginTop: 20, gap: 12}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontSize: 12}}>Kode Send Your Waste</Text>
                  <Text style={{fontWeight: '500', color: colors.T500}}>
                    {transactionData.package_code}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 12}}>Status</Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: colors.N100,
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      backgroundColor: colors.O900,
                      textTransform: 'capitalize',
                      fontSize: 14,
                      borderRadius: 5,
                    }}>
                    {transactionData.status}
                  </Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontSize: 12}}>Tanggal</Text>
                  <Text style={{fontWeight: '500', color: colors.T500}}>
                    {dayjs(transactionData.transaction_date).format(
                      'dddd, DD MMMM YYYY',
                    )}
                  </Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontSize: 12}}>Poin</Text>
                  <Text style={{fontWeight: '500', color: colors.T500}}>
                    1.200 Poin
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 12}}>Status</Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: colors.N100,
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      backgroundColor: colors.O900,
                      textTransform: 'capitalize',
                      fontSize: 14,
                      borderRadius: 5,
                    }}>
                    unrealized
                  </Text>
                </View>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', columnGap: 10}}>
                {/* Map Maker Dashed  */}
                <View style={{alignItems: 'center'}}>
                  <Icon name="map-marker" size={24} color={colors.G900} />
                  <View style={style.dashedLine} />
                  <Icon name="map-marker" size={24} color={colors.O700} />
                </View>

                <View style={{flex: 1}}>
                  {/* Pengirim sampah Card */}
                  <View style={{rowGap: 12}}>
                    <View style={{rowGap: 8}}>
                      {/* Pengirim Sampah Header */}
                      <Text style={{fontWeight: '700', color: colors.T600}}>
                        PENGIRIM
                      </Text>
                      <AddressCard
                        placeName={transactionData.user_name}
                        adress={transactionData.user_address}
                      />
                    </View>

                    {/* Address text input */}
                    <TextInput
                      multiline={true}
                      editable={false}
                      value={transactionData.detail_address}
                      numberOfLines={2}
                      style={[{verticalAlign: 'top'}, style.inputText]}
                    />
                  </View>

                  {/* Penerima Sampah Header */}
                  <View style={style.mitraHeaderCard}>
                    <Text style={{fontWeight: '700', color: colors.T600}}>
                      PENERIMA
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginLeft: 24 + 10, rowGap: 8, marginTop: 3}}>
                <AddressCard
                  placeName={transactionData.transaction_waste_mitra.name}
                  adress={transactionData.transaction_waste_mitra.address}
                />
                <Text style={{color: colors.T600}}>
                  {transactionData.transaction_waste_mitra.phoneNumber}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20, rowGap: 8}}>
              <View style={{flexDirection: 'row', columnGap: 10}}>
                <EntypoIcon name="box" size={24} color={colors.T500} />
                <View>
                  <Text style={{fontWeight: '700', color: colors.T600}}>
                    DETAIL SAMPAH
                  </Text>
                </View>
              </View>

              <View style={{marginLeft: 24 + 10, rowGap: 14}}>
                <TextInput
                  editable={false}
                  multiline={true}
                  numberOfLines={3}
                  value={transactionData.detail_waste}
                  style={[{verticalAlign: 'top'}, style.inputText]}
                />
              </View>
            </View>
            <View style={{marginTop: 20, rowGap: 8}}>
              <View style={{flexDirection: 'row', columnGap: 10}}>
                <TruckSvg width={24} height={24} />
                <View>
                  <Text style={{fontWeight: '700', color: colors.T600}}>
                    JASA PENGIRIMAN
                  </Text>
                </View>
              </View>

              <View style={{marginLeft: 24 + 10, rowGap: 14}}>
                <DeliveryServiceCard
                  serviceName={
                    transactionData.transaction_waste_delivery_service
                      .delivery_name
                  }
                />
                <View style={{rowGap: 10}}>
                  <Text style={style.titleText}>Rincian</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 12}}>Berat Paket Aktual</Text>
                    <Text style={style.detailText}>
                      {transactionData.waste_weight} Kg
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 12}}>Harga / Kg</Text>
                    <Text style={style.detailText}>
                      {formatterIDR.format(
                        transactionData
                          .transaction_waste_delivery_service_product
                          .price_perkilo,
                      )}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={style.detailText}>Total</Text>
                    <Text style={style.detailText}>
                      {formatterIDR.format(
                        transactionData.waste_weight *
                          transactionData
                            .transaction_waste_delivery_service_product
                            .price_perkilo,
                      )}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={style.bottomNavContainer}>
        <CustomButton
          label="Kembali Ke Menu Utama"
          type="fill"
          activeOpacity={0.8}
          onPress={handleBackToMenu}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessTransactionScreen;
